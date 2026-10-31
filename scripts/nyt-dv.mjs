#!/usr/bin/env node
/** nyt-dv.mjs — capture every verification vendor script on NYT (DoubleVerify,
 *  IAS, GeoEdge, Confiant, etc.) + what requests they make. */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
const b = await chromium.connectOverCDP('http://127.0.0.1:9666');
const ctx = b.contexts()[0];
const page = await ctx.newPage();
const vscripts = {};   // url -> body
const vreqs = [];      // all verification-vendor requests
page.on('request', req => {
  const u = req.url();
  if (/doubleverify|\.dv\.|tps\.|integralads|ias\.|george\.|confiant|geoedge|doubleclick|adservice|verify|quality|viewability|\.scorecard/i.test(u)) {
    vreqs.push([req.method(), req.resourceType(), u.slice(0,180)]);
  }
});
page.on('response', async r => {
  const u = r.url();
  if (/\.js($|\?)/.test(u) && /doubleverify|tps\.dv|integralads|confiant|geoedge/i.test(u)) {
    try { const body = await r.text(); if (body.length > 2000) vscripts[u] = body; } catch(_){}
  }
});
await page.goto('https://www.nytimes.com/', { waitUntil:'load', timeout:60000 }).catch(()=>{});
await page.waitForTimeout(9000);
// scroll to trigger more ad/verification loads
await page.mouse.move(640, 300);
for (let i=0;i<3;i++){ await page.mouse.wheel(0, 2500); await page.waitForTimeout(2500); }
await page.waitForTimeout(5000);

mkdirSync('/tmp/opencode/nyt/dv',{recursive:true});
console.log('verification scripts captured:', Object.keys(vscripts).length);
for (const [u,body] of Object.entries(vscripts)) {
  const name = (u.split('/').pop().split('?')[0] || 'script') + '-' + body.length;
  writeFileSync('/tmp/opencode/nyt/dv/'+name, body);
  console.log('  saved', name, 'len', body.length);
}
console.log('\n=== verification-vendor requests ===');
const seen = new Set();
for (const r of vreqs.slice(0,40)) {
  const key = r[0]+' '+r[1]+' '+r[2].slice(0,60);
  if (!seen.has(key)) { seen.add(key); console.log(' ', r[0], r[1], r[2]); }
}
writeFileSync('/tmp/opencode/nyt/dv-requests.json', JSON.stringify(vreqs,null,2));
await b.close();
