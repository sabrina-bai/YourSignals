#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/root/YourSignals-zip-src}"
RELEASES_DIR="${RELEASES_DIR:-/var/www/yoursignals-releases}"
CURRENT_LINK="${CURRENT_LINK:-/var/www/yoursignals}"
BRANCH="${1:-main}"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "ERROR: $APP_DIR is not a Git repository yet."
  echo "Connect the server source directory to the GitHub repo before running deploy."
  exit 2
fi

cd "$APP_DIR"

git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

npm ci
npm run build

if [ ! -f "$APP_DIR/dist/index.html" ]; then
  echo "ERROR: build finished but dist/index.html was not found."
  exit 3
fi

stamp="$(date +%Y%m%d%H%M%S)"
release="$RELEASES_DIR/$stamp"

mkdir -p "$release"
cp -a "$APP_DIR/dist/." "$release/"

ln -sfn "$release" "$CURRENT_LINK.next"
mv -Tf "$CURRENT_LINK.next" "$CURRENT_LINK"

nginx -t
systemctl reload nginx

echo "Deployed YourSignals release: $release"

