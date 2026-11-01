# dfp-redteam-nytimes — NYTimes.com defense + ad-tech stack

Full details in `NYTIMES_ASSESSMENT_2026_10_31.md` and
`NYT_VERIFICATION_STACK_2026_10_31.md`.

---

## What we observed

- **DataDome at the edge** (the JS challenge gate) — the block fires on
  automated launches; clean-launch real Chrome loads the site.
- **Server-side paywall meter** (article count per session — server-decided,
  not client-mintable).
- Full ad-tech/consent/analytics stack documented (one trust/consent vendor
  noted in the verification writeup).

No client fingerprint payload of note — the anti-bot is the DataDome edge
gate, and the paywall decision is server-side.

## Status

- ⚪ Read payload: no device-fingerprint payload shipped (edge + server-meter)
- 🔴 Tamper with payload: nothing client-side to modify meaningfully
- 🔴 Mint token: DataDome edge + server-side paywall are server-decided

## Files

- writeups: `NYTIMES_ASSESSMENT_2026_10_31.md`, `NYT_VERIFICATION_STACK_2026_10_31.md`
- scripts/artifacts per the writeups
