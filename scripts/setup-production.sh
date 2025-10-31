#!/bin/bash

set -e

echo "Setting up DNALang Production Environment"
echo "=========================================="

# Check prerequisites
command -v node >/dev/null 2>&1 || { echo "Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "Docker is required but not installed. Aborting." >&2; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Setup database
echo "Setting up database..."
docker-compose up -d postgres redis

# Wait for database to be ready
echo "Waiting for database..."
sleep 10

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Seed database
echo "Seeding database..."
npx prisma db seed

# Build application
echo "Building application..."
npm run build

# Run tests
echo "Running tests..."
npm test

echo ""
echo "Production setup complete!"
echo "Start the application with: npm start"
