PY=python
APP=qnet.server:app

run:
	uvicorn $(APP) --reload --host 127.0.0.1 --port 8000

seed:
	$(PY) -m qnet.db --init

demo:
	$(PY) -m qnet.demo_cli

lint:
	$(PY) -m pip install ruff && ruff check .



test:
	pytest -q

lint:
	ruff check .

security:
	bandit -c bandit.yaml -r qnet || true

openapi:
	curl -s http://127.0.0.1:8000/openapi.json -o openapi.json || cp openapi.yaml openapi.json
