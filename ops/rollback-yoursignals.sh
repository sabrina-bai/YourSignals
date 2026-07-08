#!/usr/bin/env bash
set -euo pipefail

RELEASES_DIR="${RELEASES_DIR:-/var/www/yoursignals-releases}"
CURRENT_LINK="${CURRENT_LINK:-/var/www/yoursignals}"
target="${1:-}"

if [ -z "$target" ]; then
  current="$(readlink -f "$CURRENT_LINK" || true)"
  target="$(find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d | sort -r | grep -v "^$current$" | head -n 1 || true)"
fi

if [ -z "$target" ] || [ ! -d "$target" ]; then
  echo "ERROR: no rollback release found."
  echo "Usage: rollback-yoursignals [/var/www/yoursignals-releases/YYYYMMDDHHMMSS]"
  exit 2
fi

ln -sfn "$target" "$CURRENT_LINK.next"
mv -Tf "$CURRENT_LINK.next" "$CURRENT_LINK"

nginx -t
systemctl reload nginx

echo "Rolled back YourSignals to: $target"

