#!/usr/bin/env bash
set -euo pipefail

npm run check

if [ -n "${VERCEL_TOKEN:-}" ]; then
  npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
  exit 0
fi

if npx vercel whoami >/dev/null 2>&1; then
  npx vercel deploy --prod --yes
  exit 0
fi

cat <<'EOF'
Vercel is not authenticated on this machine.

Use one of these fixes:

1. Interactive login:
   npx vercel login
   npm run deploy:vercel

2. Token-based deploy:
   export VERCEL_TOKEN="your-token"
   npm run deploy:vercel

Do not commit VERCEL_TOKEN to GitHub.
EOF

exit 1
