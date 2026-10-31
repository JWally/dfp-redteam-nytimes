# NYTimes.com — defense + ad-tech stack assessment (2026-10-31)

**Subject:** the defense mechanisms + trackers deployed on `nytimes.com`
**Method:** public-site analysis + runtime observation. Clean-launch real Chrome
(the DataDome gate blocks automated launches); all 3rd-party telemetry observed
or locally fulfilled; no account, no paywall bypass attempted, nothing
forwarded.
**Result:** NYT runs the densest commercial stack of anything we've examined:
**DataDome** at the edge, a **server-side paywall meter**, Google Ad Manager +
Amazon + Prebid + ~20 SSP cookie-syncs, LiveRamp/TrustArc consent, and
Chartbeat/Comscore/GTM analytics. The *good* part (paywall) is server-decided;
the *snoopy* part (ad-tech) is the standard surveillance web.

---

## 1. The stack

| Layer | Product | Evidence |
|---|---|---|
| **Edge anti-bot** | **DataDome** | `ct.captcha-delivery.com/c.js`, `var dd={cid,hsh,e,cookie}` block, `datadome` cookie; blocks automated launches (403 "Please enable JS and disable any ad blocker") |
| **Paywall meter** | **NYT in-house (server-side)** | `Meter`/`useMeter`/`MeterContext` chunks → `POST /svc/onsite-messaging/query` + `samizdat-graphql…getOfferSupergraph`; viewed count from `meter()?.data?.viewed` (**server-computed**) |
| **Ad serving** | Google Ad Manager (GPT), Amazon APS, Prebid wrappers | `securepubads.g.doubleclick.net/gpt.js`, `c.amazon-adsystem.com/aax2/apstag.js`, `privacymanager.io/ats.js` |
| **SSP cookie-syncs** | ~20 networks | Mediavine, 33Across, Outbrain, Unruly, Undertone, 1rx, Rubicon, Advanse, Index, Casale, AppNexus family, YellowBlue, Cootlogix, GeoEdge… |
| **Ad verification** | DoubleVerify | `tps.doubleverify.com/visit.js` (with `gdpr_consent` params) |
| **Consent** | LiveRamp/PrivacyManager + TrustArc | `privacymanager.io/launchpad.js`, `choices.truste.com` |
| **Analytics** | Chartbeat, Comscore, GTM ×2, Sentry | `chartbeat_mab.js`, `comscore-streaming.js`, `googletagmanager.com/gtm.js` |
| **First-party** | NYT analytics + GraphQL | `a.et.nytimes.com`, `samizdat-graphql.nytimes.com` |

## 2. DataDome (the edge gate) — same clean-launch lesson

- Headless/automated launch → 403 with the `dd={rt:'c', cid:'AHrlqAAAAAM…', hsh:'499AE3…', e:'<encrypted>', cookie:'<datadome value>'}` block + `ct.captcha-delivery.com/c.js`.
- **Clean-launch real Chrome** → DataDome passes, full page loads, `datadome` cookie set. Same launch-signature gate as hCaptcha/BootBarn/Coinbase-CF: the edge decides on the *environment*, not a client token.
- DataDome is the "hard" commodity CAPTCHA vendor (like Cloudflare/hCaptcha) — its challenge is transport+JS-verified, not client-mintable.

## 3. The paywall — the *good* pattern (server-side)

NYT's reader meter is **not** a client counter. Observed flow:

```
Meter/useMeter chunk
  → POST /svc/onsite-messaging/query          (entitlement/messaging state)
  → samizdat-graphql.nytimes.com  getOfferSupergraph  (offers, country)
  → meter()?.data?.viewed  ← viewed count FROM THE SERVER
  → PaywallInertBoundary  (blocks interaction when over limit)
```

- The viewed-article count is **server-computed** (keyed by the `nyt-a` cookie / account / IP), returned by the API — not stored in a client-rewritable counter.
- Client-side artifacts (`useMeter` chunk) are UI + display logic, not the decision.
- **This is the "good" paywall design:** the enforcement lives server-side, so tampering the client does not reset the meter. (Bypass, where it exists, is an account/identity problem — incognito, new session, etc. — not a client-code problem.)

## 4. The ad-tech — the *snoopy* part

The standard surveillance web, in full:

- **Google Ad Manager (GPT)** + **Amazon APS (apstag)** + Prebid/ATS header bidding.
- **~20 SSP cookie-sync iframes** on first load (Mediavine, 33Across, Outbrain, Unruly, Undertone, 1rx, Rubicon, Advanse, Casale, Index, AppNexus family, YellowBlue, Cootlogix, GeoEdge, Adtion…), each matching the `datadome`/NYT identity across ad networks.
- **DoubleVerify** ad-verification (`visit.js` with `gdpr_consent`, viewability params).
- **LiveRamp/PrivacyManager + TrustArc** consent plumbing feeding the ad stack.
- **Chartbeat + Comscore + 2× GTM + Sentry** analytics.

**What's collected:** the usual — page URL, referrer, UA, screen, consent state, device id (cookie-sync IDs, `datadome`), interaction/timing (Chartbeat), reading behavior (meter + analytics). Every request to `samizdat-graphql` + the cookie-syncs carries the session identity.

## 5. What makes this good vs bad (the learning)

| Good | Bad / notable |
|---|---|
| **Paywall is server-side** — meter count from API, not a client counter | **Massive surveillance surface** — ~20 SSPs + consent + analytics on every page |
| DataDome edge = transport+JS gate | Cookie-syncs share the device identity across the whole ad web |
| Consent plumbing (LiveRamp/TrustArc) exists | **`adblock` detection** — DataDome's block text demands "disable any ad blocker" |
| First-party GraphQL keeps core logic server-side | Chartbeat/Comscore behavioral tracking on every interaction |

**The honest take:** NYT separates concerns well — the **paywall (money) is server-decided** (the right call), while the **ad stack (tracking) is maximally invasive** by design. The anti-bot (DataDome) is the commodity edge layer; the paywall is the in-house server-side enforcement.

## 6. Honest boundaries

- We observed the stack and the meter API; we did **not** bypass the paywall, solve a DataDome challenge, or touch an account.
- Clean-launch observation only; all telemetry observed or locally fulfilled.
- The "bypass" question (meter reset) is an identity/session problem, out of scope — the finding is *architecture*: the paywall is server-decided.

## 7. Artifacts

| File | What |
|---|---|
| `artifacts/probe1.json` | headless probe (DataDome block state) |
| `artifacts/clean-state2.json` | clean-launch page state (googletag, comscore, meter) |
| `artifacts/stack2.json` | full host map + script inventory |
| `artifacts/meter-api.json` | the meter/GraphQL/adsync request flow |
| `scripts/nyt-probe.mjs` | headless probe |
| `scripts/nyt-clean.mjs` | clean-launch attach |
| `scripts/nyt-stack.mjs` | full tracker/script capture |
| `assets/useMeter-*.js` | the paywall meter chunk |
| `assets/Meter-*.js`, `MeterContext-*.js` | paywall chunks |

## 8. Summary line

> *"NYT layers DataDome (edge anti-bot, blocks automation) with a server-side
> paywall meter (viewed count from their GraphQL, not a client counter) and the
> full commercial ad stack (~20 SSP cookie-syncs, Google/Amazon/Prebid bidding,
> DoubleVerify, LiveRamp/TrustArc consent, Chartbeat/Comscore/GTM analytics).
> The money logic is server-decided; the tracking is maximally invasive. The
> ad-blocker-hostile DataDome gate is the same launch-signature pattern as the
> other hard blockers."*
