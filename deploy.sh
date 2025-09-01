#!/bin/bash

# KIN Protocol Deployment Script
# Deploys to CryptoSI VPS with Docker + Traefik

set -e

PROJECT_NAME="kinprotocol"
DOMAIN="kinprotocol.com"
SERVER_USER="carl"
SERVER_IP="173.249.36.76"
REMOTE_PATH="~/sites/${PROJECT_NAME}"

echo "🚀 Starting deployment for ${PROJECT_NAME}..."

# Create deployment archive
echo "📦 Creating deployment archive..."
zip -r "${PROJECT_NAME}-$(date +%Y%m%d-%H%M%S).zip" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x "*.zip" \
  -x ".env.local"

ARCHIVE_NAME=$(ls ${PROJECT_NAME}-*.zip | tail -1)

echo "📤 Uploading ${ARCHIVE_NAME} to server..."

# Upload and deploy
ssh ${SERVER_USER}@${SERVER_IP} "mkdir -p ${REMOTE_PATH}"
scp ${ARCHIVE_NAME} ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}/

ssh ${SERVER_USER}@${SERVER_IP} << EOF
  cd ${REMOTE_PATH}
  
  echo "🛑 Stopping existing container..."
  docker-compose down || true
  
  echo "🗂️  Extracting new version..."
  unzip -o ${ARCHIVE_NAME}
  rm ${ARCHIVE_NAME}
  
  echo "🏗️  Building and starting container..."
  docker-compose up -d --build
  
  echo "🧹 Cleaning up old images..."
  docker image prune -f
  
  echo "✅ Deployment complete!"
  echo "🌐 Site available at: https://${DOMAIN}"
EOF

echo "🎉 Deployment finished successfully!"
echo "🌐 Your site should be available at: https://${DOMAIN}"

# Clean up local archive
rm ${ARCHIVE_NAME}