#!/bin/bash
# Update the instance and install Node.js, npm, and Git
sudo apt update -y
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git
