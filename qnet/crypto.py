import os, json, base64, hmac, hashlib
from dataclasses import dataclass
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey, Ed25519PublicKey
from cryptography.hazmat.primitives import serialization

def b64(x: bytes) -> str:
    return base64.urlsafe_b64encode(x).decode()

@dataclass
class KMS:
    # Demo-only: ephemeral keys
    aes_key: bytes = os.urandom(32)
    sign_priv: Ed25519PrivateKey = Ed25519PrivateKey.generate()

    @property
    def sign_pub(self) -> Ed25519PublicKey:
        return self.sign_priv.public_key()

    def export_pubkey_pem(self) -> str:
        return self.sign_pub.public_bytes(
            serialization.Encoding.PEM,
            serialization.PublicFormat.SubjectPublicKeyInfo
        ).decode()

class CryptoEngine:
    def __init__(self, kms: KMS | None = None):
        self.kms = kms or KMS()

    def encrypt(self, payload: dict) -> dict:
        nonce = os.urandom(12)
        aad = b"qnet:v1"
        data = json.dumps(payload).encode()
        aead = AESGCM(self.kms.aes_key)
        ct = aead.encrypt(nonce, data, aad)
        return {"nonce": b64(nonce), "aad": b64(aad), "ciphertext": b64(ct)}

    def decrypt(self, blob: dict) -> dict:
        aead = AESGCM(self.kms.aes_key)
        nonce = base64.urlsafe_b64decode(blob["nonce"].encode())
        aad = base64.urlsafe_b64decode(blob["aad"].encode())
        ct = base64.urlsafe_b64decode(blob["ciphertext"].encode())
        pt = aead.decrypt(nonce, ct, aad)
        return json.loads(pt.decode())

    def sign(self, payload: dict) -> str:
        data = json.dumps(payload, sort_keys=True).encode()
        sig = self.kms.sign_priv.sign(data)
        return b64(sig)

    def verify(self, payload: dict, signature_b64: str) -> bool:
        data = json.dumps(payload, sort_keys=True).encode()
        sig = base64.urlsafe_b64decode(signature_b64.encode())
        try:
            self.kms.sign_pub.verify(sig, data)
            return True
        except Exception:
            return False

def hmac_sha256(secret: bytes, data: bytes) -> str:
    return base64.urlsafe_b64encode(hmac.new(secret, data, hashlib.sha256).digest()).decode()
