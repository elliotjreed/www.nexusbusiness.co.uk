#!/usr/bin/env bash
set -euo pipefail

docker build -f ./php/Dockerfile -t elliotjreed/nexusbusiness-php:latest .
docker build -f ./nginx/Dockerfile -t elliotjreed/nexusbusiness-api-nginx:latest .

docker push elliotjreed/nexusbusiness-php:latest
docker push elliotjreed/nexusbusiness-api-nginx:latest
