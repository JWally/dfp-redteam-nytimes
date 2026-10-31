#!/usr/bin/env node
/** nyt-dv-payload2.mjs — fresh tab on clean Chrome, install beacon hooks,
 *  scroll for ads, capture full DV/verification payloads. */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
const b = await chromium.connectOverCDP('http://127.0.0.1:9777');
const ctx = b.contexts()[0];
const page = await ctx.newPage();

await page.addInitScript(() => {
  self.__beacons = [];
  const capture = (kind, url, body) => {
    if (/doubleverify|dv\.tech|geoedge|scorecard|omid/.test(url) && self.__beacons.length < 120) {
      self.__beacons.push({ kind, url: url.slice(0,1000), body: body ? String(body).slice(0,800) : null });
    }
  };
  const of = window.fetch;
  window.fetch = function(...a){ const u=a[0] instanceof Request?a[0].url:String(a[0]); try{ capture('fetch', u, a[1]?.body); }catch(_){} return of.apply(this,a); };
  const ox = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(m,u,...r){ this._url=u; return ox.apply(this,m,u,...r); };
  const os = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function(b){ try{ capture('xhr', this._url||'', b); }catch(_){} return os.apply(this,arguments); };
  const od = Object.getOwnPropertyDescriptor(Image.prototype,'src');
  Object.defineProperty(Image.prototype,'src',{ get(){return od.get.call(this);}, set(v){ try{ capture('img', String(v), null); }catch(_){} return od.set.call(this,v); } });
  const osb = navigator.sendBeacon.bind(navigator);
  navigator.sendBeacon = function(u,data){ try{ capture('beacon', u, data); }catch(_){} return osb(u,data); };
});

await page.goto('https://www.nytimes.com/', { waitUntil:'load', timeout:60000 }).catch(()=>{});
await page.waitForTimeout(12000);
// aggressive scrolling to load more ads + fire viewability beacons
for (let i=0;i<6;i++){ await page.mouse.move(640, 300+Math.random()*100); await page.mouse.wheel(0, 2200); await page.waitForTimeout(3000); }
await page.waitForTimeout(8000);

const beacons = await page.evaluate(() => self.__beacons || []).catch(()=>[]);
writeFileSync('/tmp/opencode/nyt/dv-beacons2.json', JSON.stringify(beacons,null,2));
console.log('beacons:', beacons.length);
const dv = beacons.filter(x=>/doubleverify|dv\.tech/.test(x.url));
const other = beacons.filter(x=>/geoedge|scorecard|omid/.test(x.url));
console.log('DV:', dv.length, '| geo/scorecard/omid:', other.length);
for (const x of [...dv, ...other]) {
  console.log('\n===', x.kind, '===');
  console.log(x.url.slice(0,500));
  if (x.body) console.log('BODY:', x.body.slice(0,400));
}
await b.close();
