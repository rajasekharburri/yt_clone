#!/bin/bash
set -e

# Update and install Docker and utilities
apt-get update -y
apt-get install -y docker.io curl

# Configure kernel settings for SonarQube's embedded Elasticsearch
sysctl -w vm.max_map_count=524288
sysctl -w fs.file-max=131072
echo "vm.max_map_count=524288" >> /etc/sysctl.conf
echo "fs.file-max=131072" >> /etc/sysctl.conf

# Start and enable Docker
systemctl start docker
systemctl enable docker
usermod -aG docker ubuntu

# Run SonarQube Community LTS container on port 9000
docker run -d --name sonarqube \
  -p 9000:9000 \
  --restart always \
  -v sonarqube_data:/opt/sonarqube/data \
  -v sonarqube_extensions:/opt/sonarqube/extensions \
  -v sonarqube_logs:/opt/sonarqube/logs \
  sonarqube:lts-community

