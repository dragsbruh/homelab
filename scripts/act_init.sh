#!/bin/sh

RUNNER_FILE="/data/.runner"
RUNNER_SCRIPT="/usr/local/bin/run.sh"

echo "[init] act-runner startup init"

if [ -s "$RUNNER_FILE" ]; then
  echo "[init] found .runner file in /data — skipping registration"
else
  echo "[init] no .runner file — using registration token"
  if [ -z "$GITEA_RUNNER_REGISTRATION_TOKEN" ]; then
    echo "[init error] no token provided and runner not registered. exiting."
    exit 1
  fi
fi

echo "[init] waiting 5 seconds for gitea"
sleep 5

exec "$RUNNER_SCRIPT"
