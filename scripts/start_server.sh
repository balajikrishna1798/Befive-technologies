#!/bin/bash
# Add npm global binaries to the PATH
export PATH=$PATH:/usr/local/bin

# Navigate to the project directory
cd /home/ubuntu/befive/companywebsite

# Install PM2 globally
sudo npm install -g pm2

# Start the Next.js application using PM2
pm2 start npm --name "befive" -- run start -- -p 3000

