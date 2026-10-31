#!/usr/bin/env node
/** nyt-stack.mjs — attach to clean Chrome on NYT, capture EVERY 3rd-party
 *  host + the paywall/ad-tech/consent globals + key script URLs. */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
const b = await chromium.connectOverCDP('http://127.0.0.1:9555');
const ctx = b.contexts()[0];
const page = ctx.pages().find(p=>p.url().includes('nytimes.com') && !p.url().includes('amazon')) || ctx.pages()[0];
const hosts = {}; const scripts = [];
page.on('response', async r => {
  const u = r.url();
  try { const h = new URL(u).host; hosts[h]=(hosts[h]||0)+1; } catch(_){}
  if (/\.js($|\?)/.test(u)) scripts.push(u.slice(0,130));
});
await page.goto('https://www.nytimes.com/', { waitUntil:'load', timeout:60000 }).catch(()=>{});
await page.waitForTimeout(16000);
const globals = await page.evaluate(() => {
  const g = Object.keys(window).filter(k=>/googletag|chartbeat|quant|comscore|__cmp|OneTrust|consent|meter|paywall|nyt|gpt|pubads|slot|amazon|aps|prebid|headertag/i.test(k));
  return g.slice(0,60);
}).catch(()=>[]);
console.log('=== 3rd-party hosts (by request count) ===');
for (const [h,n] of Object.entries(hosts).sort((a,b)=>b[1]-a[1])) console.log(`  ${n}  ${h}`);
console.log('\n=== adtech/consent/paywall globals ===');
console.log(globals.join(', '));
console.log('\n=== key scripts (adtech/paywall/consent) ===');
const seen=new Set();
for (const s of scripts) {
  if (/googletag|ads|doubleclick|amazon|pubmatic|prebid|quant|chartbeat|comscore|consent|onetrust|privacy|meter|paywall|sentry|segment/i.test(s) && !seen.has(s)) {
    seen.add(s); console.log(' ', s);
  }
}
writeFileSync('/tmp/opencode/nyt/stack.json', JSON.stringify({hosts, globals, scripts:[...seen]},null,2));
await b.close();
