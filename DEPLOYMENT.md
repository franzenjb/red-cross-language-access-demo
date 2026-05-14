# Deployment Playbook

This repo is intentionally static: no build step, no framework lock-in.

## GitHub

GitHub is authenticated through `gh`.

```bash
npm run deploy:github
```

Live routes:

- <https://franzenjb.github.io/red-cross-language-access-demo/>
- <https://franzenjb.github.io/red-cross-language-access-demo/volunteer-intake.html>
- <https://franzenjb.github.io/red-cross-language-access-demo/emergency-alert-mirror.html>

## Vercel

Vercel needs either an interactive CLI login or a token in the shell environment.
The deploy script checks both paths.

```bash
npm run deploy:vercel
```

If it says Vercel is not authenticated, run one of:

```bash
npx vercel login
npm run deploy:vercel
```

or:

```bash
export VERCEL_TOKEN="your-token"
npm run deploy:vercel
```

Never commit `VERCEL_TOKEN`.
