# DNALang Platform - Complete Setup Guide

## Overview

This guide provides complete instructions for deploying the DNALang platform with all components:

- **Web Application** (Next.js 15 + React 19)
- **FastAPI Backend** (Python 3.11)
- **PostgreSQL Database**
- **Redis Cache**
- **Quantum Swarm CLI**
- **Authentication System**
- **Real-time Deployment Monitoring**

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     DNALang Platform                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │  Web App │───▶│ FastAPI  │───▶│PostgreSQL│            │
│  │ (Next.js)│    │ Backend  │    │ Database │            │
│  └──────────┘    └──────────┘    └──────────┘            │
│       │               │                                     │
│       │               ▼                                     │
│       │          ┌──────────┐                              │
│       └─────────▶│  Redis   │                              │
│                  │  Cache   │                              │
│                  └──────────┘                              │
│                       │                                     │
│                       ▼                                     │
│                  ┌──────────┐                              │
│                  │ Quantum  │                              │
│                  │  Swarm   │                              │
│                  └──────────┘                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Quick Start (Docker Compose)

### Prerequisites

- Docker 24.0+
- Docker Compose 2.20+
- IBM Quantum API Key (optional, for real quantum hardware)
- Gemini API Key (optional, for AI features)

### Installation

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/your-org/dnalang-platform.git
cd dnalang-platform
\`\`\`

2. **Set environment variables**

\`\`\`bash
# Create .env file
cat > .env << EOF
IBM_QUANTUM_API_KEY=your_ibm_quantum_key_here
GEMINI_API_KEY=your_gemini_key_here
POSTGRES_PASSWORD=secure_password_here
JWT_SECRET=your_jwt_secret_here
EOF
\`\`\`

3. **Start all services**

\`\`\`bash
docker-compose up --build
\`\`\`

4. **Access the platform**

- Web Application: http://localhost:3000
- API Documentation: http://localhost:8000/docs
- Database: localhost:5432
- Redis: localhost:6379

## Manual Installation

### 1. Web Application Setup

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
\`\`\`

### 2. FastAPI Backend Setup

\`\`\`bash
cd api

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn dnalang-api:app --reload --host 0.0.0.0 --port 8000
\`\`\`

### 3. Database Setup

\`\`\`bash
# Start PostgreSQL
docker run -d \
  --name dnalang-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=dnalang \
  -p 5432:5432 \
  postgres:16-alpine

# Run migrations
cd api
alembic upgrade head
\`\`\`

### 4. Redis Setup

\`\`\`bash
# Start Redis
docker run -d \
  --name dnalang-redis \
  -p 6379:6379 \
  redis:7-alpine
\`\`\`

## Configuration

### Environment Variables

#### Web Application

\`\`\`bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
GEMINI_API_KEY=your_gemini_key
\`\`\`

#### FastAPI Backend

\`\`\`bash
IBM_QUANTUM_API_KEY=your_ibm_key
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/dnalang
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_secret_key
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
\`\`\`

## Features

### 1. Authentication System

- Email/password authentication
- OAuth (GitHub, Google)
- JWT token-based sessions
- Role-based access control

### 2. Project Management

- Create and organize quantum projects
- Collaborate with team members
- Version control for organisms
- Import/export functionality

### 3. Organism Management

- Visual organism editor
- Real-time fitness monitoring
- Autonomous evolution
- Mutation tracking

### 4. Integration Marketplace

- One-click integrations
- IBM Quantum backends
- Supabase database
- Vercel Blob storage

### 5. Plugin Repository

- Quantum Swarm CLI
- Benchmark Suite
- FastAPI Wrapper
- Circuit Visualizer

### 6. Deployment Management

- Real-time status monitoring
- Multi-environment support
- Automatic rollbacks
- Health checks

## API Endpoints

### Authentication

\`\`\`
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
POST   /api/auth/refresh      - Refresh access token
POST   /api/auth/logout       - Logout user
\`\`\`

### Organisms

\`\`\`
GET    /api/organisms         - List all organisms
POST   /api/organisms         - Create new organism
GET    /api/organisms/:id     - Get organism details
PUT    /api/organisms/:id     - Update organism
DELETE /api/organisms/:id     - Delete organism
POST   /api/organisms/:id/run - Execute organism
\`\`\`

### Deployments

\`\`\`
GET    /api/deployments       - List deployments
POST   /api/deployments       - Create deployment
GET    /api/deployments/:id   - Get deployment status
PUT    /api/deployments/:id   - Update deployment
DELETE /api/deployments/:id   - Delete deployment
\`\`\`

### Quantum Operations

\`\`\`
POST   /api/quantum/run       - Execute quantum circuit
GET    /api/quantum/jobs      - List quantum jobs
GET    /api/quantum/jobs/:id  - Get job status
POST   /api/benchmarks/run    - Run quantum benchmark
\`\`\`

### WebSocket Endpoints

\`\`\`
WS     /ws/organisms/:id      - Real-time organism updates
WS     /ws/deployments/:id    - Real-time deployment status
WS     /ws/swarm              - Swarm coherence monitoring
\`\`\`

## Deployment

### Vercel (Web Application)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

### Railway (Backend + Database)

\`\`\`bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
\`\`\`

### Docker (Complete Stack)

\`\`\`bash
# Build and push images
docker-compose build
docker-compose push

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## Monitoring

### Health Checks

\`\`\`bash
# Web application
curl http://localhost:3000/api/health

# FastAPI backend
curl http://localhost:8000/health

# Database
pg_isready -h localhost -p 5432

# Redis
redis-cli ping
\`\`\`

### Logs

\`\`\`bash
# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f web
docker-compose logs -f api
\`\`\`

## Troubleshooting

### Common Issues

1. **Port already in use**
   \`\`\`bash
   # Find process using port
   lsof -i :3000
   # Kill process
   kill -9 <PID>
   \`\`\`

2. **Database connection failed**
   \`\`\`bash
   # Check PostgreSQL is running
   docker ps | grep postgres
   # Restart database
   docker-compose restart db
   \`\`\`

3. **Redis connection failed**
   \`\`\`bash
   # Check Redis is running
   docker ps | grep redis
   # Test connection
   redis-cli ping
   \`\`\`

## Security

### Best Practices

1. **Never commit secrets** - Use environment variables
2. **Enable HTTPS** - Use SSL certificates in production
3. **Rate limiting** - Implement API rate limits
4. **Input validation** - Validate all user inputs
5. **Regular updates** - Keep dependencies up to date

### Security Headers

\`\`\`typescript
// next.config.mjs
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
\`\`\`

## Performance

### Optimization Tips

1. **Enable caching** - Use Redis for frequently accessed data
2. **Database indexing** - Add indexes to frequently queried columns
3. **CDN** - Use Vercel Edge Network for static assets
4. **Code splitting** - Lazy load components
5. **Image optimization** - Use Next.js Image component

## Support

- Documentation: https://dnalang.dev/docs
- GitHub Issues: https://github.com/your-org/dnalang-platform/issues
- Discord Community: https://discord.gg/dnalang
- Email: support@dnalang.dev

## License

MIT License - see LICENSE file for details
