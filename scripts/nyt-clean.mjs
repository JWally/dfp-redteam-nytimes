#!/usr/bin/env node
/** nyt-clean.mjs — attach to the clean-launched Chrome on nytimes.com,
 *  capture the full tracker/ad-tech/paywall stack + DataDome state. */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
const b = await chromium.connectOverCDP('http://127.0.0.1:9555');
const ctx = b.contexts()[0];
const page = ctx.pages().find(p=>p.url().includes('nytimes')) || ctx.pages()[0];
await page.waitForTimeout(3000);
const state = await page.evaluate(() => ({
  url: location.href.slice(0,90),
  title: document.title,
  bodyStart: (document.body?.innerText||'').slice(0,120),
  ddCookie: document.cookie.split(';').find(c=>/^datadome/i.test(c.trim()))?.slice(0,80)||null,
  dd: window.dd ? Object.keys(window.dd).slice(0,10) : null,
  fpGlobals: Object.keys(window).filter(k=>/googletag|chartbeat|quant|comscore|__cmp|consent|nyt[A-Z]|paywall|meter|sentry|OneTrust/i.test(k)).slice(0,40),
})).catch(e=>({err:String(e).slice(0,150)}));
console.log('state:', JSON.stringify(state,null,1).slice(0,1200));
await page.screenshot({ path:'/tmp/opencode/nyt/clean-home.png' });
writeFileSync('/tmp/opencode/nyt/clean-state.json', JSON.stringify(state,null,2));
await b.close();
