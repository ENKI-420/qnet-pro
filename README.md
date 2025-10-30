# DNALang Multi-Platform Quantum Programming System

A comprehensive quantum programming platform using biological metaphors, supporting web, mobile (Android/Termux), and browser extension environments.

## Features

- **Web Platform**: Full-featured IDE with code editor, visualization, and quantum execution
- **Chrome Extension**: Execute DNALang code directly from your browser
- **Android App**: Mobile quantum development with React Native
- **Termux Integration**: Complete Linux environment with CLI tools on Android

## Quick Start

### Web Platform

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000` to access the DNALang web IDE.

### Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `chrome-extension` directory
4. The DNALang extension icon will appear in your toolbar

### Android App

\`\`\`bash
cd android-app
npm install
npx expo start
\`\`\`

Scan the QR code with Expo Go app on your Android device.

### Termux Setup

On your Android device:

1. Install Termux from F-Droid
2. Run the installation script:

\`\`\`bash
curl -O https://dnalang.dev/termux-setup/install.sh
bash install.sh
\`\`\`

## DNALang Syntax

\`\`\`dna
ORGANISM QuantumOptimizer
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.92
  }

  GENOME {
    GENE OptimizationGene {
      purpose: "Optimize quantum circuits"
      expression_level: 1.0

      MUTATIONS {
        mitigate_plateau {
          trigger_conditions: [
            {metric: "gradient_variance", operator: "<", value: 0.1}
          ]
          methods: ["apply_wgf_optimizer"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    optimizer: QuantumAgent(backend: "ibm_quantum")
  }
}
\`\`\`

## Complete Platform Setup

### Prerequisites

- Docker 24.0+ and Docker Compose 2.20+
- Node.js 20+ (for local development)
- Python 3.11+ (for API development)
- IBM Quantum API Key (optional, for real quantum hardware)
- Gemini API Key (optional, for AI features)

### Quick Start with Docker

1. **Clone and configure**

\`\`\`bash
git clone https://github.com/your-org/dnalang-platform.git
cd dnalang-platform

# Create environment file
cat > .env << EOF
IBM_QUANTUM_API_KEY=your_ibm_key_here
GEMINI_API_KEY=your_gemini_key_here
POSTGRES_PASSWORD=secure_password_123
JWT_SECRET=your_jwt_secret_key_here
EOF
\`\`\`

2. **Start all services**

\`\`\`bash
docker-compose up --build
\`\`\`

3. **Access the platform**

- Web Application: http://localhost:3000
- API Documentation: http://localhost:8000/docs
- QNet Service: http://localhost:8001
- Database: localhost:5432
- Redis: localhost:6379

### Services Overview

| Service | Port | Description |
|---------|------|-------------|
| Web App | 3000 | Next.js frontend with DNALang IDE |
| FastAPI | 8000 | Python backend with quantum integration |
| QNet | 8001 | Financial quantum network service |
| PostgreSQL | 5432 | Primary database |
| Redis | 6379 | Cache and real-time updates |

### Platform Features

#### 1. Authentication & User Management
- Email/password authentication
- OAuth integration (GitHub, Google)
- JWT token-based sessions
- Role-based access control (RBAC)

#### 2. Project Management
- Create and organize quantum projects
- Team collaboration features
- Version control for organisms
- Import/export functionality

#### 3. Organism Development
- Visual DNALang editor with syntax highlighting
- Real-time fitness and consciousness monitoring
- Autonomous evolution engine
- Mutation tracking and rollback

#### 4. Integration Marketplace
- **Native Integrations**:
  - Quantum Swarm CLI
  - Benchmark Suite
  - FastAPI Wrapper
  - Circuit Visualizer
- **Connectable Accounts**:
  - IBM Quantum
  - Qiskit Runtime
  - Supabase
  - Vercel Blob

#### 5. Plugin Repository
- Download CLI tools
- API wrappers
- Visualization libraries
- Development kits

#### 6. Deployment Management
- Real-time status monitoring
- Multi-environment support (dev/staging/prod)
- Automatic health checks
- Rollback capabilities

### API Endpoints

#### Authentication
\`\`\`
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
POST   /api/auth/refresh      - Refresh access token
POST   /api/auth/logout       - Logout user
GET    /api/auth/me           - Get current user
\`\`\`

#### Projects
\`\`\`
GET    /api/projects          - List all projects
POST   /api/projects          - Create new project
GET    /api/projects/:id      - Get project details
PUT    /api/projects/:id      - Update project
DELETE /api/projects/:id      - Delete project
\`\`\`

#### Organisms
\`\`\`
GET    /api/organisms         - List all organisms
POST   /api/organisms         - Create new organism
GET    /api/organisms/:id     - Get organism details
PUT    /api/organisms/:id     - Update organism
DELETE /api/organisms/:id     - Delete organism
POST   /api/organisms/:id/run - Execute organism
POST   /api/organisms/:id/evolve - Start evolution
\`\`\`

#### Deployments
\`\`\`
GET    /api/deployments       - List deployments
POST   /api/deployments       - Create deployment
GET    /api/deployments/:id   - Get deployment status
PUT    /api/deployments/:id   - Update deployment
DELETE /api/deployments/:id   - Delete deployment
\`\`\`

#### Quantum Operations
\`\`\`
POST   /api/quantum/run       - Execute quantum circuit
GET    /api/quantum/jobs      - List quantum jobs
GET    /api/quantum/jobs/:id  - Get job status
POST   /api/benchmarks/run    - Run quantum benchmark
GET    /api/benchmarks        - List benchmark results
\`\`\`

#### WebSocket Endpoints
\`\`\`
WS     /ws/organisms/:id      - Real-time organism updates
WS     /ws/deployments/:id    - Real-time deployment status
WS     /ws/swarm              - Swarm coherence monitoring
WS     /ws/notifications      - User notifications
\`\`\`

### Development

#### Local Web Development

\`\`\`bash
npm install
npm run dev
\`\`\`

#### Local API Development

\`\`\`bash
cd api
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn dnalang-api:app --reload
\`\`\`

#### Running Tests

\`\`\`bash
# Frontend tests
npm test

# Backend tests
cd api
pytest

# Integration tests
npm run test:integration
\`\`\`

### Deployment

#### Vercel (Web Application)

\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

#### Railway (Backend + Database)

\`\`\`bash
npm i -g @railway/cli
railway login
railway up
\`\`\`

#### Docker Production

\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

### Environment Variables

Set these in the Vars section of the v0 in-chat sidebar or in your deployment platform:

- `IBM_QUANTUM_API_KEY` - Your IBM Quantum API key
- `GEMINI_API_KEY` - Your Gemini API key for AI features
- `POSTGRES_PASSWORD` - Secure password for PostgreSQL
- `JWT_SECRET` - Secret key for JWT token generation
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_WS_URL` - WebSocket URL

