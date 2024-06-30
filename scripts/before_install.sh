#!/bin/bash
# Update the instance and install Node.js, npm, Git, and Nginx
sudo apt update -y
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx

# Start and enable Nginx
sudo service nginx start
sudo systemctl enable nginx
