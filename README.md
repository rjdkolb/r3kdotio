# Description
CoreUI React.js + Spring boot

## Docker
### Build
mvn clean package docker:build

### Pull
docker pull r3kdotio/springbootreact-starter

## Kubernetes
kubectl create -f springbootreact-starter-deployment.yaml
kubectl expose deployment springbootreact-starter-deployment