### Monitoring & Health Checks

\`\`\`bash
# Check all services
docker-compose ps

# View logs
docker-compose logs -f

# Health check endpoints
curl http://localhost:3000/api/health
curl http://localhost:8000/health
\`\`\`

### Troubleshooting

#### Port Conflicts
\`\`\`bash
# Find process using port
lsof -i :3000
# Kill process
kill -9 <PID>
\`\`\`

#### Database Connection Issues
\`\`\`bash
# Restart database
docker-compose restart db
# Check logs
docker-compose logs db
\`\`\`

#### Redis Connection Issues
\`\`\`bash
# Test Redis connection
redis-cli ping
# Restart Redis
docker-compose restart redis
\`\`\`

### Security

- Never commit `.env` files
- Use strong passwords for database
- Enable HTTPS in production
- Implement rate limiting
- Regular security audits
- Keep dependencies updated

### Support

- Documentation: https://dnalang.dev/docs
- GitHub Issues: https://github.com/your-org/dnalang-platform/issues
- Discord: https://discord.gg/dnalang
- Email: support@dnalang.dev

### License

MIT License - see LICENSE file for details

## Architecture

See [docs/SIC-1-ARCHITECTURE.md](docs/SIC-1-ARCHITECTURE.md) for complete architecture documentation.

See [docs/INTEGRATION.md](docs/INTEGRATION.md) for integration guides.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment strategies.
