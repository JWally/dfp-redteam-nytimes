#!/usr/bin/env node
/** nyt-probe.mjs — load nytimes.com, capture DataDome + ad-tech + paywall
 *  stack: all scripts, requests, globals, cookies. */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
const b = await chromium.launch({ headless:true });
const ctx = await b.newContext({ viewport:{width:1280,height:900}, userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36' });
const page = await ctx.newPage();
const log = { requests:[], errors:[] };
page.on('request', req => {
  const u = req.url();
  if (/nytimes|datadome|captcha-delivery|doubleclick|googletag|amazon-adsystem|adservice|quantserve|chartbeat|comscore|facebook|twitter|sentry|segment|amplitude|scorecardresearch|casalemedia|openx|pubmatic|rubicon|indexexchange|appnexus|pixel|ads|onetrust|cookielaw/i.test(u)) {
    log.requests.push({ method: req.method(), type: req.resourceType(), url: u.slice(0,170) });
  }
});
page.on('pageerror', e => log.errors.push(String(e).slice(0,150)));
await page.goto('https://www.nytimes.com/', { waitUntil:'load', timeout:60000 }).catch(()=>{});
await page.waitForTimeout(15000);
const state = await page.evaluate(() => ({
  title: document.title,
  bodyStart: (document.body?.innerText||'').slice(0,120),
  fpGlobals: Object.keys(window).filter(k=>/dd|datadome|captcha|googletag|__cmp|consent|chartbeat|quant|comscore|nyt|paywall|meter|sentry/i.test(k)).slice(0,50),
  cookies: document.cookie.split(';').map(c=>c.trim().split('=')[0]).filter(c=>/dd|captcha|nyt|pvt|ad|consent/i.test(c)),
})).catch(e=>({err:String(e).slice(0,150)}));
console.log('requests:', log.requests.length);
console.log('\nstate:', JSON.stringify(state,null,1).slice(0,1100));
const hosts = {};
for (const r of log.requests) { try { const h=new URL(r.url).host; hosts[h]=(hosts[h]||0)+1; } catch(_){} }
console.log('\n=== hosts ===');
for (const [h,n] of Object.entries(hosts).sort((a,b)=>b[1]-a[1])) console.log(`  ${h}: ${n}`);
console.log('\nerrors:', log.errors.slice(0,3));
writeFileSync('/tmp/opencode/nyt/probe1.json', JSON.stringify({state, requests:log.requests.slice(0,100)},null,2));
await b.close();
