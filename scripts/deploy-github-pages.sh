#!/usr/bin/env bash
set -euo pipefail

repo="franzenjb/red-cross-language-access-demo"
branch="main"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is missing. Install gh first."
  exit 1
fi

gh auth status >/dev/null
npm run check

if ! gh api "repos/$repo/pages" >/dev/null 2>&1; then
  gh api -X POST "repos/$repo/pages" --input - <<JSON
{"source":{"branch":"$branch","path":"/"}}
JSON
fi

git push origin "$branch"

echo "GitHub Pages:"
echo "https://franzenjb.github.io/red-cross-language-access-demo/"
echo "https://franzenjb.github.io/red-cross-language-access-demo/volunteer-intake.html"
echo "https://franzenjb.github.io/red-cross-language-access-demo/emergency-alert-mirror.html"
