#!/bin/bash
# Navigate to the project directory
cd /home/ubuntu/befive/companywebsite

# Install project dependencies
npm install

# Build the Next.js application
npm run build
if [ ! -d ".next" ]; then
    echo "Build directory not found. Build failed."
    cat /home/ec2-user/your-nextjs-app/npm-build.log
    exit 1
fi