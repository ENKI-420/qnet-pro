#!/bin/bash

# DNALang Vercel Deployment Script
# Usage: ./scripts/deploy.sh [production|preview]

set -e

ENVIRONMENT=${1:-preview}
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "🚀 Starting DNALang deployment to $ENVIRONMENT..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI not found. Install with: npm install -g vercel"
    exit 1
fi
print_status "Vercel CLI installed"

if ! command -v git &> /dev/null; then
    print_error "Git not found. Please install Git."
    exit 1
fi
print_status "Git installed"

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes:"
    git status -s
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Run pre-deployment checks
echo ""
echo "🔍 Running pre-deployment checks..."

# Type check
echo "Checking TypeScript types..."
if npm run type-check; then
    print_status "Type check passed"
else
    print_error "Type check failed"
    exit 1
fi

# Lint
echo "Running linter..."
if npm run lint; then
    print_status "Lint check passed"
else
    print_warning "Lint check failed (continuing anyway)"
fi

# Build test
echo "Testing build..."
if npm run build; then
    print_status "Build test passed"
else
    print_error "Build test failed"
    exit 1
fi

# Environment variable check
echo ""
echo "🔐 Checking environment variables..."

REQUIRED_VARS=(
    "DATABASE_URL"
    "JWT_SECRET"
    "NEXT_PUBLIC_API_URL"
)

for var in "${REQUIRED_VARS[@]}"; do
    if vercel env ls | grep -q "$var"; then
        print_status "$var is set"
    else
        print_error "$var is not set in Vercel"
        echo "Add it with: vercel env add $var"
        exit 1
    fi
done

# Deploy
echo ""
echo "🚀 Deploying to $ENVIRONMENT..."

if [ "$ENVIRONMENT" = "production" ]; then
    print_warning "Deploying to PRODUCTION"
    read -p "Are you sure? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    
    DEPLOYMENT_URL=$(vercel --prod --yes)
else
    DEPLOYMENT_URL=$(vercel --yes)
fi

print_status "Deployment initiated"
echo "Deployment URL: $DEPLOYMENT_URL"

# Wait for deployment to complete
echo ""
echo "⏳ Waiting for deployment to complete..."
sleep 10

# Health check
echo ""
echo "🏥 Running health checks..."

HEALTH_URL="$DEPLOYMENT_URL/api/health"
MAX_RETRIES=5
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if curl -f -s "$HEALTH_URL" > /dev/null; then
        print_status "Health check passed"
        break
    else
        RETRY_COUNT=$((RETRY_COUNT + 1))
        print_warning "Health check failed (attempt $RETRY_COUNT/$MAX_RETRIES)"
        sleep 5
    fi
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    print_error "Health check failed after $MAX_RETRIES attempts"
    exit 1
fi

# Smoke tests
echo ""
echo "🧪 Running smoke tests..."

# Test homepage
if curl -f -s "$DEPLOYMENT_URL" > /dev/null; then
    print_status "Homepage accessible"
else
    print_error "Homepage not accessible"
    exit 1
fi

# Test API endpoint
if curl -f -s "$DEPLOYMENT_URL/api/organisms" > /dev/null; then
    print_status "API endpoint accessible"
else
    print_warning "API endpoint not accessible (may require auth)"
fi

# Success
echo ""
echo -e "${GREEN}✓ Deployment successful!${NC}"
echo ""
echo "📊 Deployment Summary:"
echo "  Environment: $ENVIRONMENT"
echo "  URL: $DEPLOYMENT_URL"
echo "  Timestamp: $TIMESTAMP"
echo ""
echo "📝 Next steps:"
echo "  1. Monitor logs: vercel logs --follow"
echo "  2. Check analytics: https://vercel.com/dashboard"
echo "  3. Test critical user flows"
echo ""

# Save deployment info
echo "$TIMESTAMP,$ENVIRONMENT,$DEPLOYMENT_URL" >> deployments.log
print_status "Deployment logged to deployments.log"
