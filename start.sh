#!/bin/bash

set -e

ACT_RUNNER_DOWNLOAD_URL="https://gitea.com/gitea/act_runner/releases/download/v0.2.11/act_runner-0.2.11-linux-amd64"
ACT_RUNNER_PATH=".bin/$(basename $ACT_RUNNER_DOWNLOAD_URL)"

source .env

VERSION_ENDPOINT="$GITEA_INSTANCE/api/v1/version"

if ! [ -f $ACT_RUNNER_PATH ]; then
  mkdir -p $(dirname $ACT_RUNNER_PATH)
  echo "downloading act runner binary to $ACT_RUNNER_PATH"
  curl -fSL $ACT_RUNNER_DOWNLOAD_URL -o $ACT_RUNNER_PATH
  chmod +x $ACT_RUNNER_PATH
fi

echo "starting waifutea container..."
podman run -d \
  --name waifutea \
  --replace -p 9001:3000 \
  -p 2222:22 \
  -v waifutea-data:/data \
  docker.io/gitea/gitea:latest

sleep 2
echo "waiting for waifutea to be ready at $VERSION_ENDPOINT..."
until curl -sSf $VERSION_ENDPOINT > /dev/null; do
  sleep 1
done
echo "waifu is ready! 🥵"

echo "starting runner..."
podman run -d --replace \
  -e GITEA_INSTANCE_URL="$GITEA_INSTANCE" \
  -e GITEA_RUNNER_REGISTRATION_TOKEN="$REGISTRATION_TOKEN" \
  -e GITEA_RUNNER_NAME=waifumustact \
  -v waifutea-act-runner:/data:Z \
  -v "$XDG_RUNTIME_DIR/podman/podman.sock:/var/run/docker.sock:Z" \
  --name waifutea-act-runner \
  --security-opt label=disable \
  gitea/act_runner:nightly
