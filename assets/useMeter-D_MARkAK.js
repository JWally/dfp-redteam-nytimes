import{o as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{An as n,En as r,Fn as i,Hn as a,Pn as o,gr as s,jn as c,kn as l,qn as u}from"./vendor-xO7slRyQ.js";import{t as d}from"./useAppContext-qaR-YDHm.js";import{t as f}from"./MeterContext-7YCGB26u.js";import{i as p,o as m,r as h}from"./MessagingContext-DMuPji_W.js";import{r as g}from"./useMessageSelection-DqnwhwIE.js";import{D as _,S as v,T as y,b,c as x,f as S,l as C,m as w,p as ee,w as te,x as T}from"./urls-B5ek-rgd.js";import{r as E,t as D}from"./color-y5jZ65QH.js";import{t as ne}from"./TextButton-9U1ai1uP.js";import{t as re}from"./Button-B_Cah_Y-.js";import{t as ie}from"./ArrowUpIcon-C7cRORmA.js";import{t as O}from"./Typography-8Rv5VpiY.js";import{c as ae,s as oe}from"./TypeComponents-SP0Gb37R.js";import{t as k}from"./Flex-B4Co0-IH.js";import{c as se,l as ce,n as A,o as j,s as M,t as N,u as le}from"./ErrorBoundary-g7JuSC2m.js";import{a as P,i as F,l as I,o as L,r as R,t as z}from"./Button-CIlZNuP4.js";import{t as B}from"./utils-CzPzO1yr.js";import{n as ue,t as V}from"./MobileAppCta-D8dGixLF.js";import{t as de}from"./AuthForm-rjLOlQ7h.js";import{a as fe,l as pe,n as me,r as H,t as he}from"./Strikethrough-Cgz4wEYS.js";import{C as ge,D as _e,T as ve,a as ye,c as be,f as xe,o as Se,p as Ce,s as we,t as Te,w as Ee}from"./saleUrgencyMessages-DqU3N99_.js";import{n as De,t as Oe}from"./PaymentIndia-GKb7OuxI.js";import{a as ke,i as Ae,l as je,n as Me,o as Ne,r as Pe,t as Fe}from"./PaymentOptions-BY7-VdRr.js";import{r as Ie,t as Le}from"./Legal-BQgcGHHI.js";import{n as Re,r as ze,t as Be}from"./config-DElMKBuL.js";import{t as Ve}from"./AIGSurvey-CdTtsJV0.js";import{n as He,t as Ue}from"./PaymentOptionsV2-C72tUjh6.js";import{t as We}from"./lottie-react.esm-DTRblEom.js";import{t as Ge}from"./types-JJEslU_l.js";import{t as Ke}from"./ALL_ACCESS_PROMO_REPEATING_248-DZ-hWqTQ.js";import{t as qe}from"./DynamicVerticalSpacer-DsZNxigX.js";import{t as Je}from"./CONV_GAMES_SALE_EVERGREEN_245-BRQ5sc-F.js";import{n as Ye,t as Xe}from"./useMessageSelectionMessageCap-C0CxOCSu.js";import{t as Ze}from"./SaleStrikethrough-ygPFnHx1.js";import{t as Qe}from"./dateTime-DRhaQ4hJ.js";import{t as $e}from"./legalTerms-B8pWzC1X.js";var U=e(s(),1),et=e(u(),1);l();var tt=c`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`,nt=c`
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 16px auto 64px;
`,rt=c`
  display: inline-block;
  color: ${R.veryDarkGray};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${R.gray};
`,it=c`
  display: block;
  margin: 0;
`;function at(e){let{isEafsEligible:t,isSwgLoaded:n,canShow:r}=e,{log:i}=p(),{logFreeAccessProgram:a,logRegwallImpression:o}=h(),[s,c]=(0,U.useState)(!1),l=(0,U.useRef)(!1);return(0,U.useEffect)(()=>{try{n&&r&&t&&!s&&!l.current&&!window.hasLoggedEafsRegiwallEvents?(l.current=!0,window.hasLoggedEafsRegiwallEvents=!0,i.debug(`EAfS regiwall displayed, logging regiwall events`,{hook:`useEafsRegiwallEvent`}),Promise.all([a(),o()]).then(()=>{i.debug(`FREE_ACCESS_EVENT_FREE_ACCESS_PROGRAM and FREE_ACCESS_EVENT_REGWALL_IMPRESSION logged successfully`,{hook:`useEafsRegiwallEvent`})}).catch(e=>{i.error(e instanceof Error?e:Error(String(e)),{hook:`useEafsRegiwallEvent`,network:!0,error:String(e)})}).finally(()=>{c(!0),l.current=!1})):r&&!t&&n&&i.debug(`User is not EAfS eligible, skipping regiwall event logs`,{hook:`useEafsRegiwallEvent`})}catch(e){i.error(e instanceof Error?e:Error(String(e)),{hook:`useEafsRegiwallEvent`,network:!1,error:String(e)})}},[r,t,n,s,a,o,i]),{hasLoggedRegiwallEvents:s}}var ot=`7Q87L`,st=`eafs-eligible`,ct=T(`https://www.nytimes.com/subscription`).withCampaignID({defaultCampaignID:ot}).toString(),lt=e=>{let t=new URL(e);return t.searchParams.set(st,`true`),t.toString()};function ut({unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}){let{eafsEligible:r,isEafsReady:i}=m();at({isEafsEligible:r??!1,isSwgLoaded:i??!1,canShow:!0});let a,o;if(e?.content?.display===`regiwall_lire_google_eafs`&&typeof window<`u`){let e=new URL(window.location.href);e.searchParams.set(st,`true`);let t=e.toString();a=T(lt(C)).withCampaignID({defaultCampaignID:`7JFJX`}).withRedirectUri({uri:t}).withExitUri({uri:t}).toString(),o=T(lt(`https://www.nytimes.com/subscription`)).withCampaignID({defaultCampaignID:ot}).withRedirectUri({uri:t}).withExitUri({uri:t}).toString()}let s=o||ct;return U.createElement(`div`,{className:tt},U.createElement(de,{handleSuccess:t=>{if(e?.content?.preventRedirect){window.location.reload();return}t?.props?.redirectUri&&(window.location.href=t?.props?.redirectUri)},forceLIREFallbackUsingProps:t,lireDisplayOverride:e?.content?.display,redirectUrlOverride:a,isEmbedded:n}),U.createElement(`div`,{className:nt},U.createElement(`p`,{className:it},`Enjoy unlimited access to all of The Times.`),U.createElement(`p`,{className:it},U.createElement(z,{component:`a`,testId:`options-button`,className:rt,href:s,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Subscribe,label:`See subscription options`,url:s}}}})}},`See subscription options`))))}function dt({unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}){return e?.canShow?U.createElement(ut,{unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}):null}dt.propTypes={forceLIREFallbackUsingProps:et.default.bool,isEmbedded:et.default.bool};var W=N(dt);l();var ft=c`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,pt=c`
  width: 100%;
  max-width: none;
  padding: 32px 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,mt=c`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: calc(100% - 38px);
`,ht=c`
  max-width: min(100%, 450px);
  width: min(100%, 300px);
  margin-bottom: 32px;
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 300;
  line-height: 41px;
  color: ${R.veryDarkGrey};

  @media (min-width: 376px) {
    width: 100%;
  }

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: ${L.small}px) {
    line-height: 48px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    max-width: min(100%, 500px);
  }
`;c`
  max-width: min(100%, 450px);
  width: min(100%, 300px);
  margin-bottom: 24px;
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 300;
  line-height: 41px;
  color: ${R.veryDarkGrey};

  @media (min-width: 376px) {
    width: 100%;
  }

  @media (min-width: 480px) {
    line-height: 48px;
    font-size: 36px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
  }
`,c`
  max-width: min(100%, 450px);
  width: min(100%, 300px);
  margin-bottom: 8px;
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 300;
  line-height: 41px;
  color: ${R.veryDarkGrey};

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    line-height: 48px;
    font-size: 40px;
    width: 400px;
  }
`,c`
  max-width: 610px;
  margin-top: 14px;
  font-family: ${P.cheltenham};
  font-size: 28px;
  font-weight: 400;
  line-height: 120%;
  color: ${R.veryDarkGrey};
  padding: 0 16px;

  @media (min-width: ${L.medium}px) {
    font-size: 40px;
    margin-top: 18px;
  }
`,c`
  margin-bottom: 8px;
`,c`
  margin-bottom: 24px;
`,c`
  margin: 4px 0;
  font-family: ${P.franklin};
  font-size: 26px;
  font-weight: 500;
  line-height: 120%;
  color: ${R.veryDarkGrey};
`,c`
  white-space: nowrap;
`,c`
  margin: 0;
  padding: 0;
`,c`
  font-family: ${P.franklin};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${R.footerGrey};
  margin-bottom: 24px;
  margin-top: 0px;
  width: 280px;

  @media (min-width: 481px) {
    width: 100%;
  }
`;var gt=c`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${R.veryDarkGrey};
  @media (min-width: ${L.medium}px) {
    font-size: 16px;
  }
`,_t=c`
  margin: 4px 0;
  font-family: ${P.franklin};
  font-size: 26px;
  font-weight: 500;
  line-height: 36px;
  color: ${R.veryDarkGrey};

  @media (min-width: 480px) {
    font-size: 28px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 30px;
  }
`,vt=c`
  color: ${R.gray2};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,yt=c`
  width: 332px;
  margin: auto;

  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: ${R.footerGrey};
  text-align: center;

  a {
    font-weight: 700;
    color: ${R.footerGrey};
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`;c`
  position: relative;
  height: auto;
  margin-top: 16px;
  margin-bottom: 8px;
`;var bt=c`
  position: relative;
  height: auto;
  margin-top: 4px;
  margin-bottom: 8px;
  max-width: calc(100% - 40px);
  a {
    max-width: 100%;
  }
`;c`
  width: 280px;
  height: 44px;
  margin-top: 8px;
  background-color: ${R.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px ${R.veryDarkGrey};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 44px;
  color: ${R.white};
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }

  @media (min-width: ${L.verySmall}px) {
    width: 335px;
  }
`,c`
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: ${R.footerGrey};
  text-align: center;
  display: flex;
  align-items: center;
  white-space: nowrap;

  :before {
    width: 100%;
    height: 1px;
    margin-right: 8px;
    background-color: ${R.gainsboro};
    display: inline-block;
    content: ' ';
  }

  :after {
    width: 100%;
    height: 1px;
    margin-left: 8px;
    background-color: ${R.gainsboro};
    display: inline-block;
    content: ' ';
  }
}`,c`
  width: 220px;
  height: 44px;
  background-color: ${R.veryDarkGrey};
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 44px;
  color: ${R.white};
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }
`;var xt=c`
  width: 100vw;
  background-color: ${R.whiteDarkContentPrimary};
  display: flex;
  justify-content: center;
`,St=c`
  width: calc(100vw - 40px);
`,Ct=c`
  max-width: 400px;
  padding: 20px 16px 16px;
  background-color: ${R.whiteDarkContentPrimary};

  hr {
    margin: 12px 0;
    border: none;
    border-bottom: 1.5px solid ${R.lineGrey};
  }

  @media (min-width: ${L.medium}px) {
    max-width: 944px;
  }
`,wt=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${R.footerGrey};

  a {
    font-weight: 700;
    color: ${R.footerGrey};
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`,Tt=c`
  margin-bottom: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`;l();var Et=c`
  color: ${R.footerGrey};
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    color: ${R.footerGrey};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }
`,Dt=c`
  font-weight: ${F.bold};
`,Ot=c`
  b {
    font-weight: 700;
  }
  div {
    display: inline;
    a {
      font-weight: 500;
    }
  }
`;function kt({boldedCancel:e=!1,useArlTerms:t=!1,arlOfferTerms:n=``,copy:r=`Your payment method will automatically be charged the stated monthly rate in advance every 4 weeks for a monthly subscription or the stated annual rate in advance once yearly for an annual subscription.`}){return e?U.createElement(Le,{testId:`gateway-bolded-cancel`},U.createElement(`div`,{className:Et},e&&U.createElement(`span`,{className:Dt},`Cancel anytime.`),` `,U.createElement(Ie,{HtmlElement:`span`,content:r,extremeDangerAllowLinks:!0}))):t?U.createElement(Le,{testId:`gateway-arl-terms`},U.createElement(`div`,{className:Et},n,U.createElement(`br`,null),U.createElement(`br`,null),U.createElement(`span`,{className:Ot},U.createElement(`b`,null,`Automatic Renewal Terms: `),U.createElement(Ie,{HtmlElement:`div`,content:r,extremeDangerAllowLinks:!0})))):U.createElement(Le,{testId:`gateway-standard`},U.createElement(`div`,{className:Et},U.createElement(Ie,{HtmlElement:`div`,content:r,extremeDangerAllowLinks:!0})))}l();var At=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`,jt=c`
  color: ${R.footerGrey};
  display: inline;
  padding-right: 16px;
`,Mt=c`
  color: ${R.footerLinkBlue};
  display: inline;
  padding-right: 16px;
  text-decoration: none;
`;function Nt(){return U.createElement(`div`,{className:At},U.createElement(`p`,{className:jt},`©`,new Date().getFullYear(),` The New York Times Company`),U.createElement(z,{component:`a`,testId:`help-button`,href:`https://help.nytimes.com/hc/en-us`,target:I.Blank,className:Mt},`Help`),` `,U.createElement(z,{component:`a`,testId:`feedback-button`,href:`https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-Us?redir=myacc`,target:I.Blank,className:Mt},`Feedback`))}l();function Pt({unit:e,isEmbedded:t}){let{unit:n}=A(Ae);return e?.content?.uri&&n.content&&(n.content.uri=e?.content?.uri),e?.content?.uriPayPal&&n.content&&(n.content.uriPayPal=e?.content?.uriPayPal),e?.content?.uriApplePay&&n.content&&(n.content.uriApplePay=e?.content?.uriApplePay),U.createElement(`div`,{className:ft},U.createElement(`div`,{className:pt},U.createElement(`div`,{className:mt},U.createElement(`div`,{className:Tt},U.createElement(ke,null)),U.createElement(`div`,{className:ht},`All of The Times, including Games, all in one subscription.`),U.createElement(`div`,{className:gt},`Welcome offer`),U.createElement(`div`,{className:_t},U.createElement(`span`,{className:vt},e?.content?.strikeThroughPriceDisplay),` `,e?.content?.priceDisplay),U.createElement(`div`,{className:yt},e?.content?.billingPeriodText)),U.createElement(`div`,{className:bt},U.createElement(Fe,{unit:n,selectedPaymentOptionsType:Pe.BUTTON,parentUnit:e,trackingOptions:{impression:{name:`gateway`,context:`paywall`,label:`SUBCON_CONV_WORDLEBOT_238`}}}))),U.createElement(`div`,{className:o(xt,{[St]:t})},U.createElement(`div`,{className:Ct},U.createElement(`div`,{className:wt},`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`),U.createElement(`hr`,null),U.createElement(kt,{copy:e?.content?.legal}),U.createElement(`hr`,null),U.createElement(Nt,null))))}var Ft=N(Pt);l();var It=c`
  background-color: ${R.lightGrey};
  display: flex;
  justify-content: center;
  width: 100%;
`,Lt=c`
  padding: 16px 20px 24px;
  max-width: 980px;
  @media (min-width: ${L.xLarge}px) {
    padding: 16px 230px 24px;
  }
`,Rt=c`
  padding: 24px 20px;
  width: 100%;
  max-width: 980px;
  @media (min-width: ${L.xLarge}px) {
    padding: 24px 230px;
  }
`,zt=c`
  margin: 12px 0;
  border: none;
  border-bottom: 1.5px solid ${R.lineGrey};
`,Bt=c`
  color: ${R.footerGrey};
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    color: ${R.footerGrey};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`,Vt=c`
  b {
    font-weight: 700;
  }

  div {
    display: inline;

    a {
      font-weight: 500;
    }
  }
`,Ht=c`
  b {
    font-weight: 700;
  }

  div {
    display: inline;

    a {
      font-weight: 700;
    }
  }
`;l();var Ut=c`
  color: ${R.footerGrey};
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  p {
    margin-top: 10px;
    margin-bottom: 4px;
  }
`;function Wt(){return U.createElement(`svg`,{width:`38`,height:`24`,viewBox:`0 0 38 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`g`,{clipPath:`url(#clip0_837_11095)`},U.createElement(`path`,{d:`M34.597 0H3.40308C3.27316 0 3.14301 0 3.01332 0.000747416C2.9037 0.00151748 2.79433 0.00271788 2.68496 0.00566224C2.44642 0.0120266 2.20585 0.0259104 1.9703 0.0676751C1.73099 0.110165 1.5083 0.17947 1.29105 0.288593C1.07747 0.395745 0.881941 0.535897 0.712492 0.703137C0.542969 0.870377 0.400907 1.06296 0.292316 1.27389C0.181683 1.48822 0.111386 1.70798 0.0686154 1.94426C0.0260539 2.1767 0.0118866 2.41399 0.00545845 2.64907C0.00251985 2.75697 0.00125947 2.86487 0.000545477 2.97274C-0.00021213 3.10096 4.04057e-05 3.22909 4.04057e-05 3.35753V20.6427C4.04057e-05 20.7712 -0.00021213 20.8991 0.000545477 21.0275C0.00125947 21.1354 0.00251985 21.2433 0.00545845 21.3512C0.0118866 21.5861 0.0260539 21.8234 0.0686154 22.0557C0.111386 22.2921 0.181683 22.5118 0.292316 22.7261C0.400907 22.9371 0.542969 23.1299 0.712492 23.2969C0.881941 23.4644 1.07747 23.6045 1.29105 23.7114C1.5083 23.8208 1.73099 23.8902 1.9703 23.9326C2.20585 23.9741 2.44642 23.9882 2.68496 23.9946C2.79433 23.9971 2.9037 23.9985 3.01332 23.999C3.14301 24 3.27316 24 3.40308 24H34.597C34.7267 24 34.8568 24 34.9865 23.999C35.0958 23.9985 35.2052 23.9971 35.3151 23.9946C35.5531 23.9882 35.7936 23.9741 36.0298 23.9326C36.2688 23.8902 36.4915 23.8208 36.7088 23.7114C36.9226 23.6045 37.1175 23.4644 37.2873 23.2969C37.4566 23.1299 37.5986 22.9371 37.7075 22.7261C37.8184 22.5118 37.8886 22.2921 37.9312 22.0557C37.9738 21.8234 37.9876 21.5861 37.994 21.3512C37.997 21.2433 37.9985 21.1354 37.999 21.0275C38 20.8991 38 20.7712 38 20.6427V3.35753C38 3.22909 38 3.10096 37.999 2.97274C37.9985 2.86487 37.997 2.75697 37.994 2.64907C37.9876 2.41399 37.9738 2.1767 37.9312 1.94426C37.8886 1.70798 37.8184 1.48822 37.7075 1.27389C37.5986 1.06296 37.4566 0.870377 37.2873 0.703137C37.1175 0.535897 36.9226 0.395745 36.7088 0.288593C36.4915 0.17947 36.2688 0.110165 36.0298 0.0676751C35.7936 0.0259104 35.5531 0.0120266 35.3151 0.00566224C35.2052 0.00271788 35.0958 0.00151748 34.9865 0.000747416C34.8568 0 34.7267 0 34.597 0Z`,fill:`#979797`}),U.createElement(`path`,{d:`M34.597 0.799927L34.9807 0.800652C35.0847 0.801376 35.1886 0.802486 35.2932 0.805295C35.475 0.810141 35.6877 0.819858 35.886 0.854918C36.0583 0.88554 36.2028 0.932106 36.3416 1.00177C36.4785 1.07042 36.604 1.16038 36.7135 1.26831C36.8235 1.37695 36.9148 1.50093 36.9853 1.63753C37.0555 1.77331 37.1024 1.91523 37.1333 2.0865C37.1687 2.27997 37.1785 2.49038 37.1835 2.67087C37.1863 2.77274 37.1877 2.87462 37.1882 2.97892C37.1892 3.10505 37.1892 3.23111 37.1892 3.35749V20.6427C37.1892 20.7691 37.1892 20.8949 37.1882 21.0237C37.1877 21.1256 37.1863 21.2275 37.1835 21.3295C37.1785 21.5097 37.1687 21.72 37.1328 21.9158C37.1024 22.0847 37.0555 22.2266 36.9849 22.3631C36.9146 22.4994 36.8235 22.6232 36.714 22.7312C36.6038 22.8399 36.4788 22.9296 36.3402 22.9989C36.2025 23.0682 36.0582 23.1147 35.8876 23.145C35.6853 23.1806 35.4637 23.1904 35.2968 23.1948C35.1918 23.1971 35.0873 23.1986 34.9802 23.1991C34.8526 23.2 34.7246 23.2 34.597 23.2H3.4031C3.4014 23.2 3.39975 23.2 3.39803 23.2C3.2719 23.2 3.14552 23.2 3.01709 23.199C2.91238 23.1986 2.8079 23.1972 2.70688 23.1949C2.53617 23.1904 2.31442 23.1806 2.11379 23.1452C1.94168 23.1147 1.79739 23.0682 1.6579 22.998C1.52063 22.9293 1.39567 22.8397 1.28545 22.7308C1.17608 22.623 1.08519 22.4996 1.01492 22.3631C0.944573 22.2268 0.89751 22.0844 0.866565 21.9135C0.830795 21.7181 0.820969 21.5087 0.816058 21.3297C0.813255 21.2272 0.812084 21.1247 0.811418 21.0228L0.810913 20.7221L0.810936 20.6427V3.35749L0.810913 3.27809L0.811395 2.97796C0.812084 2.87548 0.813255 2.77301 0.816058 2.67062C0.820969 2.49144 0.830795 2.28189 0.866861 2.08489C0.897533 1.9155 0.944573 1.77313 1.01528 1.63613C1.08501 1.50071 1.17606 1.37709 1.286 1.26865C1.39551 1.16057 1.52088 1.07072 1.65902 1.00141C1.79702 0.932083 1.94159 0.88554 2.1137 0.854986C2.31201 0.819835 2.52485 0.810141 2.70714 0.805272C2.81104 0.802486 2.91495 0.801376 3.01808 0.800674L3.4031 0.799927H34.597Z`,fill:`white`}),U.createElement(`path`,{d:`M10.3738 8.07226C10.6991 7.67077 10.9199 7.13169 10.8617 6.58081C10.3854 6.60418 9.80418 6.89081 9.46768 7.29261C9.16554 7.6367 8.89812 8.19835 8.96784 8.72613C9.5025 8.77189 10.0367 8.46248 10.3738 8.07226Z`,fill:`black`}),U.createElement(`path`,{d:`M10.8556 8.82923C10.0792 8.7836 9.41899 9.26398 9.04819 9.26398C8.67719 9.26398 8.10938 8.85222 7.49524 8.86332C6.6959 8.8749 5.95421 9.32077 5.54858 10.0299C4.71427 11.4486 5.3284 13.5529 6.13973 14.7083C6.53372 15.2799 7.00856 15.9093 7.63422 15.8867C8.22537 15.8638 8.45708 15.5091 9.17565 15.5091C9.89369 15.5091 10.1024 15.8867 10.7282 15.8753C11.3771 15.8638 11.7828 15.3034 12.1768 14.7312C12.6288 14.0796 12.8138 13.4504 12.8255 13.4159C12.8138 13.4044 11.5741 12.9352 11.5626 11.5284C11.5509 10.3504 12.5359 9.7901 12.5823 9.75535C12.026 8.94374 11.1569 8.85222 10.8556 8.82923Z`,fill:`black`}),U.createElement(`path`,{d:`M17.6164 7.23499C19.304 7.23499 20.4792 8.38263 20.4792 10.0535C20.4792 11.7304 19.2799 12.884 17.5741 12.884H15.7056V15.8155H14.3556V7.23499H17.6164V7.23499ZM15.7056 11.766H17.2546C18.43 11.766 19.099 11.1417 19.099 10.0595C19.099 8.97732 18.43 8.35889 17.2607 8.35889H15.7056V11.766Z`,fill:`black`}),U.createElement(`path`,{d:`M20.8319 14.0376C20.8319 12.9434 21.6818 12.2715 23.1887 12.1882L24.9245 12.0872V11.6056C24.9245 10.9098 24.4483 10.4936 23.6528 10.4936C22.8992 10.4936 22.4291 10.8503 22.3147 11.4093H21.0851C21.1574 10.2795 22.1338 9.44702 23.701 9.44702C25.2379 9.44702 26.2203 10.2498 26.2203 11.5044V15.8155H24.9726V14.7868H24.9426C24.575 15.4825 23.7733 15.9225 22.9415 15.9225C21.6999 15.9225 20.8319 15.1614 20.8319 14.0376ZM24.9245 13.4727V12.9792L23.3633 13.0743C22.5858 13.1278 22.1459 13.4667 22.1459 14.0019C22.1459 14.5489 22.6039 14.9057 23.3031 14.9057C24.2132 14.9057 24.9245 14.2873 24.9245 13.4727Z`,fill:`black`}),U.createElement(`path`,{d:`M27.3982 18.1167V17.076C27.4945 17.0998 27.7114 17.0998 27.82 17.0998C28.4227 17.0998 28.7482 16.8501 28.947 16.2079C28.947 16.196 29.0617 15.8273 29.0617 15.8214L26.7714 9.55994H28.1816L29.785 14.65H29.809L31.4124 9.55994H32.7866L30.4117 16.1424C29.8694 17.6588 29.2426 18.1464 27.9286 18.1464C27.82 18.1464 27.4945 18.1344 27.3982 18.1167Z`,fill:`black`})),U.createElement(`defs`,null,U.createElement(`clipPath`,{id:`clip0_837_11095`},U.createElement(`rect`,{width:`38`,height:`24`,fill:`white`}))))}function Gt(){return U.createElement(`svg`,{width:`38`,height:`24`,viewBox:`0 0 38 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`g`,{clipPath:`url(#clip0_837_11114)`},U.createElement(`path`,{d:`M34.597 0H3.40308C3.27316 0 3.14301 0 3.01332 0.000747416C2.9037 0.00151748 2.79433 0.00271788 2.68496 0.00566224C2.44642 0.0120266 2.20585 0.0259104 1.9703 0.0676751C1.73099 0.110165 1.5083 0.17947 1.29105 0.288593C1.07747 0.395745 0.881941 0.535897 0.712492 0.703137C0.542969 0.870377 0.400907 1.06296 0.292316 1.27389C0.181683 1.48822 0.111386 1.70798 0.0686154 1.94426C0.0260539 2.1767 0.0118866 2.41399 0.00545845 2.64907C0.00251985 2.75697 0.00125947 2.86487 0.000545477 2.97274C-0.00021213 3.10096 4.04057e-05 3.22909 4.04057e-05 3.35753V20.6427C4.04057e-05 20.7712 -0.00021213 20.8991 0.000545477 21.0275C0.00125947 21.1354 0.00251985 21.2433 0.00545845 21.3512C0.0118866 21.5861 0.0260539 21.8234 0.0686154 22.0557C0.111386 22.2921 0.181683 22.5118 0.292316 22.7261C0.400907 22.9371 0.542969 23.1299 0.712492 23.2969C0.881941 23.4644 1.07747 23.6045 1.29105 23.7114C1.5083 23.8208 1.73099 23.8902 1.9703 23.9326C2.20585 23.9741 2.44642 23.9882 2.68496 23.9946C2.79433 23.9971 2.9037 23.9985 3.01332 23.999C3.14301 24 3.27316 24 3.40308 24H34.597C34.7267 24 34.8568 24 34.9865 23.999C35.0958 23.9985 35.2052 23.9971 35.3151 23.9946C35.5531 23.9882 35.7936 23.9741 36.0298 23.9326C36.2688 23.8902 36.4915 23.8208 36.7088 23.7114C36.9226 23.6045 37.1175 23.4644 37.2873 23.2969C37.4566 23.1299 37.5986 22.9371 37.7075 22.7261C37.8184 22.5118 37.8886 22.2921 37.9312 22.0557C37.9738 21.8234 37.9876 21.5861 37.994 21.3512C37.997 21.2433 37.9985 21.1354 37.999 21.0275C38 20.8991 38 20.7712 38 20.6427V3.35753C38 3.22909 38 3.10096 37.999 2.97274C37.9985 2.86487 37.997 2.75697 37.994 2.64907C37.9876 2.41399 37.9738 2.1767 37.9312 1.94426C37.8886 1.70798 37.8184 1.48822 37.7075 1.27389C37.5986 1.06296 37.4566 0.870377 37.2873 0.703137C37.1175 0.535897 36.9226 0.395745 36.7088 0.288593C36.4915 0.17947 36.2688 0.110165 36.0298 0.0676751C35.7936 0.0259104 35.5531 0.0120266 35.3151 0.00566224C35.2052 0.00271788 35.0958 0.00151748 34.9865 0.000747416C34.8568 0 34.7267 0 34.597 0Z`,fill:`#979797`}),U.createElement(`path`,{d:`M34.597 0.799927L34.9807 0.800652C35.0847 0.801376 35.1886 0.802486 35.2931 0.805295C35.475 0.810141 35.6877 0.819858 35.8859 0.854918C36.0583 0.88554 36.2028 0.932106 36.3415 1.00177C36.4785 1.07042 36.6039 1.16038 36.7135 1.26831C36.8235 1.37695 36.9148 1.50093 36.9853 1.63753C37.0555 1.77331 37.1024 1.91523 37.1332 2.0865C37.1687 2.27997 37.1785 2.49038 37.1835 2.67087C37.1863 2.77274 37.1877 2.87462 37.1882 2.97892C37.1891 3.10505 37.1891 3.23111 37.1891 3.35749V20.6427C37.1891 20.7691 37.1891 20.8949 37.1881 21.0237C37.1877 21.1256 37.1863 21.2275 37.1835 21.3295C37.1785 21.5097 37.1687 21.72 37.1328 21.9158C37.1024 22.0847 37.0555 22.2266 36.9849 22.3631C36.9146 22.4994 36.8234 22.6232 36.7139 22.7312C36.6038 22.8399 36.4787 22.9296 36.3401 22.9989C36.2025 23.0682 36.0582 23.1147 35.8875 23.145C35.6853 23.1806 35.4636 23.1904 35.2967 23.1948C35.1917 23.1971 35.0872 23.1985 34.9802 23.1991C34.8526 23.2 34.7246 23.2 34.597 23.2H3.40307C3.40137 23.2 3.39972 23.2 3.398 23.2C3.27187 23.2 3.14548 23.2 3.01706 23.199C2.91235 23.1985 2.80787 23.1972 2.70685 23.1949C2.53614 23.1904 2.31439 23.1806 2.11376 23.1452C1.94165 23.1147 1.79736 23.0682 1.65786 22.9979C1.5206 22.9293 1.39564 22.8397 1.28542 22.7308C1.17605 22.623 1.08516 22.4996 1.01489 22.3631C0.944543 22.2268 0.897479 22.0844 0.866535 21.9135C0.830764 21.7181 0.820938 21.5087 0.816027 21.3297C0.813224 21.2272 0.812053 21.1247 0.811388 21.0228L0.810883 20.7221L0.810906 20.6427V3.35749L0.810883 3.27809L0.811365 2.97796C0.812053 2.87548 0.813224 2.77301 0.816027 2.67062C0.820938 2.49144 0.830764 2.28189 0.866831 2.08489C0.897502 1.9155 0.944543 1.77313 1.01525 1.63613C1.08498 1.50071 1.17603 1.37709 1.28597 1.26865C1.39548 1.16057 1.52085 1.07072 1.65899 1.00141C1.79699 0.932083 1.94155 0.88554 2.11367 0.854986C2.31198 0.819835 2.52482 0.810141 2.70711 0.805272C2.81101 0.802486 2.91492 0.801376 3.01805 0.800674L3.40307 0.799927H34.597Z`,fill:`white`}),U.createElement(`rect`,{y:`5`,width:`38`,height:`4.5`,fill:`#979797`}),U.createElement(`rect`,{x:`29`,y:`15`,width:`6`,height:`5`,rx:`1`,fill:`#979797`})),U.createElement(`defs`,null,U.createElement(`clipPath`,{id:`clip0_837_11114`},U.createElement(`rect`,{width:`38`,height:`24`,fill:`white`}))))}function Kt(){return U.createElement(`svg`,{width:`38`,height:`24`,viewBox:`0 0 38 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`g`,{clipPath:`url(#clip0_837_11107)`},U.createElement(`path`,{d:`M34.597 0H3.40308C3.27316 0 3.14301 0 3.01332 0.000747416C2.9037 0.00151748 2.79433 0.00271788 2.68496 0.00566224C2.44642 0.0120266 2.20585 0.0259104 1.9703 0.0676751C1.73099 0.110165 1.5083 0.17947 1.29105 0.288593C1.07747 0.395745 0.881941 0.535897 0.712492 0.703137C0.542969 0.870377 0.400907 1.06296 0.292316 1.27389C0.181683 1.48822 0.111386 1.70798 0.0686154 1.94426C0.0260539 2.1767 0.0118866 2.41399 0.00545845 2.64907C0.00251985 2.75697 0.00125947 2.86487 0.000545477 2.97274C-0.00021213 3.10096 4.04057e-05 3.22909 4.04057e-05 3.35753V20.6427C4.04057e-05 20.7712 -0.00021213 20.8991 0.000545477 21.0275C0.00125947 21.1354 0.00251985 21.2433 0.00545845 21.3512C0.0118866 21.5861 0.0260539 21.8234 0.0686154 22.0557C0.111386 22.2921 0.181683 22.5118 0.292316 22.7261C0.400907 22.9371 0.542969 23.1299 0.712492 23.2969C0.881941 23.4644 1.07747 23.6045 1.29105 23.7114C1.5083 23.8208 1.73099 23.8902 1.9703 23.9326C2.20585 23.9741 2.44642 23.9882 2.68496 23.9946C2.79433 23.9971 2.9037 23.9985 3.01332 23.999C3.14301 24 3.27316 24 3.40308 24H34.597C34.7267 24 34.8568 24 34.9865 23.999C35.0958 23.9985 35.2052 23.9971 35.3151 23.9946C35.5531 23.9882 35.7936 23.9741 36.0298 23.9326C36.2688 23.8902 36.4915 23.8208 36.7088 23.7114C36.9226 23.6045 37.1175 23.4644 37.2873 23.2969C37.4566 23.1299 37.5986 22.9371 37.7075 22.7261C37.8184 22.5118 37.8886 22.2921 37.9312 22.0557C37.9738 21.8234 37.9876 21.5861 37.994 21.3512C37.997 21.2433 37.9985 21.1354 37.999 21.0275C38 20.8991 38 20.7712 38 20.6427V3.35753C38 3.22909 38 3.10096 37.999 2.97274C37.9985 2.86487 37.997 2.75697 37.994 2.64907C37.9876 2.41399 37.9738 2.1767 37.9312 1.94426C37.8886 1.70798 37.8184 1.48822 37.7075 1.27389C37.5986 1.06296 37.4566 0.870377 37.2873 0.703137C37.1175 0.535897 36.9226 0.395745 36.7088 0.288593C36.4915 0.17947 36.2688 0.110165 36.0298 0.0676751C35.7936 0.0259104 35.5531 0.0120266 35.3151 0.00566224C35.2052 0.00271788 35.0958 0.00151748 34.9865 0.000747416C34.8568 0 34.7267 0 34.597 0Z`,fill:`#979797`}),U.createElement(`path`,{d:`M34.597 0.799927L34.9807 0.800652C35.0847 0.801376 35.1886 0.802486 35.2932 0.805295C35.475 0.810141 35.6877 0.819858 35.886 0.854918C36.0583 0.88554 36.2028 0.932106 36.3416 1.00177C36.4785 1.07042 36.604 1.16038 36.7135 1.26831C36.8235 1.37695 36.9148 1.50093 36.9853 1.63753C37.0555 1.77331 37.1024 1.91523 37.1333 2.0865C37.1687 2.27997 37.1785 2.49038 37.1835 2.67087C37.1863 2.77274 37.1877 2.87462 37.1882 2.97892C37.1892 3.10505 37.1892 3.23111 37.1892 3.35749V20.6427C37.1892 20.7691 37.1892 20.8949 37.1882 21.0237C37.1877 21.1256 37.1863 21.2275 37.1835 21.3295C37.1785 21.5097 37.1687 21.72 37.1328 21.9158C37.1024 22.0847 37.0555 22.2266 36.9849 22.3631C36.9146 22.4994 36.8235 22.6232 36.714 22.7312C36.6038 22.8399 36.4788 22.9296 36.3402 22.9989C36.2025 23.0682 36.0582 23.1147 35.8876 23.145C35.6853 23.1806 35.4637 23.1904 35.2968 23.1948C35.1918 23.1971 35.0873 23.1986 34.9802 23.1991C34.8526 23.2 34.7246 23.2 34.597 23.2H3.4031C3.4014 23.2 3.39975 23.2 3.39803 23.2C3.2719 23.2 3.14552 23.2 3.01709 23.199C2.91238 23.1986 2.8079 23.1972 2.70688 23.1949C2.53617 23.1904 2.31442 23.1806 2.11379 23.1452C1.94168 23.1147 1.79739 23.0682 1.6579 22.998C1.52063 22.9293 1.39567 22.8397 1.28545 22.7308C1.17608 22.623 1.08519 22.4996 1.01492 22.3631C0.944573 22.2268 0.89751 22.0844 0.866565 21.9135C0.830795 21.7181 0.820969 21.5087 0.816058 21.3297C0.813255 21.2272 0.812084 21.1247 0.811418 21.0228L0.810913 20.7221L0.810936 20.6427V3.35749L0.810913 3.27809L0.811395 2.97796C0.812084 2.87548 0.813255 2.77301 0.816058 2.67062C0.820969 2.49144 0.830795 2.28189 0.866861 2.08489C0.897533 1.9155 0.944573 1.77313 1.01528 1.63613C1.08501 1.50071 1.17606 1.37709 1.286 1.26865C1.39551 1.16057 1.52088 1.07072 1.65902 1.00141C1.79702 0.932083 1.94159 0.88554 2.1137 0.854986C2.31201 0.819835 2.52485 0.810141 2.70714 0.805272C2.81104 0.802486 2.91495 0.801376 3.01808 0.800674L3.4031 0.799927H34.597Z`,fill:`white`}),U.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M7.66006 8H5.28771C5.12537 8 4.9873 8.11614 4.96199 8.27384L4.00249 14.262C3.98342 14.3802 4.07638 14.4867 4.19814 14.4867H5.33072C5.49306 14.4867 5.63113 14.3705 5.65645 14.2125L5.91524 12.5975C5.9402 12.4393 6.07861 12.3233 6.24061 12.3233H6.99161C8.55436 12.3233 9.45621 11.5789 9.69187 10.1038C9.79798 9.45848 9.69636 8.95141 9.38927 8.59619C9.05216 8.20637 8.45403 8 7.66006 8ZM7.93376 10.1871C7.80405 11.025 7.15362 11.025 6.52472 11.025H6.16672L6.41787 9.46006C6.43278 9.36557 6.51603 9.29588 6.61317 9.29588H6.77724C7.20565 9.29588 7.60981 9.29588 7.81866 9.53622C7.94307 9.6797 7.98127 9.89271 7.93376 10.1871ZM14.7516 10.1602H13.6155C13.5187 10.1602 13.4351 10.2299 13.4201 10.3246L13.3699 10.6373L13.2904 10.524C13.0445 10.1726 12.4961 10.0551 11.9487 10.0551C10.6932 10.0551 9.62108 10.9911 9.41223 12.304C9.30371 12.9588 9.45798 13.5851 9.83538 14.0218C10.1816 14.4233 10.677 14.5907 11.2663 14.5907C12.2778 14.5907 12.8389 13.9504 12.8389 13.9504L12.7881 14.2612C12.769 14.38 12.862 14.4865 12.983 14.4865H14.0064C14.1692 14.4865 14.3064 14.3704 14.3321 14.2124L14.9461 10.3849C14.9656 10.2672 14.8729 10.1602 14.7516 10.1602ZM13.168 12.3367C13.0583 12.9756 12.5432 13.4044 11.8863 13.4044C11.5564 13.4044 11.2927 13.3003 11.1235 13.1029C10.9556 12.907 10.8917 12.628 10.9451 12.3173C11.0475 11.6838 11.5713 11.2411 12.2183 11.2411C12.5408 11.2411 12.8031 11.3464 12.9758 11.5455C13.1489 11.7467 13.2176 12.0273 13.168 12.3367ZM19.6604 10.1601H20.8021C20.962 10.1601 21.0552 10.3366 20.9644 10.4657L17.1674 15.8606C17.1059 15.948 17.0046 16 16.8964 16H15.7562C15.5956 16 15.5019 15.8221 15.5948 15.6927L16.7771 14.0499L15.5197 10.4175C15.4762 10.2912 15.5709 10.1601 15.7074 10.1601H16.8291C16.9749 10.1601 17.1035 10.2542 17.1455 10.3916L17.8129 12.5854L19.3875 10.3024C19.4491 10.2133 19.5515 10.1601 19.6604 10.1601Z`,fill:`#253B80`}),U.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M32.4615 14.6509L33.4653 8.17487C33.4807 8.07435 33.5666 8.00034 33.6664 8H34.7965C34.9213 8 35.0171 8.11345 34.9974 8.23898L34.0075 14.5984C33.9817 14.7662 33.8394 14.8896 33.6717 14.8896H32.6624C32.5376 14.8896 32.4418 14.7765 32.4615 14.6509ZM24.7737 8.00034H22.3273C22.1603 8.00034 22.018 8.12368 21.9918 8.29117L21.0026 14.6509C20.9829 14.7765 21.0787 14.8896 21.2037 14.8896H22.4589C22.5756 14.8896 22.6754 14.8033 22.6936 14.6858L22.9743 12.8831C23.0001 12.7151 23.1428 12.5919 23.3098 12.5919H24.0837C25.6953 12.5919 26.6249 11.8013 26.8681 10.2347C26.9778 9.54933 26.8724 9.01079 26.5559 8.63353C26.2085 8.21951 25.5923 8.00034 24.7737 8.00034ZM25.0559 10.3232C24.9225 11.2131 24.2519 11.2131 23.6031 11.2131H23.2343L23.4937 9.55101C23.5091 9.45065 23.5941 9.37664 23.6946 9.37664H23.8637C24.3052 9.37664 24.7222 9.37664 24.9374 9.63189C25.0658 9.78428 25.1049 10.0105 25.0559 10.3232ZM32.0846 10.2946H30.9141C30.8135 10.2946 30.7281 10.3686 30.713 10.4692L30.6612 10.8013L30.579 10.6809C30.3254 10.3077 29.7604 10.183 29.196 10.183C27.9015 10.183 26.7964 11.177 26.5811 12.5715C26.4695 13.2669 26.6279 13.932 27.017 14.3958C27.3747 14.8223 27.8848 15 28.4924 15C29.5353 15 30.1136 14.32 30.1136 14.32L30.0614 14.6501C30.0417 14.7763 30.1376 14.8894 30.2632 14.8894H31.3178C31.4848 14.8894 31.6271 14.7661 31.6533 14.5982L32.2867 10.5333C32.3061 10.4082 32.2102 10.2946 32.0846 10.2946ZM30.452 12.6062C30.3396 13.2847 29.8079 13.7402 29.1304 13.7402C28.791 13.7402 28.5185 13.6296 28.3439 13.42C28.1708 13.2119 28.1058 12.9155 28.1602 12.5856C28.2663 11.9128 28.8057 11.4425 29.4727 11.4425C29.8054 11.4425 30.0757 11.5545 30.2539 11.7659C30.433 11.9795 30.5038 12.2776 30.452 12.6062Z`,fill:`#179BD7`})),U.createElement(`defs`,null,U.createElement(`clipPath`,{id:`clip0_837_11107`},U.createElement(`rect`,{width:`38`,height:`24`,fill:`white`}))))}function qt(){let e=window.location.protocol===`https:`&&(window==null?void 0:window.ApplePaySession)?.canMakePayments();return U.createElement(`div`,{className:Ut},U.createElement(`p`,null,`We accept:`),e?U.createElement(Wt,null):null,` `,U.createElement(Kt,null),` `,U.createElement(Gt,null))}l();function G({legalCopy:e,useArlTerms:t=!1,arlOfferTerms:n=``,surveyCampaign:r,extraFootnote:i=null,offerDescription:a=``,hideLegal:s=!1,showPaymentIcons:c=!1,boldedCancel:l=!1,isSale:u=!1,hideSurvey:d=!1,overrideClass:f=``}){let p=a||`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`;return s?U.createElement(`div`,{className:It},U.createElement(`div`,{className:Rt},!d&&U.createElement(Ve,{campaign:r,displayNone:!0}),U.createElement(Nt,null))):U.createElement(`div`,{className:o(It,f)},U.createElement(`div`,{className:Lt},i?U.createElement(U.Fragment,null,U.createElement(`div`,{className:Bt},i),U.createElement(`hr`,{className:zt})):null,U.createElement(`div`,{className:Bt},p),U.createElement(`hr`,{className:zt}),t?U.createElement(Le,{testId:`gateway-arl-terms`},U.createElement(`div`,{className:Et},n,U.createElement(`br`,null),U.createElement(`br`,null),U.createElement(`span`,{className:o(Vt,{[Ht]:u})},U.createElement(`b`,null,`Automatic Renewal Terms: `),U.createElement(kt,{copy:e,boldedCancel:l})))):U.createElement(kt,{copy:e,boldedCancel:l}),c&&U.createElement(qt,null),(e?.length>0||t||c)&&U.createElement(`hr`,{className:zt}),!d&&U.createElement(Ve,{campaign:r}),U.createElement(Nt,null)))}l();var Jt=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 0;
`,Yt=c`
  max-width: 335px;
  padding: 0 20px;
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${R.white};
  align-self: center;
  @media (min-width: ${L.medium}px) {
    margin: 0 0 48px;
    max-width: 500px;
  }
  @media (min-width: ${L.mediumLarge}px) {
    max-width: 560px;
  }
`;c`
  font-family: ${P.franklin};
  line-height: 21px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${R.veryDarkGrey};
`,c`
  display: none;
  @media (min-width: ${L.mediumLarge}px) {
    display: block;
  }
`;var Xt=c`
  display: flex;
  flex-direction: column;
  text-align: center;
`,Zt=c`
  margin-bottom: 0;
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 200;
  line-height: 38px;
  color: ${R.veryDarkGrey};
  min-width: 220px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    line-height: 48px;
    padding: 0px;
  }
`,Qt=c`
  text-decoration: line-through;
  color: ${R.grayLightContentContentPlaceholder};
`;c`
  white-space: nowrap;
`;var $t=c`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,en=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  width: 247px;
  margin: 0px auto;
  @media (min-width: ${L.mediumLarge}px) {
    max-width: 335px;
  }
`,tn=c`
  margin: 0px auto;
`;c`
  margin: auto;
  width: 240px;
  align-items: center;
`,c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  margin-top: 16px;
`;var nn=n.div`
  display: none;
`,rn=c`
  font-size: 14px;
  line-height: 18px;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  color: rgb(90, 90, 90);
  margin-top: 16px;
  text-align: center;

  @media (min-width: ${L.medium}px) {
    line-height: 21px;
  }
`;function an({unit:e}){let t=e.content;return t?U.createElement(U.Fragment,null,U.createElement(`div`,{className:Jt},U.createElement(`div`,{className:Yt},U.createElement(`div`,{className:Xt},U.createElement(ye,{space:4}),t.saleUrgencyText&&U.createElement(U.Fragment,null,U.createElement(Se,{urgencyText:t.saleUrgencyText}),U.createElement(ye,{space:2})),U.createElement(`div`,{className:Zt},t.offerTitle,t.saleUrgencyText&&U.createElement(U.Fragment,null,` `,U.createElement(`span`,{className:Qt},`6\xA0months`),`\xA01\xA0year.`))),U.createElement(ye,{space:2.5}),t.oesOfferAlias&&U.createElement(nn,{"data-testid":`offer-card-${t.oesOfferAlias}`,"data-offerdetails":JSON.stringify({o:t.offerId,labels:t.offerLabels})}),U.createElement(`div`,{className:$t},U.createElement(z,{component:`a`,testId:`upgrade-now-btn`,className:en,href:t.clickThroughURI,target:I.Blank,onClick:n=>we(e,n,{elementName:t.action,selectedOffer:t.oesOfferAlias})},U.createElement(`p`,{className:tn},` `,t.ctaCopy||`Upgrade Now`)),U.createElement(`div`,{className:rn},U.createElement(`p`,null,t.billingPeriodText))))),U.createElement(G,{legalCopy:t.legal,offerDescription:t.offerDescription,surveyCampaign:`C`})):null}l();var on=c`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,sn=c`
  width: 100%;
  max-width: none;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,cn=c`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`,ln=c`
  margin-bottom: 16px;
  font-family: ${P.cheltenham};
  font-size: 30px;
  font-weight: 300;
  line-height: 120%;
  text-wrap: balance;
  color: ${R.veryDarkGrey};
  white-space: pre-line;

  @media (min-width: ${L.verySmall}px) {
    font-size: 36px;
  }

  @media (min-width: ${L.small}px) {
    width: 381px;
    max-width: min(100%, 390px);
    font-size: 40px;
    line-height: 48px;
  }

  @media (min-width: ${L.medium}px) {
    width: 100%;
    max-width: min(100%, 700px);
  }

  @media (min-width: ${L.mediumLarge}px) {
    max-width: 100%;
  }
`;c`
  display: none;
  @media (min-width: ${L.medium}px) {
    display: block;
  }

  @media (min-width: ${L.mediumLarge}px) {
    display: none;
  }
`;var un=c`
  white-space: pre-line;
`,dn=c`
  font-family: ${P.franklin};
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: ${R.footerGrey};
  margin-bottom: 32px;
  margin-top: 0px;
  width: 272px;

  @media (min-width: ${L.verySmall}px) {
    font-size: 18px;
    width: 335px;
  }

  @media (min-width: ${L.medium}px) {
    width: 502px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    margin-bottom: 32px;
  }
`,fn=c`
  display: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1.12px;
  text-transform: uppercase;
  color: ${R.veryDarkGrey};
  margin-bottom: 16px;
  div {
    display: inline;
  }
`,pn=c`
  margin-bottom: 4px;
  font-family: ${P.franklin};
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  color: ${R.veryDarkGrey};
`,mn=c`
  color: ${R.gray2};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,hn=c`
  width: 100%;
  margin: auto;
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  color: ${R.footerGrey};
  text-align: center;
  display: none;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 14px;
  }
  @media (min-width: 425px) {
    display: block;
  }
`,gn=c`
  ${hn}
  display: block;

  @media (min-width: 425px) {
    display: none;
  }
`;c`
  position: relative;
  height: auto;
  margin-top: 16px;
  margin-bottom: 8px;
`;var _n=c`
  position: relative;
  height: auto;
  margin-top: 20px;
  margin-bottom: 8px;
  width: 335px;
  max-width: calc(100% - 40px);
  a {
    max-width: 100%;
  }
`;c`
  width: 280px;
  height: 44px;
  margin-top: 8px;
  background-color: ${R.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px ${R.veryDarkGrey};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 44px;
  color: ${R.white};
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }

  @media (min-width: ${L.verySmall}px) {
    width: 335px;
  }
`,c`
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: ${R.footerGrey};
  text-align: center;
  display: flex;
  align-items: center;
  white-space: nowrap;

  :before {
    width: 100%;
    height: 1px;
    margin-right: 8px;
    background-color: ${R.gainsboro};
    display: inline-block;
    content: ' ';
  }

  :after {
    width: 100%;
    height: 1px;
    margin-left: 8px;
    background-color: ${R.gainsboro};
    display: inline-block;
    content: ' ';
  }
`;var vn=c`
  width: 220px;
  height: 44px;
  background-color: ${R.veryDarkGrey};
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 44px;
  color: ${R.white};
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }
`,yn=c`
  width: 100vw;
  background-color: ${R.whiteDarkContentPrimary};
  display: flex;
  justify-content: center;
`,bn=c`
  width: calc(100vw - 40px);
`,xn=c`
  max-width: 400px;
  padding: 20px 16px 16px;
  background-color: ${R.whiteDarkContentPrimary};

  hr {
    margin: 12px 0;
    border: none;
    border-bottom: 1.5px solid #dfdfdf;
  }

  @media (min-width: ${L.medium}px) {
    max-width: 944px;
  }
`;c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${R.footerGrey};

  a {
    font-weight: 700;
    color: ${R.footerGrey};
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`;var Sn=c`
  margin-bottom: 32px;

  svg {
    width: 24px;
    height: 24px;
  }
  gap: 5px;
  display: flex;
  @media (min-width: ${L.verySmall}px) {
    gap: 8px;
  }
`;c`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  text-align: center;
  font-family: ${P.franklin};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
`;function Cn(){let{unit:e}=A(Be);return U.createElement(`span`,{"data-testid":`onsite-messaging-unit-${Be?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},e?.content?.headline||``)}l();function wn({unit:e,isEmbedded:t}){let{unit:n}=A(Ae),{unit:r}=A(He),{unit:i}=A(Be),a=i?.content?.title||``,s=i?.content?.subtitle||``,c=e?.content?.country,l=e?.content?.showMonthlyOfferPaywall,u=l?e?.content?.monthly:e?.content?.annual;e?.content?.uri&&n.content&&(n.content.uri=e?.content?.uri),e?.content?.uriPayPal&&n.content&&(n.content.uriPayPal=e?.content?.uriPayPal),e?.content?.uriApplePay&&n.content&&(n.content.uriApplePay=e?.content?.uriApplePay);let d=``,f=``;if(u?.offerInfo){let e=u?.offerInfo?.billingTerms,t=u?.offerInfo?.cancellationTerms;d=`${(u?.offerInfo)?.offerTerms[0]||``} ${(u?.offerInfo)?.offerTerms[1]||``} ${(u?.offerInfo)?.offerTerms[2]||``} ${(u?.offerInfo)?.offerTerms[3]||``}`,f=e.concat(t)}let p=r?.content?.showApplePay;return U.createElement(`div`,{className:on},U.createElement(`div`,{className:sn},U.createElement(`div`,{className:cn},U.createElement(`div`,{className:Sn},U.createElement(Ne,null)),U.createElement(`div`,{className:fn},U.createElement(Cn,null)),U.createElement(`div`,{className:ln},a),U.createElement(`p`,{className:dn},U.createElement(`span`,{className:un},s)),e?.content?.isAppWebview?null:U.createElement(U.Fragment,null,U.createElement(`div`,{className:pn},U.createElement(`span`,{className:mn},u?.strikeThroughPriceDisplay),` `,u?.priceDisplay,`/`,l?`month`:`year`),U.createElement(`div`,{className:gn},`Billed as `,u?.priceDisplay,` `,u?.billedAsCopy1,`,`,` `,c===`CA`?``:`then ${u?.billedAsFullPrice}`,U.createElement(`br`,null),c===`CA`?`then ${u?.billedAsFullPrice}`:``,` `,u?.billedAsCopy2),U.createElement(`div`,{className:hn},`Billed as `,u?.priceDisplay,` `,u?.billedAsCopy1,`, then`,` `,u?.billedAsFullPrice,U.createElement(`br`,null),u?.billedAsCopy2))),e?.content?.isAppWebview?U.createElement(z,{component:`a`,testId:`subscribe-now-button`,className:vn,href:e?.content?.uri,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Subscribe,label:e?.content?.ctaText,url:e?.content?.uri}}}})}},e?.content?.ctaText):U.createElement(`div`,{className:_n},U.createElement(Ue,{offerInfo:u?.offerInfo,creditCardCtaType:`link`,trackingOptions:{impression:{context:`paywall`,label:e?.content?.trackingLabel,region:`1`}},specialOfferTermsTop:d,specialOfferTermsBottom:U.createElement(Ie,{HtmlElement:`p`,content:f}),payflowUri:u?.payflowUri,source:e?.content?.source}),` `)),e?.content?.isAppWebview?null:U.createElement(`div`,{className:o(yn,{[bn]:t})},U.createElement(`div`,{className:xn},U.createElement(kt,{copy:p?f:u?.legal,useArlTerms:p,arlOfferTerms:d}),U.createElement(`hr`,null),U.createElement(Ve,{campaign:`Games`}),U.createElement(Nt,null))))}var Tn=N(wn);l();var En=c`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,Dn=c`
  width: 100%;
  max-width: none;
  padding: 32px 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${L.medium}px) {
    padding: 100px 0 48px;
  }
`,On=c`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: calc(100% - 38px);
`,kn=c`
  max-width: min(100%, 450px);
  width: min(100%, 275px);
  margin-bottom: 8px;
  font-family: ${P.cheltenham};
  font-size: 23px;
  font-weight: 300;
  line-height: 26.45px;
  color: ${R.veryDarkGrey};

  @media (min-width: 376px) {
    font-size: 28px;
    line-height: 33.6px;
    width: 100%;
  }

  @media (min-width: 480px) {
    line-height: 40.8px;
    font-size: 36px;
  }

  @media (min-width: ${L.small}px) {
    line-height: 48px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    max-width: min(100%, 500px);
  }
`;c`
  max-width: 610px;
  margin-top: 14px;
  font-family: ${P.cheltenham};
  font-size: 28px;
  font-weight: 400;
  line-height: 120%;
  color: ${R.veryDarkGrey};
  padding: 0 16px;

  @media (min-width: ${L.medium}px) {
    font-size: 40px;
    margin-top: 18px;
  }
`,c`
  white-space: nowrap;
`,c`
  margin: 0;
  padding: 0;
`,c`
  font-family: ${P.franklin};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${R.footerGrey};
  margin-bottom: 24px;
  margin-top: 0px;
  width: 280px;

  @media (min-width: 481px) {
    width: 100%;
  }
`,c`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${R.veryDarkGrey};
  @media (min-width: ${L.medium}px) {
    font-size: 16px;
  }
`;var An=c`
  position: relative;
  height: auto;
  margin-top: 24px;
  margin-bottom: 8px;
  max-width: calc(100% - 40px);
  a {
    max-width: 100%;
  }
`,jn=c`
  width: 220px;
  height: 44px;
  background-color: ${R.veryDarkGrey};
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 44px;
  color: ${R.white};
  text-align: center;
  text-decoration: none;

  p {
    margin: 0;
  }
`,Mn=c`
  margin-bottom: 16px;

  svg {
    width: 24px;
    height: 24px;
    margin: 0px 2px;
  }
`;function Nn({unit:e}){return U.createElement(`div`,{className:En},U.createElement(`div`,{className:Dn},U.createElement(`div`,{className:On},U.createElement(`div`,{className:Mn},U.createElement(ke,null)),U.createElement(`div`,{className:kn},`Enjoy The Crossword, Spelling Bee and more.`)),U.createElement(`div`,{className:An},U.createElement(z,{component:`a`,testId:`subscribe-now-button`,className:jn,href:e?.content?.uri,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Subscribe,label:e?.content?.ctaText,url:e?.content?.uri}}}})}},e?.content?.ctaText))))}var Pn=N(Nn);function Fn({unit:e}){return U.createElement(`div`,{className:En},U.createElement(`div`,{className:Dn},U.createElement(`div`,{className:On},U.createElement(`div`,{className:Mn},U.createElement(ke,null)),U.createElement(`div`,{className:kn},`Subscribe to enjoy Connections Bot, new puzzles daily and more.`)),U.createElement(`div`,{className:An},U.createElement(z,{component:`a`,testId:`subscribe-now-button`,className:jn,href:e?.content?.uri,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Subscribe,label:e?.content?.ctaText,url:e?.content?.uri}}}})}},e?.content?.ctaText))))}var In=N(Fn);function Ln({unit:e}){let t=g({config:um}),n=()=>e?.audience===`iOS`?`crossplay-ios`:e?.audience===`Android`?`crossplay-android`:``,r=()=>{let e=(t?.response)?.meter()?.data?.viewed;return e==null?`0`:String(e)};return U.createElement(`div`,{className:En},U.createElement(`div`,{className:Dn},U.createElement(`div`,{className:On},U.createElement(`div`,{className:Mn},U.createElement(je,null)),U.createElement(`div`,{className:kn},`Subscribe to enjoy Cross Bot, ad-free play and more.`)),U.createElement(`div`,{className:An},U.createElement(z,{component:`a`,testId:`subscribe-now-button`,className:jn,href:e?.content?.uri,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{name:`gamesPaywallCrossbot`,region:r(),label:e?.campaign||``,element:{name:`goto-subscribe`,label:e?.content?.ctaText||``,url:e?.content?.uri||``},other:[{key:`source_app`,value:n()},{key:`native_app.asset.section`,value:`page-game-review`}]},eventData:{type:`click`,pagetype:se.HardPaywall,trigger:ce.Module}}})}},e?.content?.ctaText))))}var Rn=N(Ln),zn=t({NoWrap:()=>jr,acquisitionOfferSelectorToggle:()=>hr,annualSaleTestPill:()=>ar,annualTestChoiceHeading:()=>Qn,controlOfferSelectorToggle:()=>_r,intlOfferSelectorToggle:()=>gr,intlSalePillAnnualTestFullWidth:()=>er,intlSalePillWhiteFill:()=>Wn,intlSalePillWhiteFillStep1:()=>Gn,intlSalePillWhiteFillStep2:()=>Kn,paywallModalShell:()=>Bn,seeDetailsCta:()=>cr,step1BillingText:()=>or,step1Card:()=>Vn,step1CardWeeklyOfferNoIconsBauTopPadding:()=>Hn,step1Headline:()=>Yn,step1HeadlineAnnualTest:()=>Zn,step1HeadlineSale:()=>Xn,step1HeadlineStrikethrough:()=>nr,step1HeadlineStrikethroughRed:()=>rr,step1IconAnimationWrap:()=>qn,step1OfferCopyWeeklyNoIconsSale:()=>tr,step1ProductDescription:()=>sr,step1ProductIconsReducedMotionFallback:()=>Jn,step1SaleUrgencyWrap:()=>Un,step1StrikethroughText:()=>ir,step2BelowPaymentSection:()=>fr,step2BenefitHeading:()=>Sr,step2BodyColumn:()=>mr,step2CancelText:()=>Dr,step2CloseButton:()=>xr,step2GatewayFooter:()=>pr,step2Header:()=>vr,step2HeaderLeadingSpacer:()=>yr,step2IconsGrid:()=>Ar,step2MainColumnPad:()=>dr,step2OfferSelectorWrap:()=>Or,step2Outer:()=>lr,step2PaymentMethodsMessaging:()=>Er,step2PaymentOptionsV2Container:()=>kr,step2ScrollRegion:()=>ur,step2SectionHeading:()=>Cr,step2SectionHeadingAnnualSaleTest:()=>$n,step2SectionHeadingFirst:()=>Tr,step2SectionHeadingSpaced:()=>wr,step2Title:()=>br});l();var Bn=c`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
`,Vn=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px 48px;
`,Hn=c`
  padding-top: 48px;
`,Un=c`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
`,Wn=c`
  background-color: ${R.white};
`,Gn=c`
  font-size: 12px;
  line-height: 8px;
  padding: 11px;
  height: unset;
`,Kn=c`
  font-size: 11px;
  height: unset;
  padding: 8px;
  line-height: 8px;
`,qn=c`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
  min-width: 215px;
  max-width: 215px;
  max-height: 44px;

  .lf-player-container {
    min-width: 215px;
    max-width: 215px;
    max-height: 44px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    min-width: 250px;
    max-width: 250px;
    min-height: 52px;

    .lf-player-container {
      min-width: 250px;
      max-width: 250px;
      max-height: 52px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Jn=c`
  display: none;

  @media (prefers-reduced-motion: reduce) {
    display: block;
    width: 100%;
    margin-bottom: 12px;
  }
`,Yn=c`
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 250;
  line-height: 1.15;
  color: ${R.veryDarkGrey};
  margin: 0;
  min-height: 74px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 36px;
    max-height: 82px;
  }
`,Xn=c`
  font-size: 30px;
  max-width: 440px;
  @media (max-width: ${L.verySmall}px) {
    min-height: 105px;
  }
  @media (min-width: ${L.medium}px) {
    max-width: 500px;
    font-size: 32px;
  }
`,Zn=c`
  min-height: 0px;
  font-size: 32px;
  @media (max-width: ${L.verySmall}px) {
    min-height: 0px;
  }
  @media (max-width: ${L.medium}px) {
    max-width: 279px;
    font-size: 30px;
  }
`,Qn=c`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,$n=c`
  @media (min-width: ${L.mediumLarge}px) {
    line-height: 21px;
    font-size: 14px;
  }
`,er=c`
  width: 100%;
`,tr=c`
  box-sizing: border-box;
  width: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
`,nr=c`
  color: ${R.suvaGrey};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,rr=c`
  color: ${R.saleRed};
  text-decoration-line: line-through;
  text-decoration-thickness: 3px;
`,ir=c`
  color: ${R.lightTextSubDued};
`,ar=c`
  font-size: 10px;
  padding: 6px;
`,or=c`
  box-sizing: border-box;
  width: 100%;
  max-width: 335px;
  margin-top: 8px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.35;
  color: ${R.footerGrey};
`,sr=c`
  font-family: ${P.franklin};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${R.footerGrey};
  margin-top: 8px;
  margin-bottom: 0;
  max-height: 42px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 18px;
    max-height: 46px;
  }
`,cr=c`
  width: 100%;
  max-width: 211px;
  height: 44px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${P.franklin};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${R.white};
  background-color: ${R.black};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,lr=c`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0 0;
  max-height: min(90vh, 100vh);
  max-height: min(90dvh, 100dvh);
  overflow: hidden;

  @media (max-height: 689px) {
    max-height: min(98vh, 100vh);
    max-height: min(98dvh, 100dvh);
  }
`,ur=c`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0;
`,dr=c`
  box-sizing: border-box;
  padding: 0 20px;
`,fr=c`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0 20px 72px;
  background-color: ${R.whiteDarkContentPrimary};
`,pr=c`
  & > div {
    padding: 16px 0 24px;

    @media (min-width: ${L.xLarge}px) {
      max-width: 1024px;
    }
  }
`,mr=c`
  width: 100%;
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-sizing: border-box;
`,hr=c`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  cursor: default;
  width: 311px;

  input {
    margin: unset;
    accent-color: ${R.veryDarkGrey};
    margin-top: 3px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    width: 300px;
  }
`,gr=c`
  box-sizing: border-box !important;
  width: 100% !important;
  padding: 15px;
  border-radius: 6px !important;
`,_r=c`
  box-sizing: border-box !important;
  width: 100% !important;
  padding: 18px 14px;
  border-radius: 6px !important;
`,vr=c`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid ${R.gainsboro};
  padding-bottom: 16px;
  margin-bottom: 32px;
`,yr=c`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`,br=c`
  font-family: ${P.franklin};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: ${R.veryDarkGrey};
  text-align: center;
  margin: 0;
  justify-self: center;
  max-width: 100%;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 18px;
  }
`,xr=c`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  font-size: 22px;
  line-height: 1;
  color: ${R.veryDarkGrey};
  background-color: ${R.graylightBackgroundTertiary2};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
`,Sr=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 600;
  color: ${R.veryDarkGrey};
  margin-top: 0;
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  line-height: 18px;
  @media (min-width: ${L.mediumLarge}px) {
    font-size: 16px;
  }
`,Cr=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 600;
  color: ${R.veryDarkGrey};
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  line-height: 18px;

  @media (min-width: ${L.mediumLarge}px) {
    line-height: 21px;
    font-size: 16px;
  }
`,wr=c`
  margin-top: 32px;
`,Tr=c`
  margin-top: 0;
`,Er=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: #727272;
  margin-top: 12px;
  margin-bottom: -4px;
  text-align: center;
  width: 100%;
`,Dr=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: ${R.blackDarkBackgroundPrimary};
  margin-top: 16px;
  margin-bottom: 32px;
  text-align: center;
  width: 100%;
  max-height: 18px;
`,Or=c`
  width: 100%;
  text-align: left;
`,kr=c`
  box-sizing: border-box;
  width: 100%;
  margin-top: 16px;
`,Ar=c`
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  justify-items: start;
`,jr=n.span`
  white-space: nowrap;
`,Mr=t({Athletic:()=>Kr,Audio:()=>Wr,Cooking:()=>Ur,Games:()=>Hr,IconIndividualContainer:()=>Rr,IconStyled:()=>Br,News:()=>Vr,Wirecutter:()=>Gr,iconIndividualContainerLabeled:()=>zr,iconLabelPair:()=>Fr,iconLabelText:()=>Ir,iconsContainerClass:()=>Lr,iconsGridWithLabels:()=>Nr,iconsGridWithLabelsIntlNews2Step:()=>Pr});l();var Nr=c`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 12px;
  justify-content: center;
  justify-items: start;
  width: 100%;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  box-sizing: border-box;

  @media (min-width: ${L.mediumLarge}px) {
    column-gap: 24px;
  }
`,Pr=c`
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  justify-items: start;
  row-gap: 12px;
  column-gap: 24px;
  width: fit-content;
  max-width: 100%;
`,Fr=c`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Ir=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: ${R.veryDarkGrey};
  text-align: left;
  @media (min-width: ${L.mediumLarge}px) {
    font-size: 16px;
    min-height: 21px;
  }
`,Lr=c`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
`,Rr=c`
  width: 28px;
  height: 28px;
`,zr=c`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Br=n.div`
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,Vr=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_News.svg')`};
`,Hr=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_Games.svg')`};
`,Ur=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_Cooking.svg')`};
`,Wr=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_Audio.svg')`};
`,Gr=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_Wirecutter.svg')`};
`,Kr=n(Br)`
  background-image: ${e=>`url('${e.theme.assetUrl}/icons/Icon_Athletic.svg')`};
`;l();var qr=[{name:`News`,label:`News`},{name:`Games`,label:`Games`},{name:`Cooking`,label:`Cooking`},{name:`Audio`,label:`Audio`},{name:`Wirecutter`,label:`Wirecutter`},{name:`Athletic`,label:`The Athletic`}];function Jr({className:e,showLabels:t=!1}){return t?U.createElement(`div`,{className:o(Nr,e)},qr.map(({name:e,label:t})=>{let n=Mr[e];return U.createElement(`div`,{className:Fr,key:e},U.createElement(`div`,{className:zr},U.createElement(n,null)),U.createElement(`span`,{className:Ir},t))})):U.createElement(`div`,{className:o(Lr,e)},qr.map(({name:e})=>{let t=Mr[e];return U.createElement(`div`,{className:Rr,key:e},U.createElement(t,null))}))}var Yr=N(Jr),Xr=`INTL_SIMPLIFIED_PAYWALL_2_STEP`;function Zr(e){return{module:{name:M.Gateway,context:`paywall`,label:Xr,region:`0`,element:e},eventData:{pagetype:se.Article,type:`click`}}}l();var Qr=`See subscription details`,{NoWrap:$r}=zn;function ei({content:e,onSeeDetails:t,unit:n}){let i=r(),{isSale:a=!1,headlineLeadIn:s,headlineStrikeThroughPrice:c,headlinePriceDisplay:l,step1SaleHeadlineFirstYearPromo:u=!1,step1SaleHeadlineFirstYearPromoNoLineBreakBeforePrice:d=!1,billingText:f,productDescription:p,showProductIcons:m=!1}=e,[h,...g]=(p||``).split(`
`),_=s&&(u&&d?s:U.createElement(U.Fragment,null,s,` `,U.createElement(`br`,null))),v=u?U.createElement(U.Fragment,null,_,l,` for your first`,` `,U.createElement(`span`,{className:o(nr,{[rr]:a&&n?.content?.isFormerNews})},`six`,a?`\xA0`:` `,`months`),` `,`year.`):U.createElement(U.Fragment,null,_,c&&U.createElement(U.Fragment,null,U.createElement(`span`,{className:nr},c),` `),l,`.`),y=U.createElement(U.Fragment,null,s,U.createElement($r,null,U.createElement(`span`,{className:o(nr,rr)},U.createElement(`span`,{className:ir},(n?.content)?.step1.annualTestHeadlineStrikeThroughPrice)),` `,(n?.content)?.step1.annualTestHeadlinePriceDisplay,`.`));return U.createElement(`div`,{className:o(Vn,n?.audience===`1_weekly_offer_no_icons_bau`&&Hn)},a&&U.createElement(`div`,{className:Un},U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,noMaxWidth:!0,classNamePillSpan:o(Wn,Gn)})),m&&U.createElement(U.Fragment,null,U.createElement(`div`,{className:qn,"aria-hidden":`true`},U.createElement(We,{loop:!0,autoplay:!0,src:`${i.assetUrl}/animations/gateway/IconAnimation.json`,style:{height:`auto`}})),U.createElement(`div`,{className:Jn,"aria-hidden":`true`},U.createElement(Yr,null))),n?.audience===`1_weekly_offer_no_icons_sale`?U.createElement(`div`,{className:tr},U.createElement(`h2`,{className:Yn,"data-testid":`aa-monthly-header-copy`},v),f&&U.createElement(`p`,{className:or,"data-testid":`aa-monthly-billed-as-copy`},f)):U.createElement(U.Fragment,null,U.createElement(`h2`,{className:o(Yn,{[Xn]:a,[Zn]:n?.content?.isAnnualSaleTest}),"data-testid":`aa-monthly-header-copy`},n?.content?.isAnnualSaleTest?y:v),f&&U.createElement(`p`,{className:or,"data-testid":`aa-monthly-billed-as-copy`},f)),p&&U.createElement(`p`,{className:sr},h,U.createElement(`br`,null),g),U.createElement(`button`,{type:`button`,className:cr,onClick:e=>{var r;(r=n?.trackInteraction)==null||r.call(n,e,{extraProps:Zr({name:j.GotoSecondStep,label:Qr,url:``})}),t()}},Qr))}var ti=N(ei);l();var ni=c`
  color: ${R.gray2};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,ri=c`
  color: ${R.saleRed};
  text-decoration-line: line-through;
  text-decoration-thickness: 1px;
`,ii=c`
  color: ${R.gray2};
`,ai=c`
  color: ${R.saleRed};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`;c`
  border: 0;
  height: 1px;
  background-color: ${R.gainsboro};
  margin-top: 8px;
  margin-bottom: 8px;
`;var oi=c`
  margin-top: 0;
  margin-bottom: 0;
`,si=c`
  box-sizing: border-box;
  width: 100%;
`,ci=c`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  & ${oi} {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  & ${si} {
    margin-top: 0 !important;
  }
`,li=c`
  display: flex;
  justify-content: center;
  margin-bottom: -12px;
  position: relative;
  z-index: 1;
`,ui=c`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 15px;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  cursor: default;
  width: 311px;
  box-sizing: border-box;

  input {
    margin: unset;
    accent-color: ${R.veryDarkGrey};
    margin-top: 3px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    width: 300px;
  }
`,di=c`
  gap: 0;
`,fi=c`
  border: 1px solid ${R.gainsboro};
`,pi=c`
  border: 1px solid ${R.black};
`,mi=c`
  border: 2px solid ${R.gainsboro};
`,hi=c`
  border: 2px solid ${R.black};
`,gi=c`
  padding-top: 19px;
`,_i=c`
  font-size: 14px;
  font-weight: 600;
  @media (min-width: ${L.mediumLarge}px) {
    font-size: 16px;
  }
`,yi=c`
  font-size: 16px;
`,bi=c`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 0;
  padding: 1px 6px 0px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: ${R.white};
  border: 1px solid ${R.veryDarkGrey};

  p {
    margin: 0;
    font-family: ${P.franklin};
    font-size: 11px;
    font-style: normal;
    font-weight: ${F.medium};
    line-height: 125%;
    letter-spacing: 1.1px;
    color: ${R.veryDarkGrey};
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    min-height: 15px;
    max-width: 69px;
  }
`,xi=c`
  display: flex;
  gap: 8px;
  width: 100%;
  min-width: 0;
`,Si=c`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  line-height: 21px;
`,Ci=c`
  font-size: 18px;
  line-height: 23px;
`,wi=c`
  line-height: 18px;
`,Ti=c`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,Ei=c`
  color: ${R.lightTextSubDued};
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 2px;
`,Di=c`
  margin-left: 6px;

  p {
    font-size: 10px;
    min-height: 0px;
  }
`,Oi=c`
  align-self: start;
  margin: 0;
  min-width: 16px;
  min-height: 16px;
  margin-top: 3px;
`,ki=c`
  align-self: start;
  margin: 0;
  min-width: 16px;
  min-height: 16px;
  margin-top: 3px;
`,Ai=c`
  min-width: 18px;
  min-height: 18px;
  margin: 0 !important;
`,ji=c`
  gap: 0;
`,Mi=c`
  display: flex;
  gap: 8px;
  width: 100%;
  min-width: 0;
`,Ni=c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 21px;
`,Pi=c`
  min-height: 18px;
`,Fi=c`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,Ii=c`
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
  align-self: center;
`,Li=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #666666;
  text-align: left;
  width: 100%;
  line-height: 16px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 14px;
    line-height: 18px;
  }
`,Ri=c`
  min-height: 16px;
  max-height: 32px;

  @media (min-width: ${L.mediumLarge}px) {
    max-height: unset;
  }
`,zi=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #666666;
  text-align: left;
  width: 100%;
  line-height: 16px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;c`
  font-size: 14px;
`;var Bi=c`
  white-space: nowrap;
`;c`
  display: flex;
  width: 173px;
`,c`
  margin-top: 8px;
`,l();function Vi(e,t){if(!e)return null;if(t!==`CA`)return e;let n=e.indexOf(`then `),r=e.indexOf(`)`,n);return n===-1||r===-1?e:U.createElement(U.Fragment,null,e.slice(0,n),U.createElement(`span`,{className:Bi},e.slice(n,r+1)),e.slice(r+1))}function Hi({unit:e,activeOffer:t,setActiveOffer:n,containerClassName:r=``,priceLabelClassName:i=``,toggleClassName:a=``,paddingLeft:s=``,hasBillingPeriod:c=!1,hideBestValuePill:l=!1,bestValuePillClassName:u=``,offerOrder:d=`monthly-first`,saleUrgencyPill:f,isSale:p=!1,control:m=!1,isFormerNews:h=!1,isAnnualSaleTest:g=!1}){let _=`monthly`,v=`annually`,y=i||o(_i,!p&&yi),b=r=>U.createElement(`div`,{className:o(a||ui,ji,r&&oi,{[pi]:t===_&&(!m||p),[fi]:t!==_&&(!m||p),[hi]:t===_&&m&&!p,[mi]:t!==_&&m&&!p,[gi]:p}),onClick:()=>n(_),onKeyDown:()=>n(_),role:`button`,tabIndex:0},U.createElement(`div`,{className:Mi},U.createElement(`input`,{id:`monthly`,className:o(ki,{[Ai]:!m}),type:`radio`,name:`toggle`,checked:t===_,onClick:()=>n(_)}),U.createElement(`div`,{className:Fi},g?U.createElement(`span`,{className:Ei},`Weekly`):null,U.createElement(`div`,{className:o(Ni,{[Pi]:p,[Ci]:m})},U.createElement(`span`,{className:o(y,s,Ii),"data-testid":`aa-monthly-offer-copy`},!p&&U.createElement(U.Fragment,null,U.createElement(`span`,{className:ni},e?.content?.monthly?.strikeThroughPriceDisplay),` `),g&&U.createElement(`span`,{className:ri},U.createElement(`span`,{className:ii},e?.content?.monthly?.strikeThroughPriceDisplay),` `),e?.content?.monthly?.priceDisplay,e?.content?.monthly?.showFirstYearSixMonthsStrikeSuffix?U.createElement(U.Fragment,null,` for your first `,U.createElement(`span`,{className:o(ni,{[ai]:p&&h})},`six months`),` year`):null)),c&&U.createElement(`span`,{className:o(Li,{[Ri]:p}),"data-testid":`aa-monthly-billed-as-copy`},e?.content?.monthly?.billingPeriodText)))),x=r=>U.createElement(`div`,{className:o(a||ui,di,r&&oi,{[pi]:t===v&&(!m||p),[fi]:t!==v&&(!m||p),[hi]:t===v&&m&&!p,[mi]:t!==v&&m&&!p}),onClick:()=>n(v),onKeyDown:()=>n(v),role:`button`,tabIndex:0},U.createElement(`div`,{className:xi},U.createElement(`input`,{id:`annually`,className:o(Oi,{[Ai]:!m}),type:`radio`,name:`toggle`,checked:t===v,onClick:()=>n(v)}),U.createElement(`div`,{className:Ti},g?U.createElement(`span`,{className:Ei},`Yearly`,U.createElement(`span`,{className:o(bi,u,Di)},U.createElement(`p`,null,`Best value`))):null,U.createElement(`div`,{className:o(Si,{[wi]:p,[Ci]:m})},U.createElement(`span`,{className:o(y,s),"data-testid":`aa-yearly-offer-copy`},g?U.createElement(`span`,{className:ri},U.createElement(`span`,{className:ii},e?.content?.annually?.strikeThroughPriceDisplay),` `):U.createElement(U.Fragment,null,U.createElement(`span`,{className:ni},e?.content?.annually?.strikeThroughPriceDisplay),` `),e?.content?.annually?.priceDisplay),l?null:U.createElement(`div`,{className:o(bi,u)},U.createElement(`p`,null,`Best value`))),c&&U.createElement(`span`,{className:zi,"data-testid":`aa-yearly-billed-as-copy`},Vi(e?.content?.annually?.billingPeriodText,e?.content?.country))))),S=e=>f?U.createElement(`div`,{className:si},U.createElement(`div`,{className:li},f),e):e,C=S(b(!f)),w=S(x(!f)),ee=U.createElement(U.Fragment,null,C,x(!1)),te=U.createElement(U.Fragment,null,w,b(!1));return U.createElement(`div`,{className:o(ci,r)},d===`monthly-first`?ee:te)}l();function Ui(e,t){let n=e===`monthly`?t.monthly:t.annually;return`${`${n.strikeThroughPriceDisplay?`${n.strikeThroughPriceDisplay} `:``}${n.priceDisplay}`.trim()}${e===`monthly`&&n.showFirstYearSixMonthsStrikeSuffix?` for your first year`:``}`.trim()}function Wi({content:e,onClose:t,unit:n}){let{unit:r}=A(He),[i,a]=(0,U.useState)(()=>e.initialOffer===`annually`?`annually`:`monthly`),s=e.offerOrder??`monthly-first`,c=!!e.isSale,{arlOfferTerms:l,legalCopy:u,useArlTerms:d}=(0,U.useMemo)(()=>{let t=i===`monthly`?e.monthly.offerInfo:e.annually.offerInfo,n=``,a=``;if(t){let e=t.billingTerms,r=t.cancellationTerms,i=t.offerTerms;n=`${i?.[0]??``} ${i?.[1]??``}`,a=(e??[]).concat(r??[]).join(` `)}let o=!!r?.content?.showApplePay||!!r?.content?.showGooglePay,s=t?.offerTerms;return{arlOfferTerms:n,legalCopy:o?a:s??e.legal,useArlTerms:o}},[i,e,r]),f=(0,U.useCallback)(t=>{var r;let o=t;o!==`monthly`&&o!==`annually`||o!==i&&((r=n?.trackInteraction)==null||r.call(n,{type:`click`},{extraProps:Zr({name:o===`monthly`?j.MonthlyOffer:j.AnnualOffer,label:Ui(o,e),url:``}),selectedOffer:o}),a(o))},[i,e,n]),p=i===`monthly`?e.monthly.payflowUri:e.annually.payflowUri,m=i===`monthly`?e.monthly.offerInfo:e.annually.offerInfo;if(!m)return null;let h=n?.campaign===`CONV_TA_INTL_NEWS_2STEP_PAYWALL`,g=n?.campaign===`CONV_FORMERS_2_STEP_PAYWALL`,_=n?.campaign===`CONV_TA_INTL_PAYWALL_PAYMENT_METHODS_MESSAGING`,v=n?.campaign===`CONV_INTL_PAYWALL_ANNUAL_SALE_OFFER_2_STEP`,y=_&&n?.audience.includes(`variant`);return U.createElement(`div`,{className:lr},U.createElement(`div`,{className:vr},U.createElement(`span`,{className:yr,"aria-hidden":!0}),U.createElement(`h2`,{className:br,id:`intl-simplified-paywall-step2-title`},`Subscription details`),U.createElement(`button`,{type:`button`,className:xr,onClick:e=>{var r;(r=n?.trackInteraction)==null||r.call(n,e,{extraProps:Zr({name:j.GotoFirstStep,label:`×`,url:``})}),t()},"aria-label":`Close`},U.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`},U.createElement(`path`,{d:`M4.58807 6.00177L0 10.5898L1.41421 12.0041L6.00229 7.41598L10.59 12.0037L12.0042 10.5895L7.4165 6.00177L12.0041 1.41421L10.5898 0L6.00229 4.58756L1.42007 0.00534213L0.00585938 1.41956L4.58807 6.00177Z`,fill:`#121212`})))),U.createElement(`div`,{className:ur},U.createElement(`div`,{className:dr},U.createElement(`div`,{className:mr},U.createElement(`p`,{className:o(Sr,{[$n]:n?.content?.isAnnualSaleTest}),"data-testid":`aa-monthly-header-copy`},`Enjoy unlimited access to all of The Times.`),U.createElement(Yr,{showLabels:!0,className:o(Ar,(h||_||g||v)&&Pr)}),U.createElement(`span`,{className:o({[Qn]:n?.content?.isAnnualSaleTest})},U.createElement(`p`,{className:o(Cr,Tr,{[$n]:n?.content?.isAnnualSaleTest})},`Choose your subscription`),n?.content?.isAnnualSaleTest?U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,isFullWidth:!0,classNamePillSpan:o(Wn,Kn,ar)}):void 0),U.createElement(`div`,{className:Or},U.createElement(Hi,{unit:{...n,content:{monthly:e.monthly,annually:e.annually,country:e.country}},activeOffer:i,setActiveOffer:f,toggleClassName:o(hr,gr),hasBillingPeriod:!0,isSale:c,hideBestValuePill:c,isFormerNews:n?.content?.isFormerNews,isAnnualSaleTest:n?.content?.isAnnualSaleTest,offerOrder:s,saleUrgencyPill:c&&!n?.content?.isAnnualSaleTest?U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,noMaxWidth:!0,classNamePillSpan:o(Wn,Kn)}):void 0})),U.createElement(`div`,{className:kr},U.createElement(Ue,{offerInfo:m,trackingOptions:{impression:{name:`gateway`,context:`paywall`,label:n?.campaign}},creditCardButtonLabel:n?.content?.isFormerNews?`Resubscribe with card`:`Continue to checkout`,applePayButtonLabel:n?.content?.isFormerNews?`Resubscribe with`:`Subscribe with`,googlePayButtonLabel:n?.content?.isFormerNews?`Resubscribe with`:`Subscribe with`,paypalButtonLabel:n?.content?.isFormerNews&&`Resubscribe with`,payflowUri:p,source:`paywall`})))),y&&U.createElement(`p`,{className:Er},`More payment options at checkout`),U.createElement(`p`,{className:Dr},`Cancel anytime.`),U.createElement(`div`,{className:fr},U.createElement(G,{legalCopy:u,useArlTerms:d,arlOfferTerms:l,surveyCampaign:`AA`,offerDescription:e.offerDescription,showPaymentIcons:!1,boldedCancel:!1,isSale:c,overrideClass:pr}))))}var Gi=N(Wi),Ki=`CONV_TA_INTL_NEWS_2STEP_PAYWALL`,qi=`CONV_FORMERS_2_STEP_PAYWALL`,Ji=`CONV_TA_INTL_PAYWALL_PAYMENT_METHODS_MESSAGING`,Yi=`CONV_INTL_PAYWALL_ANNUAL_SALE_OFFER_2_STEP`,Xi=450;function Zi(){return typeof window>`u`?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Qi(e=`smooth`){let t=document.scrollingElement??document.documentElement,n=Math.max(0,t.scrollHeight-window.innerHeight);window.scrollTo({top:n,behavior:e})}function $i({unit:e}){let[t,n]=(0,U.useState)(1),r=e?.content,i=(0,U.useRef)(null),a=(0,U.useRef)(null),o=e?.campaign===Ki,s=e?.campaign===qi,c=e?.campaign===Ji,l=e?.campaign===Yi,u=(0,U.useCallback)(e=>{if(!(o||s||c||l)||Zi()){n(e);return}let t=i.current;t&&(a.current=t.getBoundingClientRect().height),n(e)},[o,s,c,l]);return(0,U.useLayoutEffect)(()=>{let e=i.current,t=a.current;if(a.current=null,!e||t===null||!(o||s||c||l)||Zi())return;let n=e.scrollHeight;if(Math.abs(t-n)<2)return;e.style.height=`${t}px`,e.style.overflow=`hidden`;let r=0,u=0;r=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{e.style.transition=`height ${Xi}ms ease-out`,e.style.height=`${n}px`})});let d=t=>{t.propertyName===`height`&&(e.style.height=``,e.style.overflow=``,e.style.transition=``,e.removeEventListener(`transitionend`,d))};return e.addEventListener(`transitionend`,d),()=>{cancelAnimationFrame(r),cancelAnimationFrame(u),e.removeEventListener(`transitionend`,d),e.style.height=``,e.style.overflow=``,e.style.transition=``}},[t,o,s,c,l]),(0,U.useLayoutEffect)(()=>{if(t!==2)return;let e=0,n=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{Qi(`smooth`)})});return()=>{cancelAnimationFrame(n),cancelAnimationFrame(e)}},[t]),!r?.step1||!r?.step2||!r.step2.monthly||!r.step2.annually||!r.step2.monthly.offerInfo||!r.step2.annually.offerInfo?null:U.createElement(`div`,{ref:i,className:Bn,...t===2?{role:`dialog`,"aria-modal":!0,"aria-labelledby":`intl-simplified-paywall-step2-title`}:{}},t===1?U.createElement(ti,{content:r.step1,onSeeDetails:()=>u(2),unit:e}):U.createElement(Gi,{content:r.step2,onClose:()=>u(1),unit:e}))}var K=N($i);l();var ea=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 20px 48px;

  @media (min-width: ${L.large}px) {
    padding: 40px 80px 48px;
  }
`,ta=c`
  max-width: 540px;
  text-wrap: pretty;

  @media (min-width: ${L.medium}px) {
    max-width: 620px;
    text-wrap: balance;
  }
`,na=c`
  font-weight: ${F.semiBold};
`;c`
  display: none;

  @media (min-width: ${L.medium}px) {
    display: block;
  }
`;var ra=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 212px;
`,ia=c`
  font-weight: ${F.semiBold};
`,aa=c`
  padding: 12px 0;
  display: flex;
  gap: 4px;
`,oa=c`
  color: ${R.veryDarkGrey};
  font-size: 16px;
`,sa=`paywall.news.vi.tb`,ca=`psecnfac`,la=`https://myaccount.nytimes.com/auth/confirm-account`,ua=`https://myaccount.nytimes.com/auth/enter-email`,da=`https://www.nytimes.com/subscription/onboarding-offer`,fa=`account_confirmed`,pa=`new_account`;function ma(){if(typeof window>`u`)return null;try{let e=window.userXhrObject,t=e?.responseText??e?.response;return(typeof t==`string`?JSON.parse(t):t)?.data?.user?.profile?.email||null}catch{return null}}var ha=()=>typeof window<`u`?window.location.href:``;function ga(e){let t=ha(),n=new URL(y(da));return n.searchParams.set(`st`,e),n.searchParams.set(`source`,sa),n.searchParams.set(`redirect_uri`,t),n.toString()}function _a(){let e=new URL(y(la));return e.searchParams.set(`response_type`,`cookie`),e.searchParams.set(`client_id`,ca),e.searchParams.set(`redirect_uri`,ga(fa)),e.searchParams.set(`new_account_redirect_uri`,ga(pa)),e.toString()}function va(){let e=new URL(y(ua));return e.searchParams.set(`response_type`,`cookie`),e.searchParams.set(`client_id`,ca),e.searchParams.set(`redirect_uri`,ga(pa)),e.toString()}function ya({unit:e}){let t=_a(),n=va(),r=ma(),i=(t,n)=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:n,label:t.currentTarget.textContent||``,url:t.currentTarget.getAttribute(`href`)||``}}}})};return U.createElement(`div`,{className:ea},U.createElement(ae,{size:28,color:`primary`},`Confirm your account`),U.createElement(qe,{defaultSpace:1,mediumScreenSpace:1.5}),U.createElement(oe,{size:16,color:`primary`,className:ta},`We noticed multiple devices using this subscription. To continue, please request a verification code for`,` `,U.createElement(`span`,{className:na},r||`the email address associated with this account`,`.`)),U.createElement(qe,{defaultSpace:3,mediumScreenSpace:4}),U.createElement(`div`,{className:ra},U.createElement(re,{"data-testid":`confirm-account-btn`,href:t,weight:`emphasis`,colorBehavior:`alwaysLight`,sx:{width:`100%`,maxWidth:`unset`},onClick:e=>i(e,`send-code`)},U.createElement(oe,{size:16,className:ia},`Email me a one-time code`)),U.createElement(qe,{defaultSpace:1.5}),U.createElement(re,{"data-testid":`create-account-btn`,href:n,weight:`standard`,colorBehavior:`alwaysLight`,sx:{width:`100%`,maxWidth:`unset`},onClick:e=>i(e,`create-account`)},U.createElement(oe,{size:16,className:ia},`Create a new account`))),U.createElement(qe,{defaultSpace:1.5}),U.createElement(`div`,{className:aa},U.createElement(oe,{size:16,color:`primary`},`Can't access this email?`,` `),U.createElement(ne,{className:oa,height:`extraCompact`,href:`https://help.nytimes.com/115015287707-Change-Your-Email-Address`,onClick:e=>i(e,`cant-access-email`)},`View more options.`)))}var ba=N(ya);l();var xa=c`
  transform: translate(0, -42vh);
`,Sa=c`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`,Ca=c`
  height: 14px;
  padding: 0 0 0 8px;
  vertical-align: middle;
`,wa=c`
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 8px auto 16px auto;
`,Ta=c`
  display: inline-block;
  border: transparent;
  background: none;
  color: ${R.black};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${R.black};
`,Ea=c`
  display: block;
  margin: 0;
  font-weight: 500;
`,Da=c`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
`,Oa=c`
  display: inline-block;
  background-color: ${R.black};
  border: none;
  border-radius: 3px;
  color: ${R.white};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 600;
  text-decoration: none;
  padding: 11.5px 16px;
  margin: 24px auto 11.5px;
`;l();var ka=c`
  display: inline;

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,Aa=c`
  display: inline;
  color: ${R.white};

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,ja=c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: none;
`,Ma=c`
  color: ${R.white};
  font-weight: 700;
  text-decoration: none;
`;c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: underline;
`;var Na=`https://www.nytimes.com/subscription/onboarding-offer`,Pa={name:`gatewayTopperLoginPrompt`,tracking:{module:{name:`gatewayTopper`}},onlyTrackWhenVisible:!1,fallback:null,campaigns:{DEFAULT:{content:()=>({loggedOut:!0})},LOGGED_IN:{content:()=>({loggedOut:!1})},LOGGED_OUT:{content:()=>({loggedOut:!0,clickThroughURI:T(`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3`).withCampaignID({defaultCampaignID:`7JFJX`}).withRedirectUri({uri:T(Na).withCampaignID({defaultCampaignID:`7JFJX`}).withRedirectUri().withExitUri().toString()}).toString()}),tracking:{module:{name:`gatewayTopper`,context:`GatewayTopperLoginPrompt`,label:`LOGGED_OUT`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignID%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252F`}}}},LOGGED_OUT_TA:{content:()=>({loggedOut:!0,clickThroughURI:T(`https://www.nytimes.com/athletic/login2/`).withCampaignID({defaultCampaignID:`7JFJX`}).withSource(`athletic`).withRedirectUri().toString()}),tracking:{module:{name:`gatewayTopper`,context:`GatewayTopperLoginPrompt`,label:`LOGGED_OUT`,element:{name:j.LogIn,label:`Log in`,url:`https://www.nytimes.com/athletic/login2/`}}}},LOGGED_OUT_WEBVIEW:{content:()=>({loggedOut:!0,clickThroughURI:`nytxwd://login`}),tracking:{module:{name:`gatewayTopper`,context:`GatewayTopperLoginPrompt`,label:`LOGGED_OUT_WEBVIEW`,element:{name:j.LogIn,label:`Log in`,url:`nytxwd://login`}}}}}};function Fa({darkStyle:e=!1}){let{unit:t}=A(Pa);return t?.canShow?t?.content?.loggedOut?U.createElement(U.Fragment,null,` `,U.createElement(`span`,{className:e?Aa:ka,"data-testid":`onsite-messaging-unit-${Pa?.name}`,"data-campaign":t?.campaign,"data-audience":t?.audience},`Already a subscriber?`,` `,U.createElement(z,{component:`a`,testId:`login-button`,className:e?Ma:ja,onClick:t?.trackInteraction,href:t?.content?.clickThroughURI},`Log in.`))):U.createElement(`span`,{"data-testid":`onsite-messaging-unit-${Pa?.name}`,"data-campaign":t?.campaign,"data-audience":t?.audience}):null}var Ia=N(Fa);l();var La=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 24px;
  padding-bottom: 16px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.black};
`,Ra=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 24px;
  padding-bottom: 16px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.white};
  background-color: #2a2a2a;
  width: 100%;
  border-top: 1px #424242 solid;
  border-bottom: 1px #424242 solid;
`,za=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 8px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.black};
`,Ba=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 8px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.white};
  background-color: #2a2a2a;
  width: 100%;
`,Va=c`
  display: inline;

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,Ha=c`
  display: inline;
  color: ${R.white};

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,Ua=c`
  border: 0;
  background-color: ${R.lineGrey};
  height: 1px;
  width: 100%;
`;c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: none;
`;function q({unit:e,darkStyle:t=!1}){let n=t?Ra:La;return e?.content?.useShortTopper&&(n=t?Ba:za),U.createElement(U.Fragment,null,U.createElement(`div`,{className:n,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(`span`,{className:t?Ha:Va},e?.content?.text),U.createElement(Ia,{darkStyle:t})),!t&&U.createElement(`hr`,{className:Ua}))}l();var Wa=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 24px;
  padding-bottom: 16px;
  text-align: center;
  line-height: 1.2;
  font-size: 14px;
  color: ${R.black};
`,Ga=c`
  display: inline-block;
`,Ka=c`
  border: 0;
  background-color: ${R.lineGrey};
  height: 1px;
  width: 100%;
`,qa=c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: none;
`;function Ja({unit:e}){let t=e?.content?.uri;return U.createElement(U.Fragment,null,` `,U.createElement(`span`,{className:Ga},`Already a subscriber?`,` `,U.createElement(z,{component:`a`,testId:`login-button`,className:qa,onClick:n=>{e?.trackInteraction(n,{extraProps:{module:{element:{url:t}}}})},href:t},`Log in.`)))}function Ya({unit:e}){let t=!e?.content?.loggedIn;return U.createElement(U.Fragment,null,U.createElement(`div`,{className:Wa,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(`span`,{className:Ga},`Unfortunately, the gift article you clicked on has expired.`),t&&U.createElement(Ja,{unit:e})),U.createElement(`hr`,{className:Ka}))}var Xa=N(Ya);l();var Za=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 12px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.black};
`,Qa=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 12px;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: ${R.white};
  background-color: ${R.black};
  width: 100%;
  border-bottom: 1px #868585 solid;
`,$a=c`
  display: inline;

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,eo=c`
  border: 0;
  background-color: ${R.lineGrey};
  height: 1px;
  width: 100%;
`,to=c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: underline;
`,no=c`
  color: ${R.white};
  font-weight: 700;
  text-decoration: underline;
`,ro=({darkStyle:e})=>U.createElement(`svg`,{width:`9`,height:`9`,viewBox:`0 0 9 9`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{display:`inline`,marginLeft:`4px`,verticalAlign:`middle`}},U.createElement(`path`,{d:`M7.68009 7.20963L7.01304 7.21239V1.47267L0.943244 7.54247L0.471609 7.07083L6.54071 1.00173L5.73762 1.00104L0.804446 0.995516V0.332603H7.68078L7.68009 7.20963Z`,stroke:e?`#fff`:`#121212`,strokeWidth:`0.666667`}));function io({unit:e,darkStyle:t}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:t?Qa:Za,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(`span`,{className:$a},`Explore more for free.`,` `,U.createElement(V,{openInAppParam:`paywall-download-topper`,isLoggedIn:e?.content?.isLoggedIn,trackInteraction:e.trackInteraction,className:t?no:to},`Try the app`,U.createElement(ro,{darkStyle:t})))),!t&&U.createElement(`hr`,{className:eo}))}l();var ao=c`
  font-family: ${P.franklin};
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  line-height: 1.2;
  font-size: 14px;
  color: ${R.black};
`,oo=c`
  display: inline;

  @media (min-width: ${L.verySmall}px) {
    display: block;
  }

  @media (min-width: ${L.small}px) {
    display: inline;
  }
`,so=c`
  border: 0;
  background-color: ${R.lineGrey};
  height: 1px;
  width: 100%;
  margin: 0;
`;c`
  color: ${R.veryDarkGrey};
  font-weight: 700;
  text-decoration: none;
`;function co({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:ao,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},e?.content?.topperCopy&&U.createElement(`span`,{className:oo},e?.content?.topperCopy)),U.createElement(`hr`,{className:so}))}function lo({unit:e}){return e.content.gatewayType===`PAYWALL`?U.createElement(q,{unit:e}):U.createElement(`span`,{"data-testid":`onsite-messaging-unit-gatewayTopper`,"data-campaign":`fallback`,"data-audience":``})}function uo(e){return{text:`Support independent journalism with a subscription.`,loggedIn:!1,gatewayType:e.meter?.data?.gatewayType}}function fo(){return{module:{name:`gatewayTopper`,context:`SubconConvGatewayTopperLoggedOut234`,label:`FALLBACK_PAYWALL_TOPPER`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignID%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252F`}}}}function po(e){if(e.meter?.error)return!1;let t=e.meter?.data;return!(!t?.gateway||t?.granted||!t?.gatewayEligible||t?.gatewayExempt||t?.gatewayType!==`PAYWALL`)}var mo={component:lo,content:uo,tracking:fo,canShow:po},ho=()=>U.createElement(`svg`,{width:`16`,height:`16`,viewBox:`-3.5 -3.5 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,style:{display:`inline-block`,verticalAlign:`middle`,pointerEvents:`none`}},U.createElement(`path`,{d:`M7.68015 7.20963L7.0131 7.21239V1.47267L0.943305 7.54247L0.47167 7.07083L6.54077 1.00173L5.73768 1.00104L0.804507 0.995516V0.332603H7.68084L7.68015 7.20963Z`,stroke:`currentColor`,strokeWidth:`0.666667`})),go=()=>U.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`32`,height:`32`,viewBox:`0 0 32 32`,fill:`none`,"aria-hidden":`true`,focusable:`false`},U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`31.5`,height:`31.5`,rx:`7.75`,fill:`#F7F7F7`}),U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`31.5`,height:`31.5`,rx:`7.75`,stroke:`#DFDFDF`,strokeWidth:`0.5`}),U.createElement(`path`,{d:`M24.1257 18.1362C23.441 19.9372 22.1811 21.3288 20.3735 22.0656V18.1362L22.5372 16.1988L20.3735 14.2887V11.5873C22.3455 11.4509 23.7149 10.0046 23.7149 8.23098C23.7149 5.91157 21.4964 5.09296 20.2366 5.09296C19.9627 5.09296 19.6614 5.09296 19.2232 5.20211V5.31125C19.3875 5.31125 19.634 5.28397 19.7162 5.28397C20.5926 5.28397 21.2499 5.69327 21.2499 6.4846C21.2499 7.08492 20.7569 7.68523 19.8805 7.68523C17.7168 7.68523 15.1697 5.93886 12.4035 5.93886C9.93854 5.93886 8.24046 7.7671 8.24046 9.62262C8.24046 11.4781 9.30861 12.0512 10.4315 12.4605L10.4589 12.3513C10.1029 12.133 9.85637 11.751 9.85637 11.1507C9.85637 10.3321 10.6232 9.64991 11.5818 9.64991C13.9099 9.64991 17.6621 11.5873 19.9901 11.5873H20.2092V14.316L18.0455 16.1988L20.2092 18.1362V22.1201C19.3054 22.4476 18.3742 22.584 17.4156 22.584C13.8003 22.584 11.4997 20.401 11.4997 16.7719C11.4997 15.8987 11.6092 15.0528 11.8557 14.2341L13.6634 13.4428V21.4652L17.3334 19.8553V11.6419L11.9379 14.0431C12.4857 12.4605 13.6086 11.3144 14.9506 10.6595L14.9232 10.5777C11.308 11.369 7.80225 14.0977 7.80225 18.1908C7.80225 22.9115 11.8009 26.1859 16.457 26.1859C21.3869 26.1859 24.1805 22.9115 24.2079 18.1362H24.1257Z`,fill:`#121212`}));l();var _o=`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  font-family: ${P.franklin};
  font-size: 0.9375rem;
  line-height: 1.4;
`,vo=c`
  ${_o}
  background-color: ${R.gray97};
  color: ${R.veryDarkGrey};
`,yo=c`
  ${_o}
  background-color: ${R.black};
  color: ${R.white};
`,bo=c`
  margin: 0;
  font-weight: 500;
`,xo=`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-thickness: from-font;
  text-underline-offset: 4px;
`,So=c`
  ${xo}
  color: ${R.veryDarkGrey};
`,Co=c`
  ${xo}
  color: ${R.white};
`;function wo({unit:e,darkStyle:t}){let n=e?.content?.text,r=e?.content?.linkText,i=e?.content?.openInAppParam??`regiwall-download-topper`;return!n||!r?null:U.createElement(`div`,{className:t?yo:vo,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(go,null),U.createElement(`p`,{className:bo},n),U.createElement(V,{openInAppParam:i,label:r,isLoggedIn:!1,trackInteraction:e.trackInteraction,className:t?Co:So},r,U.createElement(ho,null)))}var To=()=>U.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`62`,height:`15.5`,viewBox:`0 0 100 25`,fill:`none`,"aria-hidden":`true`,focusable:`false`,style:{display:`block`,flexShrink:0}},U.createElement(`rect`,{width:`25`,height:`25`,fill:`#f4564a`}),U.createElement(`path`,{d:`M17.5,19.4H7.4v-2c.8-.8,1.7-1.5,2.6-2.2.7-.6,1.3-1.1,1.9-1.7,1.3-1.2,1.7-2.1,1.7-3.1,0-.8-.4-1.5-1.3-1.5-.8,0-1.6.6-2,2l-3-.9c.9-2.8,2.9-3.8,5.2-3.8,2.6,0,4.8,1.2,4.8,4.1,0,2.7-2.5,4.6-4.6,6.1h4.7v3h.1Z`,fill:`#fff`}),U.createElement(`rect`,{x:`25`,width:`25`,height:`25`,fill:`#2b8ad8`}),U.createElement(`path`,{d:`M37.5,19.6c-3,0-5.3-2.4-5.3-6.7,0-3.9,1.9-6.7,5.3-6.7s5.3,2.9,5.3,6.7c0,4.1-2.1,6.7-5.3,6.7ZM37.5,8.7c-1.5,0-1.7,1.5-1.7,4.2,0,3,.3,4.1,1.7,4.1s1.7-1.1,1.7-4.1c0-2.7-.2-4.2-1.7-4.2Z`,fill:`#fff`}),U.createElement(`rect`,{x:`50`,width:`25`,height:`25`,fill:`#f4564a`}),U.createElement(`path`,{d:`M67.5,19.4h-10.1v-2c.8-.8,1.7-1.5,2.6-2.2.7-.6,1.3-1.1,1.9-1.7,1.3-1.2,1.7-2.1,1.7-3.1,0-.8-.4-1.5-1.3-1.5-.8,0-1.6.6-2,2l-3-.9c.9-2.8,2.9-3.8,5.2-3.8,2.6,0,4.8,1.2,4.8,4.1,0,2.7-2.5,4.6-4.6,6.1h4.7v3h.1Z`,fill:`#fff`}),U.createElement(`rect`,{x:`75`,width:`25`,height:`25`,fill:`#2b8ad8`}),U.createElement(`path`,{d:`M89.62,10.25c-.41-1.14-1.12-1.55-1.83-1.55-1.35,0-2.26.95-2.3,3.21.66-.31,1.64-.83,2.92-.83,2.03,0,4,1.29,4,3.9,0,2.7-2.36,4.62-5.18,4.62-3.07,0-5.35-2.45-5.35-6.22,0-3.63,1.91-7.28,6.07-7.28,2.12,0,3.67.87,4.58,2.97l-2.9,1.18ZM87.26,13.57c-.73,0-1.39.35-1.78.58,0,2.09.62,2.97,1.72,2.97,1.02,0,1.62-.91,1.62-1.91,0-1.1-.68-1.64-1.56-1.64Z`,fill:`#fff`}));l();var Eo=`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  font-family: ${P.franklin};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3;
`,Do=c`
  ${Eo}
  background-color: ${R.whiteDarkContentPrimary};
  border-bottom: 1px solid ${R.gainsboro};
  color: ${R.veryDarkGrey};
`,Oo=c`
  ${Eo}
  background-color: ${R.black};
  border-bottom: 1px solid ${R.black};
  color: ${R.white};
`,ko=c`
  margin: 0;
  text-align: center;
`,Ao=`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: from-font;
  text-underline-offset: 2px;
  white-space: nowrap;
`,jo=c`
  ${Ao}
  color: ${R.veryDarkGrey};
`,Mo=c`
  ${Ao}
  color: ${R.white};
`,No={paywall:ee,regiwall:w};function Po({unit:e,darkStyle:t}){let n=e?.content?.text,r=e?.content?.linkText,i=e?.content?.gatewayType,a=e?.content?.openInAppParam;if(!n||!r||!a||!No[i])return null;let o=t?Mo:jo,s=U.createElement(U.Fragment,null,r,U.createElement(ho,null));return U.createElement(`div`,{className:t?Oo:Do,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(To,null),U.createElement(`div`,{className:ko},n,` `,U.createElement(V,{openInAppParam:a,oneLinkUrl:No[i],label:r,isLoggedIn:!1,trackInteraction:e.trackInteraction,className:o},s)))}function Fo({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:e?.content?.useShortTopper?za:La,"data-testid":`onsite-messaging-unit-${Ro?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},U.createElement(`span`,{className:Va},e?.content?.text)),U.createElement(`hr`,{className:Ua}))}var Io=e=>typeof window<`u`&&e?.client===`vi`&&window.location.pathname.indexOf(`upshot/wordle-bot`)!==-1,Lo=(e,t)=>t?`Your subscription does not include Games.`:e?.client===`vi`?`Your subscription does not include News.`:e?.client===`athletic`?`Your subscription does not include The Athletic.`:e?.client===`cooking`?`Your subscription does not include Cooking.`:`Your subscription does not include News.`,Ro={name:`gatewayTopper`,enableOfferEligibility:!0,fallback:mo,campaigns:{DEFAULT:{component:q,content:()=>({text:`Support independent journalism with a subscription.`,loggedIn:!1}),tracking:{module:{name:`gatewayTopper`,context:`SubconConvGatewayTopperLoggedOut234`,label:`DEFAULT`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https://www.nytimes.com/subscription/onboarding-offer?campaignID=7JFJX&EXIT_URI=https://`}}}},SUBCON_CONV_GATEWAY_TOPPER_234:{component:q,content:()=>({text:`Support independent journalism with a subscription.`})},CROSSPLAY_CROSS_BOT_TOPPER:{component:Fo,audiences:{iOS:{content:()=>({text:`Unlock your insights and full access to all our games.`}),tracking:e=>({module:{name:`gamesPaywallCrossbot`,context:`topper`,label:e.campaign,region:e.meterViewed,other:[{key:`source_app`,value:`crossplay-ios`},{key:`native_app.asset.section`,value:`page-game-review`}]}})},Android:{content:()=>({text:`Unlock your insights and full access to all our games.`}),tracking:e=>({module:{name:`gamesPaywallCrossbot`,context:`topper`,label:e.campaign,region:e.meterViewed,other:[{key:`source_app`,value:`crossplay-android`},{key:`native_app.asset.section`,value:`page-game-review`}]}})}}},ACCT_UPGRADE_248:{component:co,content:e=>({topperCopy:Lo(e,Io(e)),loggedIn:!0})},AUD_ENGAGE_GIFT_ARTICLES_LOGGED_OUT_237:{component:Xa,content:()=>({loggedIn:!1,uri:T(`https://myaccount.nytimes.com/auth/login`).withExitUri().toString()}),tracking:{module:{name:`gatewayTopper`,context:`AudEngageGiftArticlesLoggedOut237`,label:`DEFAULT`,element:{name:j.LogIn,label:`Log in`}}}},AUD_ENGAGE_GIFT_ARTICLES_LOGGED_IN_237:{component:Xa,content:()=>({loggedIn:!0}),tracking:{module:{name:`gatewayTopper`,context:`AudEngageGiftArticlesLoggedIn237`,label:`DEFAULT`}}},CONV_WORDLEBOT_PAYWALL_GATEWAY_TOPPER_TEST_242:{component:q,tracking:{module:{name:`gatewayTopper`,context:`wordlebotGatewayTopperTest0124`,label:`DEFAULT`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignID%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252F`}}},content:()=>({text:`Stay sharp with word,  visual, logic and number games.`})},[Je.name]:{component:q,tracking:{module:{name:`gatewayTopper`,context:Je.name,label:`DEFAULT`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignID%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252F`}}},audiences:{eligible_for_games_sale_offer:{content:()=>({text:`Stay sharp with word,  visual, logic and number games.`})}}},SUBCON_CONV_FORMERS_231:{component:q,content:()=>({text:`Resubscribe to support independent journalism.`})},CONV_FORMERS_LOOKBACK_TEST:{component:q,audiences:{"1_formers_messaging":{content:()=>({text:`Resubscribe to support independent journalism.`})}}},CONV_TA_PAYWALL_OFFER_TEST_TA_VS_AA_249:{component:q,content:()=>({useShortTopper:!0})},[Ke.name]:{component:q,audiences:{eligible_for_all_access_promo_offer:{content:()=>({text:`Enjoy unlimited access to all of The Times.`,loggedIn:!1})}},tracking:{module:{name:`gatewayTopper`,context:`SubconConvGatewayTopperAllAccessPromo`,label:`DEFAULT`,element:{name:j.LogIn,label:`Log in`,url:`https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3&redirect_uri=https://www.nytimes.com/subscription/onboarding-offer?campaignID=7JFJX&EXIT_URI=https://`}}}},B2B_SSO_USER_RENEWAL_252:{component:q,content:()=>({text:`Continue your complimentary access now.`})},CONV_PAYWALL_DOWNLOAD_TEST_2511:{component:io,content:()=>({isLoggedIn:!0})},JOURNEYS_REGIWALL_DOWNLOAD_TOPPER:{component:wo,audiences:{"0_control":{suppressConfigImpression:!0},"1_stay_logged_in":{content:()=>({text:`Stay logged in.`,linkText:`Switch to the app`,openInAppParam:`regiwall-download-topper-1`})},"2_first_month_free":{content:()=>({text:`Your first month in the app is free.`,linkText:`Download`,openInAppParam:`regiwall-download-topper-2`})},"3_its_better":{content:()=>({text:`Continue in the app — it’s better.`,linkText:`Open app`,openInAppParam:`regiwall-download-topper-3`})},"4_always_free":{content:()=>({text:`Explore free-to-read stories, daily.`,linkText:`Open app`,openInAppParam:`regiwall-download-topper-4`})}},tracking:{module:{name:`gatewayTopper`,context:`regiwall`,label:`JOURNEYS_REGIWALL_DOWNLOAD_TOPPER`,element:{name:j.AppDownload}}}},JOURNEYS_ELECTION_2026_TOPPER:{component:Po,audiences:{smartphone_paywall:{content:()=>({text:`Our election coverage is`,linkText:`free in the app.`,gatewayType:`paywall`,openInAppParam:`paywall-topper-election`})},desktop_regiwall:{content:()=>({text:`Our election coverage is`,linkText:`free in the app.`,gatewayType:`regiwall`,openInAppParam:`regiwall-topper-election`})}},tracking:{module:{name:`gatewayTopper`,context:`election2026`,label:`JOURNEYS_ELECTION_2026_TOPPER`,element:{name:j.AppDownload}}}}}};function zo({darkStyle:e=!1}){let{unit:t}=A(Ro);return t?.canShow&&t?.component?U.createElement(t.component,{unit:t,darkStyle:e}):null}var Bo=N(zo);l();var Vo=c`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 18, 18, 0.6);
  z-index: ${B.zIndex.modal-1};
  pointer-events: auto;
`,Ho=c`
  will-change: transform;
  display: flex;
  top: 100vh;
  align-items: center;
  background-color: ${B.color.white};
  box-shadow: 0px -2px 31px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  flex-direction: column;
  font-family: ${B.font.franklinBase};
  height: 300px;
  margin: 0 auto;
  opacity: 0;
  padding: 20px;
  position: fixed;
  text-align: left;
  width: 100%;
  z-index: ${B.zIndex.modal};
  overflow: hidden;

  ${B.breakpoint.mediumMediaExtralarge} {
    padding: 20px 25px;
  }
`,Uo=c`
  height: auto;
  opacity: 1;
  transition: transform 750ms ease-out;
  overscroll-behavior: none;

  @media screen and (min-width: 765px) {
    min-height: 50vh;
    transform: translate(0, -50vh);
  }

  @media print {
    /* stylelint-disable-next-line declaration-no-important */
    background-color: ${B.color.white} !important;
    padding: 30px 25px;
    border-top: 1px solid #e4e4e4;
  }
`,Wo=c`
  ${Uo}
  min-height: 42vh;
  transform: translate(0, -42vh);
`,Go=c`
  ${Uo}
  min-height: 62vh;
  transform: translate(0, -62vh);
  top: 100vh;
  top: 100dvh;
`,Ko=c`
  height: auto;
  min-height: 42vh;
  transform: translate(0, -42vh);
  transition: transform 750ms ease-out;
  overscroll-behavior: none;

  @media screen and (min-width: 768px) {
    min-height: 38vh;
    transform: translate(0, -38vh);
  }

  @media screen and (min-width: 1024px) {
    min-height: 30vh;
    transform: translate(0, -30vh);
  }
`,qo=c`
  overscroll-behavior: unset;
  position: absolute;
`,Jo=c`
  padding: 0;
  max-width: none;

  ${B.breakpoint.mediumMediaExtralarge} {
    max-width: none;
  }
`,Yo=c`
  height: 100vh;
  min-height: 100vh;
  top: 0;
  flex-grow: 1;
  border-top: none;
  transform: unset;

  @media screen and (min-width: 765px) {
    min-height: 100%;
    top: 0;
    transform: unset;
  }
`,Xo=c`
  height: auto;
  min-height: 65vh;
  transform: translate(0, -65vh);
  transition: transform 750ms ease-out;
  overscroll-behavior: none;

  @media screen and (min-width: 375px) {
    min-height: 55vh;
    transform: translate(0, -55vh);
  }
`,Zo=c`
  height: auto;
  min-height: 85vh;
  transform: translate(0, -85vh);
  transition: transform 750ms ease-out;
  overscroll-behavior: none;

  @media screen and (min-width: 375px) {
    min-height: 80vh;
    transform: translate(0, -80vh);
  }

  @media screen and (min-width: 768px) {
    min-height: 60vh;
    transform: translate(0, -60vh);
  }
`,Qo=c`
  && {
    height: auto;
    transform: translate(0, -100%);
    transition: transform 750ms ease-out;
    overscroll-behavior: none;
    top: 100%;
    min-height: auto;
  }

  /*
   * showClass sets min-height: 50vh at >=765px, which inflates the gateway
   * height and positions it too high on tablet/desktop. Reinforce the
   * override at the same breakpoint so shortHeightClass always wins.
   */
  @media screen and (min-width: 765px) {
    && {
      min-height: auto;
      transform: translate(0, -100%);
    }
  }
`,$o=c`
  min-height: auto;
`,es=c`
  && {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    position: fixed;
    transform: translate(-50%, -50%);
    width: calc(100% - 32px);
    max-width: 394px;
    height: auto;
    min-height: unset;
    padding: 28px 0px 36px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: min(90vh, 100vh);
    max-height: min(90dvh, 100dvh);
    border-radius: 8px;
    background-color: ${B.color.white};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.22);
    transition: none;
  }

  @media screen and (min-width: 765px) {
    && {
      min-height: unset;
      transform: translate(-50%, -50%);
    }
  }
`,ts=c`
  && {
    width: calc(100% - 64px);
    max-width: 320px;
    padding: 24px 24px 32px;
    border-radius: 20px;
  }

  @media (max-width: 374px) {
    && {
      width: calc(100% - 40px);
      padding: 24px 16px 32px;
    }
  }
`,ns=c`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 420px;
  min-height: 364px;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;

  ${B.breakpoint.mediumMediaExtralarge} {
    max-width: ${B.breakpoint.mediaMaxWidth}px;
  }
`,rs=c`
  min-height: unset;
  max-width: none;
  overflow: visible;

  ${B.breakpoint.mediumMediaExtralarge} {
    max-width: none;
  }
`;c`
  aria-hidden: true;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,c`
  z-index: ${B.zIndex.interstitialModal};
`;var is=c`
  position: absolute !important;
  /* DropdownMenu within vi/src/shared/ShareButton/DesktopShareButton/styled.js uses a z-index of 199. */
  z-index: 198 !important;
  transform: unset;
  min-height: 0;
  box-shadow: 0 -1px 114px 114px #f6f6f8;
  padding: 24px 20px;
  background-color: #f6f6f8;

  @media screen and (min-width: 765px) {
    position: absolute !important;
    /* DropdownMenu within vi/src/shared/ShareButton/DesktopShareButton/styled.js uses a z-index of 199. */
    z-index: 198 !important;
    transform: unset;
    min-height: 0;
    box-shadow: 0 -1px 114px 114px #f6f6f8;
    padding: 24px 20px;
    background-color: #f6f6f8;
  }
`,as=c`
  border-radius: 12px;
  background: ${D.background.primary};
  box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.12);
`,os=c`
  && {
    top: 100vh;
    top: 100dvh;
    bottom: auto;
    min-height: unset;
    height: auto;
    transform: translate(0, -100%);
    max-height: min(90dvh, 100dvh);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: max(20px, env(safe-area-inset-bottom));
  }

  &&::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    && {
      max-height: min(90vh, 900px);
    }
  }
`,ss=c`
  overscroll-behavior: auto !important;
  touch-action: pan-y !important;
`,cs=c`
  min-height: unset;
  overflow: visible;
`,ls=c`
  && {
    padding: 0;
    min-height: unset;
    height: auto;
    transform: translate(0, -100%);

    top: 100vh;
    top: 100dvh;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    max-height: min(90vh, 100vh);
    max-height: min(90dvh, 100dvh);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: auto;
    touch-action: pan-y;
  }

  @media screen and (min-width: 765px) {
    && {
      min-height: unset;
      transform: translate(0, -100%);
      max-height: min(90vh, 900px);
    }
  }

  /* After the desktop block so short viewports win over min(90vh, 900px) on wide-but-short windows. */
  @media (max-height: 689px) {
    && {
      max-height: min(98vh, 100vh);
      max-height: min(98dvh, 100dvh);
    }
  }
`,us=c`
  min-height: unset !important;
  overflow: visible;
`;function ds(e){let t=(0,U.useRef)(!1),n=(0,U.useRef)(document.getElementById(`story`)||{style:{transition:``,transform:``}}),r=(0,U.useRef)(document.querySelector(`[data-testid=headline]`)||{offsetHeight:0,getBoundingClientRect:()=>({bottom:0})}),i=(0,U.useRef)(document.getElementById(`top-wrapper`)!==null);function a(){if(window.innerWidth<764||!window.innerHeight)return 0;let e=r.current.getBoundingClientRect().bottom+40;return window.innerHeight/2>e?0:window.innerHeight/2-e}function o(){i.current&&(window==null?void 0:window.AdSlot4)?.events&&(n.current.style.transition=`transform 750ms ease-out`,window.AdSlot4.events.subscribe({name:`AdRendered`,scope:`all`,callback:()=>{if(!t.current){t.current=!0;let e=a();e<0&&(n.current.style.transform=`translate(0px,  ${e}px)`)}}}))}return[e?o:()=>{}]}l();function J({unit:e,children:t,clientProps:n}){let{fullWidth:r=!0,fullHeight:i=!1,midHeight:a=e?.content?.midHeight,midHeightSale:s=e?.content?.midHeightSale,shortHeight:l=e?.content?.shortHeight,isStatic:u=e?.content?.static,isEmbedded:d=!1,className:f,distanceToTopOfSiteContent:p=0,hideTopper:m=e?.content?.hideTopper,darkStyle:h=e?.content?.darkStyle,convDownloadWallUxPt2Height:g=e?.content?.convDownloadWallUxPt2Height}=n,_=e?.component===W,v=e?.content?.dialogAriaLabel,y=e?.content?.dialogExitVerb??(_?`signing in`:void 0),[b,x]=(0,U.useState)(u),[S,C]=(0,U.useState)(!1),[w]=ds(e?.content?.animateHeadline);if((0,U.useEffect)(w,[w]),(0,U.useEffect)(()=>{u||(setTimeout(()=>x(!0),1),setTimeout(()=>C(!0),800))},[e?.content,u]),(0,U.useEffect)(()=>{if(!e?.canShow)return;let t=document.querySelectorAll(`[data-paywall-inert]`);if(t.length===0)return;let n=Array.from(t).map(e=>({target:e,prevInert:e.getAttribute(`inert`),prevAriaHidden:e.getAttribute(`aria-hidden`)}));return n.forEach(({target:e})=>{e.setAttribute(`inert`,``),e.setAttribute(`aria-hidden`,`true`)}),()=>{n.forEach(({target:e,prevInert:t,prevAriaHidden:n})=>{t===null?e.removeAttribute(`inert`):e.setAttribute(`inert`,t),n===null?e.removeAttribute(`aria-hidden`):e.setAttribute(`aria-hidden`,n)})}},[e?.canShow]),!e?.canShow)return null;let ee=c`
    top: ${p}px;
  `,te=d&&p>0,T=e?.campaign===`CONV_GAMES_SALE_EVERGREEN_245`,E=!!e?.content?.convDownloadWallUxPt2Height&&!g,D=T||E,ne=e?.campaign===`CONV_TA_INTL_NEWS_2STEP_PAYWALL`,re=e?.campaign===`CONV_FORMERS_2_STEP_PAYWALL`,ie=e?.campaign===`CONV_TA_INTL_PAYWALL_PAYMENT_METHODS_MESSAGING`,O=e?.campaign===`CONV_INTL_PAYWALL_ANNUAL_SALE_OFFER_2_STEP`,ae=!!e?.content?.centeredAuthModal;return U.createElement(`div`,{"data-testid":`onsite-messaging-unit-${um?.name}`,"data-campaign":e?.campaign,"data-audience":e?.audience},e?.content?.showGatewayBackdrop&&b?U.createElement(`div`,{className:Vo,"aria-hidden":`true`}):null,U.createElement(`div`,{"data-testid":`gateway-content`,id:`gateway-content`,role:`dialog`,"aria-modal":`true`,"aria-label":v??(_?`Create a free account or log in`:`Continue reading`),"aria-describedby":`gateway-exit-advisory`,tabIndex:-1,className:o(Ho,{[Wo]:b&&!e?.content?.newPaywallHeight,[Go]:b&&e?.content?.newPaywallHeight,[qo]:S&&!T,[Jo]:r,[Yo]:i,[Xo]:a&&b,[Zo]:s&&b,[Qo]:l&&b,[es]:ae&&b,[ts]:ae&&b&&!!e?.content?.roundedModal,[Ko]:g&&b&&!e?.content?.newPaywallHeight,[is]:te,[ee]:te,[ss]:g,[os]:D,[ls]:(ne||re||ie||O)&&b},f)},U.createElement(`p`,{id:`gateway-exit-advisory`,className:me},`To leave`,y?` without ${y}`:``,`, use your browser's Back button.`),U.createElement(`div`,{className:o(ns,{[Jo]:r,[Yo]:i,[$o]:l,[rs]:ae,[as]:te,[us]:ne||re||ie||O,[cs]:D})},!m&&U.createElement(Bo,{darkStyle:h}),t)))}var fs=e(a(),1),ps=U.forwardRef(({className:e,trackingObject:t,children:n,redirectUri:r,handleClick:i,isLoggedIn:a},o)=>{let{trackEvent:s}=(0,fs.useTracking)(),{selection:c}=m(),l=U.useRef(null),u=()=>{let e={event:`moduleInteraction`,eventData:{trigger:`module`,type:`ob_click`},module:{element:{url:r}},...t};s({...e,module:{...e.module,et_synced:c?.syncedAt??null}}),i&&i(),a&&l.current?l.current.submit():window!==void 0&&(window==null?void 0:window.location)!==void 0&&window.location?.href&&(window.location.href=r)};return U.createElement(U.Fragment,null,U.createElement(z,{ref:o,component:`a`,href:r,onClick:e=>{e.preventDefault(),u()},className:e,testId:`magic-link-button`},n),U.createElement(ue,{ref:l,redirectUri:r}))});ps.displayName=`MagicLinkButton`;function ms({className:e,fill:t,direction:n}){let r;return n===`up`&&(r=`rotate(-90 3.5 6.5)`),n===`down`&&(r=`rotate(90 3.5 6.5)`),U.createElement(`svg`,{width:`16`,height:`16`,viewBox:`0 0 9 16`,version:`1.1`,className:e},U.createElement(`g`,{id:`Canvas`,transform:`translate(-8250 -1500)`},U.createElement(`g`,{id:`Vector`},U.createElement(`use`,{xlinkHref:`#path0_stroke`,transform:`translate(8251 1501.5)`,fill:t}))),U.createElement(`defs`,null,U.createElement(`path`,{id:`path0_stroke`,d:`M 6.5 6.5L 7.20711 7.20711L 7.91421 6.5L 7.20711 5.79289L 6.5 6.5ZM -0.707107 0.707107L 5.79289 7.20711L 7.20711 5.79289L 0.707107 -0.707107L -0.707107 0.707107ZM 5.79289 5.79289L -0.707107 12.2929L 0.707107 13.7071L 7.20711 7.20711L 5.79289 5.79289Z`,transform:r})))}ms.propTypes={className:et.default.string,fill:et.default.string,direction:et.default.oneOf([`up`,`down`,`right`,`left`])},ms.defaultProps={className:void 0,fill:`#111`,direction:`right`},l();function hs({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1);if(!t?.canShow)return null;let i=``;if(window!==void 0&&(window==null?void 0:window.location)!==void 0){let e=new URL(window.location?.href);e.searchParams.append(`open-in-app`,`logged-out-regiwall`),i=te(e.toString())}return U.createElement(J,{unit:t,clientProps:{...e,className:o({[xa]:n})}},U.createElement(`div`,{className:Sa},n&&U.createElement(de,{handleSuccess:e=>{if(t?.content?.preventRedirect){window.location.reload();return}e?.props?.redirectUri&&(window.location.href=e?.props?.redirectUri)},lireDisplayOverride:t?.content?.display,isEmbedded:!0}),!n&&U.createElement(`div`,{className:wa},U.createElement(`p`,{className:Da},`Log in to continue reading.`),U.createElement(`p`,{className:Ea},`Switch to the app to stay logged in and read without interruptions.`),U.createElement(ps,{redirectUri:i,isLoggedIn:!1,trackingObject:{eventData:{action:`click`,trigger:`module`,pageType:`article`},module:{context:`standard`,region:`regiwall`,name:`known-sub-regiwall`,label:`known-sub-regiwall`,element:{name:`log-into-app`,label:`clicked-log-into-app`}}},className:Oa},U.createElement(`span`,null,`Switch to the app`),` `,U.createElement(ms,{className:Ca,fill:`#f8f8f8`})),U.createElement(`p`,{className:Ea},U.createElement(z,{testId:`options-button`,className:Ta,onClick:e=>{r(!0),t?.trackInteraction(e,{extraProps:{eventData:{action:`click`,trigger:`module`,pageType:`article`},module:{context:`standard`,region:`regiwall`,name:`known-sub-regiwall`,label:`known-sub-regiwall`,element:{name:`continue-on-web`,label:`clicked-continue-on-web`}}}})}},`Continue on web instead`)))))}var gs=N(hs);l();var _s=c`
  transform: translate(0, -42vh);
  overflow: visible;
`,vs=c`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`,ys=c`
  overflow: visible;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -52%);
`,bs=c`
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 16px auto 64px;
`,xs=c`
  display: inline-block;
  color: ${R.veryDarkGray};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${R.gray};
`,Ss=c`
  display: block;
  margin: 0;
`;function Cs(){return U.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`61`,height:`70`,viewBox:`0 0 61 70`,fill:`none`},U.createElement(`rect`,{x:`4`,y:`18`,width:`53`,height:`52`,rx:`8`,fill:`#FFED5B`}),U.createElement(`path`,{d:`M42.8748 48.4062C41.8314 51.2238 39.9115 53.401 37.1569 54.5537V48.4062L40.4541 45.3752L37.1569 42.3868V38.1604C40.1619 37.947 42.2487 35.6843 42.2487 32.9094C42.2487 29.2807 38.8681 28 36.9482 28C36.5309 28 36.0718 28 35.404 28.1708V28.3415C35.6544 28.3415 36.03 28.2988 36.1553 28.2988C37.4908 28.2988 38.4925 28.9392 38.4925 30.1772C38.4925 31.1164 37.7412 32.0556 36.4057 32.0556C33.1085 32.0556 29.227 29.3234 25.0117 29.3234C21.2554 29.3234 18.6678 32.1837 18.6678 35.0867C18.6678 37.9897 20.2955 38.8862 22.0067 39.5265L22.0484 39.3558C21.5058 39.0142 21.1302 38.4166 21.1302 37.4774C21.1302 36.1966 22.2988 35.1294 23.7596 35.1294C27.3072 35.1294 33.025 38.1604 36.5726 38.1604H36.9065V42.4295L33.6093 45.3752L36.9065 48.4062V54.6391C35.5292 55.1514 34.1102 55.3648 32.6494 55.3648C27.1402 55.3648 23.6344 51.9495 23.6344 46.2717C23.6344 44.9056 23.8013 43.5821 24.177 42.3014L26.9316 41.0634V53.6145L32.5242 51.0957V38.2458L24.3022 42.0026C25.1369 39.5265 26.8481 37.7335 28.8932 36.7089L28.8514 36.5809C23.3422 37.8189 18 42.088 18 48.4916C18 55.8771 24.0935 61 31.1886 61C38.7012 61 42.9583 55.8771 43 48.4062H42.8748Z`,fill:`black`}),U.createElement(`g`,{filter:`url(#filter0_d_4769_10212)`},U.createElement(`path`,{d:`M28.2744 8.38613C28.2612 8.27391 28.2705 8.15101 28.1372 8.06685C28.0685 8.02544 28.021 7.9346 27.9854 7.85579C27.8349 7.52449 27.5657 7.30407 27.2938 7.089C27.1935 7.01018 27.0971 6.93671 27.0377 6.82049C26.9744 6.69492 26.9005 6.58271 26.7447 6.54797C26.6933 6.53595 26.651 6.47049 26.6088 6.42641C26.5573 6.37297 26.5177 6.27946 26.4583 6.26477C26.296 6.22336 26.2181 6.09111 26.106 5.99359C25.9925 5.89473 25.8724 5.81057 25.7285 5.75046C25.5926 5.69435 25.4632 5.60619 25.351 5.50733C25.256 5.42317 25.1557 5.35772 25.0475 5.29226C24.7795 5.13062 24.5314 4.93825 24.2318 4.83272C24.1738 4.81268 24.1289 4.75925 24.0748 4.72719C23.9995 4.68177 23.9256 4.63501 23.8451 4.60295C23.5086 4.46669 23.1707 4.33578 22.8315 4.2062C22.7418 4.17147 22.6256 4.17948 22.557 4.12338C22.4342 4.02319 22.3168 3.95372 22.1544 3.95372C22.0858 3.95372 22.004 3.92032 21.9499 3.87624C21.8179 3.76536 21.6635 3.7333 21.5024 3.70258C21.3823 3.67987 21.2636 3.63712 21.1461 3.59972C21.0511 3.57033 20.96 3.51823 20.8623 3.50487C20.5786 3.46479 20.3001 3.40468 20.0256 3.32319C19.9556 3.30315 19.8659 3.2751 19.8091 3.30182C19.689 3.3606 19.5914 3.32052 19.4858 3.27911C19.338 3.22167 18.7348 3.11747 18.6068 3.15888C18.4167 3.22167 18.2346 3.18426 18.0485 3.1709C17.9614 3.16422 17.873 3.14552 17.7885 3.15754C17.2949 3.22567 16.8026 3.29514 16.3195 3.4167C16.2232 3.44075 16.1189 3.46346 16.0384 3.51689C15.9421 3.58101 15.8325 3.60773 15.7388 3.65983C15.4815 3.80143 15.1753 3.8709 14.9997 4.14609C14.9628 4.20486 14.8849 4.24227 14.8202 4.27967C14.6975 4.35314 14.6117 4.46135 14.5404 4.58024C14.4414 4.74188 14.3517 4.90886 14.2567 5.07184C13.9426 5.60352 13.9558 6.1766 14.1379 6.72698C14.3319 7.31075 14.7239 7.76495 15.2188 8.14033C15.5013 8.3554 15.8075 8.52238 16.1018 8.71074C16.5056 8.96856 16.9662 9.11017 17.4176 9.2531C17.8954 9.40406 18.3837 9.5136 18.8721 9.62447C19.2865 9.71798 19.7062 9.79814 20.1259 9.86493C20.5456 9.93172 20.964 10.0079 21.3889 10.0439C21.7361 10.0747 22.0752 10.1735 22.4303 10.1628C22.6929 10.1561 22.9569 10.1735 23.2195 10.1815C23.4822 10.1895 23.7501 10.2323 24.0075 10.1989C24.4047 10.1468 24.8033 10.1334 25.2006 10.0773C25.6559 10.0132 26.1099 9.94375 26.5626 9.86359C26.6365 9.85023 26.721 9.84489 26.7777 9.80348C26.886 9.726 27.0061 9.70195 27.1301 9.68192C27.336 9.64986 27.4825 9.54833 27.5195 9.33058C27.5551 9.12887 27.6726 8.98727 27.8336 8.88574C27.9049 8.84032 27.9339 8.77887 27.9788 8.72009C28.0606 8.61322 28.1569 8.51704 28.2771 8.38345M31.8023 8.41685C31.896 8.74547 32.1771 8.89108 32.3315 9.16627C32.2932 9.40005 32.3513 9.6552 32.3606 9.91436C32.3698 10.1602 32.4292 10.2296 32.6615 10.2617C32.7974 10.2804 32.9492 10.263 33.0667 10.3178C33.2 10.3806 33.3267 10.3859 33.4652 10.3926C33.7134 10.4046 33.9641 10.4126 34.2057 10.4607C34.364 10.4915 34.5343 10.5088 34.6755 10.5676C34.8431 10.6397 34.9923 10.5582 35.152 10.5876C35.4529 10.6437 35.7564 10.7546 36.0679 10.6384C36.0785 10.6344 36.0956 10.6357 36.1049 10.6424C36.283 10.7533 36.4705 10.6798 36.6552 10.6691C36.9047 10.6531 37.1568 10.609 37.4022 10.6357C37.7177 10.6691 38.0265 10.6531 38.3393 10.6357C38.6891 10.6157 39.0322 10.5021 39.3872 10.5449C39.4097 10.5476 39.4361 10.5369 39.4598 10.5275C39.6499 10.4621 39.8426 10.3899 40.0445 10.4113C40.2755 10.4353 40.4391 10.2537 40.6529 10.2363C40.6648 10.2363 40.678 10.2296 40.6899 10.2283C40.872 10.2069 41.0278 10.0626 41.2244 10.1107C41.3736 9.94642 41.5861 9.97581 41.7735 9.92504C41.8685 9.89966 41.9543 9.82485 42.0506 9.80882C42.3634 9.75673 42.6327 9.60176 42.894 9.4428C43.0035 9.376 43.1038 9.29852 43.2292 9.29585C43.3982 9.29184 43.4734 9.19165 43.5117 9.0407C43.6753 9.03536 43.8245 9.01665 43.938 8.8991C44.2336 8.59452 44.5649 8.32601 44.8473 8.00808C44.9225 7.92392 45.0057 7.84243 45.0638 7.74625C45.2472 7.44568 45.3858 7.11839 45.622 6.85255C45.6379 6.83518 45.6392 6.80446 45.6537 6.78442C45.9177 6.39168 45.9494 5.90008 46.1816 5.49397C46.2001 5.46191 46.2094 5.41917 46.2054 5.3831C46.1869 5.18272 46.2978 4.98902 46.2265 4.78864C46.3057 4.39322 46.1355 4.03922 46.0246 3.68254C45.9599 3.47414 45.8319 3.26308 45.6788 3.10678C45.3554 2.77549 45.0163 2.45621 44.5675 2.28522C44.4342 2.23446 44.3088 2.2024 44.1676 2.20507C43.8324 2.21309 43.4958 2.22377 43.1619 2.17435C43.1144 2.16767 43.0629 2.17969 43.0154 2.1837C42.8174 2.20507 42.6155 2.26251 42.4228 2.2398C42.2103 2.21442 42.0282 2.25049 41.8408 2.33331C41.7497 2.37339 41.6375 2.42682 41.5531 2.40545C41.3353 2.34934 41.1677 2.47892 40.9776 2.52034C40.8694 2.54438 40.7638 2.58312 40.6569 2.61117C40.4154 2.6753 40.1673 2.71804 39.9336 2.8022C39.6644 2.89972 39.4084 3.03331 39.147 3.15086C39.0546 3.19228 38.9662 3.2417 38.8699 3.26842C38.7221 3.3085 38.5874 3.35392 38.4858 3.48617C38.4383 3.54762 38.3367 3.56765 38.2575 3.60105C38.1902 3.63044 38.1202 3.64914 38.0529 3.6772C37.7533 3.80277 37.5052 4.02051 37.2161 4.16479C36.9509 4.29704 36.7027 4.46269 36.4493 4.61765C36.258 4.73654 36.0494 4.83138 35.8686 4.95428C35.4793 5.22012 35.119 5.53405 34.7494 5.83061C34.4168 6.09779 34.0869 6.36763 33.7582 6.63881C33.5946 6.77373 33.4322 6.914 33.2739 7.05694C33.0033 7.3014 32.7261 7.53384 32.4371 7.7556C32.2022 7.9346 31.9884 8.15636 31.8036 8.41418M32.8159 11.6203C32.7842 11.7004 32.7855 11.7832 32.8779 11.8059C33.3359 11.9235 33.7477 12.1787 34.2189 12.2655C34.4366 12.3056 34.6372 12.4325 34.8722 12.4111C34.884 12.4111 34.8972 12.4164 34.9078 12.4218C35.3011 12.6328 35.7578 12.6248 36.1656 12.7891C36.2791 12.8359 36.4097 12.8359 36.5325 12.8639C36.7001 12.9014 36.8664 12.916 37.034 12.9909C37.2452 13.0844 37.488 13.1097 37.7203 13.1458C37.9407 13.1792 38.1664 13.1846 38.3895 13.2073C38.4647 13.2139 38.5465 13.2166 38.6099 13.25C38.8897 13.3956 39.1906 13.3756 39.4902 13.3769C39.5641 13.3769 39.6367 13.397 39.7093 13.4117C39.9653 13.4624 40.22 13.5319 40.4853 13.5252C40.5592 13.5225 40.6331 13.5426 40.7071 13.5559C40.744 13.5626 40.7862 13.5973 40.8126 13.5867C41.0357 13.4891 41.2521 13.6187 41.4739 13.604C41.6969 13.5907 41.9186 13.6548 42.1457 13.6254C42.2658 13.6094 42.3938 13.6641 42.5178 13.6615C42.9666 13.6521 43.414 13.7109 43.8654 13.6548C44.2085 13.6134 44.5609 13.6508 44.9093 13.6521C44.9727 13.6521 45.04 13.6655 45.0968 13.6481C45.4716 13.5305 45.8583 13.5452 46.2437 13.5305C46.3545 13.5252 46.4654 13.4905 46.5763 13.4664C47.0158 13.3716 47.4777 13.4103 47.9027 13.23C48.2326 13.254 48.5296 13.071 48.8595 13.0723C48.9796 13.0723 49.0971 13.0002 49.2185 12.9708C49.6646 12.8586 50.1107 12.7464 50.5489 12.6008C50.7838 12.5233 51.0333 12.4832 51.2629 12.3897C51.6549 12.2294 52.068 12.1266 52.4428 11.9208C52.4838 11.8981 52.5352 11.8928 52.5814 11.8781C52.8084 11.8046 53.0328 11.7285 53.2163 11.5628C53.2611 11.5227 53.3232 11.5 53.3759 11.4666C53.5541 11.3491 53.7349 11.2355 53.9078 11.11C54.09 10.9764 54.2655 10.8321 54.4397 10.6878C54.507 10.6331 54.5638 10.5636 54.6245 10.4995C54.709 10.41 54.8185 10.3338 54.87 10.2269C54.932 10.096 55.0587 10.1147 55.1445 10.0479C55.1933 10.0092 55.2672 9.98783 55.2963 9.9384C55.4428 9.69394 55.6883 9.56035 55.8928 9.38135C55.9865 9.29986 56.1106 9.24776 56.1066 9.09013C56.1066 9.0594 56.1436 9.00597 56.1687 9.00196C56.3574 8.97658 56.4392 8.79624 56.5871 8.71475C56.7468 8.62658 56.851 8.48632 56.9421 8.33803C56.9883 8.26189 57.0318 8.19643 57.1057 8.14166C57.2892 8.00674 57.4172 7.8264 57.5162 7.618C57.6178 7.40026 57.7419 7.19453 57.8594 6.9848C58.0191 6.7016 58.3015 6.63213 58.5853 6.58671C58.7727 6.55599 58.9271 6.6829 58.9772 6.86591C58.9904 6.914 59.005 6.96744 58.9984 7.01553C58.968 7.25331 58.9522 7.4951 58.8888 7.72487C58.8426 7.89052 58.7186 8.03346 58.6512 8.19643C58.5892 8.34605 58.5641 8.5117 58.51 8.66532C58.4863 8.73345 58.4269 8.78822 58.3833 8.84967C58.3543 8.88975 58.2962 8.9365 58.3028 8.96723C58.3437 9.13955 58.2078 9.21703 58.1299 9.3239C58.0045 9.49623 57.8792 9.66856 57.7406 9.82886C57.5848 10.0079 57.4199 10.1682 57.206 10.2911C56.9724 10.4247 56.7824 10.6344 56.5712 10.8094C56.3904 10.9603 56.2017 11.1006 55.9892 11.2048C55.9113 11.2422 55.84 11.2943 55.7688 11.3437C55.5418 11.5027 55.3174 11.663 55.0917 11.822C54.9531 11.9195 54.8462 12.0571 54.6733 12.1159C54.4978 12.176 54.3394 12.2855 54.1705 12.3683C54.0134 12.4458 53.8537 12.5153 53.6953 12.5928C53.5607 12.6582 53.4327 12.7397 53.2941 12.7945C53.0632 12.8867 52.8256 12.9668 52.5893 13.047C52.365 13.1231 52.1393 13.1979 51.9136 13.2687C51.6523 13.3502 51.4213 13.5332 51.1309 13.5185C50.8841 13.6508 50.6083 13.6788 50.3443 13.7536C50.12 13.8178 49.8745 13.8271 49.6726 13.97C49.6462 13.9887 49.5986 13.9901 49.5656 13.9821C49.435 13.9527 49.3202 14.0088 49.2014 14.0422C49.1063 14.0689 49.0126 14.0756 48.911 14.0769C48.7408 14.0809 48.5718 14.1517 48.4003 14.1865C48.1561 14.2372 47.9106 14.2826 47.6651 14.3294C47.5661 14.3481 47.4671 14.3628 47.3682 14.3815C47.2824 14.3975 47.1966 14.4269 47.1108 14.4349C46.439 14.5017 45.7659 14.5752 45.0928 14.626C44.7061 14.6553 44.3167 14.6594 43.93 14.6513C43.5051 14.6447 43.0814 14.7155 42.6564 14.6513C42.5231 14.6313 42.3964 14.6954 42.2512 14.6794C41.7919 14.6286 41.3287 14.5992 40.8668 14.5899C40.5064 14.5819 40.1488 14.5832 39.7951 14.483C39.6538 14.4429 39.4994 14.4416 39.3503 14.4349C38.9755 14.4176 38.6086 14.3521 38.2364 14.304C37.8761 14.2573 37.525 14.1771 37.17 14.109C36.9495 14.0676 36.7305 13.9941 36.5087 13.9794C36.0072 13.9447 35.5307 13.8071 35.053 13.6655C34.7903 13.588 34.5343 13.4758 34.2545 13.4718C33.7371 13.258 33.167 13.2019 32.6681 12.9294C32.6047 12.8947 32.5229 12.8973 32.4516 12.876C32.2853 12.8239 32.119 12.7838 31.9633 12.6903C31.793 12.5901 31.5858 12.5527 31.4169 12.4498C31.2176 12.3269 31.0025 12.2989 30.7596 12.2615C30.6514 12.3924 30.4877 12.4432 30.3135 12.4699C29.9928 12.518 29.6721 12.5286 29.358 12.4231C29.3342 12.4151 29.3065 12.3897 29.2907 12.3977C29.0188 12.5046 28.8472 12.3109 28.6519 12.1853C28.6004 12.1519 28.5423 12.1279 28.4711 12.0905C28.3061 12.2241 28.1332 12.343 27.9194 12.3817C27.8653 12.3911 27.8125 12.4472 27.7716 12.4926C27.6924 12.5821 27.596 12.6382 27.4799 12.6515C27.3479 12.6676 27.2463 12.733 27.1552 12.8279C27.1117 12.872 27.0589 12.9254 27.0034 12.9348C26.6497 12.9855 26.3765 13.2393 26.0294 13.3168C25.8288 13.3609 25.6493 13.4972 25.4606 13.592C25.417 13.6147 25.3669 13.6548 25.3259 13.6481C25.0646 13.6 24.8627 13.751 24.666 13.8712C24.4747 13.9901 24.278 14.0435 24.0642 14.0462C23.9481 14.0475 23.8359 14.0435 23.7409 14.1197C23.6168 14.2185 23.469 14.2506 23.3185 14.2573C23.0889 14.2679 22.883 14.3668 22.6678 14.4283C22.524 14.4683 22.3828 14.5351 22.2376 14.5458C21.9235 14.5672 21.6146 14.6046 21.3164 14.7115C20.9692 14.837 20.6023 14.8424 20.2433 14.8664C19.9688 14.8865 19.6956 14.9158 19.4224 14.9466C19.202 14.9719 18.9776 14.9626 18.7533 14.9706C18.492 14.98 18.2306 15 17.9706 15C17.8347 15 17.6948 14.9412 17.5641 14.9613C17.3239 14.9973 17.0969 14.9773 16.8646 14.9212C16.796 14.9038 16.7155 14.9319 16.6416 14.9372C16.5927 14.9412 16.5294 14.9599 16.4964 14.9372C16.3552 14.8424 16.2021 14.8744 16.0556 14.8851C15.818 14.9038 15.5897 14.8531 15.3587 14.8116C15.137 14.7716 14.9153 14.7288 14.6948 14.6861C14.5101 14.65 14.3253 14.6153 14.1418 14.5739C14.0336 14.5498 13.928 14.5111 13.8211 14.483C13.7248 14.459 13.6284 14.4323 13.5308 14.4229C13.3935 14.4109 13.2589 14.4055 13.1335 14.3294C13.0728 14.2933 12.9923 14.2907 12.9197 14.276C12.859 14.2639 12.7877 14.2706 12.7376 14.2412C12.3997 14.0408 12.0196 13.966 11.6566 13.8391C11.3531 13.7336 11.031 13.6775 10.7486 13.5012C10.6377 13.4317 10.4807 13.441 10.3566 13.3889C10.057 13.2634 9.77194 13.1017 9.45519 13.0149C9.34828 12.9855 9.25062 12.9187 9.15427 12.8599C8.78076 12.6288 8.3769 12.4552 7.99283 12.2454C7.79882 12.1399 7.58369 12.0638 7.42003 11.9035C7.3844 11.8687 7.34085 11.8327 7.29597 11.8206C7.01749 11.7512 6.81556 11.5561 6.59251 11.3932C6.44205 11.2836 6.29687 11.1647 6.11606 11.0926C5.99728 11.0445 5.91017 10.9136 5.81118 10.8187C5.74783 10.7586 5.69768 10.6678 5.62377 10.6397C5.41392 10.5609 5.2793 10.4073 5.14072 10.243C5.03117 10.1121 4.93747 9.96779 4.76853 9.88363C4.62863 9.8155 4.5732 9.62314 4.4069 9.56569C4.36335 9.551 4.31715 9.50425 4.30132 9.4615C4.22609 9.25177 4.02019 9.14089 3.92913 8.94452C3.90801 8.90043 3.87634 8.85234 3.83674 8.82696C3.57278 8.66131 3.421 8.39013 3.22303 8.16437C2.74393 7.618 2.41266 6.97946 2.12362 6.31687C2.05895 6.16859 2.01276 6.00294 2.00088 5.84264C1.98504 5.61687 2.18565 5.50466 2.39022 5.60485C2.41266 5.61554 2.43114 5.6329 2.45226 5.64626C2.80069 5.8934 3.161 6.12584 3.43288 6.46381C3.58202 6.6495 3.79979 6.77774 3.88425 7.01553C4.16141 7.18385 4.2934 7.48308 4.49797 7.71686C4.69594 7.94395 4.87807 8.18575 5.08264 8.40616C5.30437 8.64395 5.5459 8.86437 5.77951 9.09146C5.93128 9.23974 6.06987 9.39871 6.25992 9.50825C6.37474 9.57505 6.45129 9.70463 6.56084 9.78611C6.89079 10.0346 7.22338 10.2804 7.56653 10.5088C8.10106 10.8628 8.67914 11.1327 9.24138 11.4292C9.57925 11.6069 9.9224 11.7806 10.2906 11.9061C10.5929 12.009 10.8991 12.1159 11.1907 12.2401C11.584 12.4071 11.9879 12.5353 12.3891 12.6783C12.4815 12.7117 12.5831 12.717 12.6795 12.737C12.7389 12.7477 12.8049 12.7491 12.8577 12.7758C13.1863 12.9374 13.5295 13.047 13.8924 13.0924C13.9043 13.0937 13.9175 13.0937 13.9294 13.0977C14.163 13.1872 14.4018 13.262 14.6553 13.266C15.0459 13.2727 15.4009 13.4718 15.7916 13.4758C15.9038 13.4771 16.0173 13.4825 16.1295 13.4825C16.1796 13.4825 16.2324 13.4571 16.2786 13.4691C16.6587 13.5653 17.0507 13.4958 17.4335 13.5479C17.6816 13.5826 17.9297 13.588 18.1805 13.5493C18.3639 13.5199 18.5487 13.5573 18.7374 13.5359C19.2574 13.4771 19.7788 13.429 20.2922 13.3248C20.4994 13.2834 20.7158 13.2847 20.9257 13.2554C21.1857 13.2193 21.4497 13.1926 21.7017 13.1244C21.9169 13.0683 22.1175 12.9588 22.3247 12.8733C22.3828 12.8493 22.4488 12.7905 22.4949 12.8038C22.7114 12.868 22.879 12.737 23.0651 12.6796C23.1483 12.6542 23.2354 12.6061 23.3185 12.6101C23.5059 12.6182 23.6537 12.5193 23.8121 12.4498C23.9362 12.3951 24.0431 12.2668 24.1658 12.2535C24.2939 12.2401 24.406 12.1947 24.5235 12.1613C24.5935 12.1412 24.6713 12.1185 24.7241 12.0718C24.8284 11.9809 24.9392 11.9516 25.0686 11.9769C25.1676 11.997 25.2362 11.9449 25.3062 11.8901C25.3642 11.8447 25.4197 11.7926 25.4843 11.7592C25.6731 11.6643 25.8882 11.6109 26.0202 11.4226C26.2261 11.3972 26.3053 11.1981 26.4623 11.118C26.4306 11.0178 26.362 11.0004 26.3052 11.0218C26.0875 11.1046 25.8658 11.0806 25.6414 11.0739C25.4197 11.0672 25.1966 11.11 24.9736 11.1166C24.6225 11.1273 24.2701 11.1273 23.919 11.1287C23.857 11.1287 23.795 11.1166 23.7329 11.1086C23.5587 11.0886 23.3832 11.0445 23.2103 11.0552C22.6929 11.0846 22.1888 10.971 21.6833 10.9016C21.3256 10.8521 20.9653 10.8027 20.6089 10.7439C20.2882 10.6918 19.9715 10.617 19.6534 10.5529C19.433 10.5075 19.2086 10.4727 18.9895 10.4166C18.4933 10.2897 17.9917 10.1802 17.4968 10.0479C17.2104 9.9718 16.9187 9.90768 16.6455 9.79546C16.2047 9.61512 15.756 9.45482 15.36 9.17696C15.1647 9.0407 14.9562 8.92314 14.7542 8.7949C14.1999 8.44357 13.8013 7.94128 13.4608 7.39224C13.2655 7.0743 13.1982 6.70561 13.1639 6.33824C13.1309 5.98691 13.1111 5.6289 13.2153 5.28024C13.2338 5.22012 13.2417 5.15466 13.2404 5.09188C13.2325 4.89016 13.3315 4.72986 13.4305 4.56822C13.4951 4.46001 13.5624 4.35181 13.6192 4.2396C13.6865 4.10601 13.7406 3.96574 13.8766 3.88025C13.928 3.84685 13.9703 3.79342 14.0059 3.74265C14.2923 3.32586 14.6882 3.04934 15.1238 2.81556C15.3006 2.72205 15.4788 2.63388 15.657 2.54438C15.9289 2.40946 16.2232 2.37072 16.5004 2.26786C16.7551 2.17435 17.0296 2.12091 17.2988 2.09286C17.6723 2.05545 18.0432 2.00469 18.4141 1.96328C18.5989 1.9419 18.7876 1.95393 18.9724 1.96729C19.1717 1.98332 19.3683 1.97931 19.5689 1.97129C19.7893 1.96194 20.0124 2.02874 20.2328 2.07015C20.3291 2.08885 20.4228 2.14095 20.5245 2.08751C20.535 2.08217 20.5482 2.0795 20.5601 2.07816C20.5839 2.07549 20.6155 2.06614 20.6327 2.07816C20.8663 2.2358 21.154 2.10755 21.3942 2.22644C21.4602 2.25984 21.5354 2.28255 21.608 2.28789C21.7954 2.30125 21.9868 2.28389 22.1373 2.4335C22.1531 2.44953 22.1848 2.45488 22.2085 2.45354C22.359 2.45354 22.5095 2.46156 22.6375 2.5564C22.8236 2.52167 22.9674 2.63522 23.1285 2.69133C23.5059 2.82358 23.8847 2.95048 24.2622 3.08274C24.3189 3.10277 24.373 3.14285 24.4166 3.1856C24.5829 3.35124 24.7637 3.47281 25.0158 3.44609C25.0699 3.44075 25.1359 3.47682 25.1874 3.50888C25.4856 3.69323 25.78 3.88158 26.0756 4.0686C26.1073 4.08864 26.135 4.11803 26.1693 4.13273C26.3858 4.23158 26.6207 4.29971 26.8134 4.43196C27.0061 4.56421 27.1697 4.74322 27.3717 4.87146C27.4667 4.93291 27.5591 5.00238 27.6607 5.04913C27.8257 5.12394 27.9629 5.22547 28.0764 5.36707C28.1226 5.42585 28.1807 5.47661 28.2414 5.52069C28.314 5.57146 28.3721 5.62222 28.413 5.71038C28.4882 5.8747 28.6044 6.00428 28.7905 6.05637C28.9224 6.09378 28.9911 6.21267 29.0491 6.32088C29.1864 6.58137 29.3633 6.80446 29.5797 7.0035C29.6853 7.09969 29.7275 7.26533 29.8331 7.36152C29.9374 7.45636 30.0205 7.54987 30.0812 7.68079C30.1934 7.91857 30.3742 7.96132 30.6448 7.90521C30.8349 7.86647 30.9484 7.76495 31.0579 7.61399C31.1978 7.42163 31.3483 7.23728 31.5357 7.08098C31.6861 6.95541 31.8353 6.82049 31.9488 6.64549C32.0359 6.5119 32.1811 6.41706 32.2985 6.30217C32.6377 5.96821 32.9795 5.64092 33.3557 5.34703C33.6936 5.08386 34.0024 4.78463 34.3337 4.51478C34.6755 4.23692 35.0266 3.97109 35.3816 3.71193C35.6561 3.51155 35.9491 3.34056 36.225 3.14151C36.9218 2.63522 37.6847 2.24782 38.4713 1.91652C39.1998 1.60927 39.9468 1.34076 40.7361 1.23122C41.0344 1.18981 41.3195 1.09764 41.6217 1.06424C42.0599 1.01481 42.4967 1.00279 42.9362 1.00012C43.4919 0.996111 44.0356 1.09363 44.5649 1.24725C44.9569 1.3608 45.366 1.45565 45.696 1.73217C45.7699 1.79362 45.9032 1.78694 45.9678 1.85374C46.0919 1.98198 46.2265 2.07549 46.3875 2.15297C46.5288 2.21977 46.6449 2.34801 46.7597 2.46156C46.8481 2.54972 46.9247 2.64991 46.992 2.75545C47.0593 2.86232 47.1121 2.97453 47.219 3.05335C47.2652 3.08808 47.2956 3.15354 47.318 3.21098C47.4078 3.44743 47.483 3.68922 47.582 3.92166C47.6981 4.19551 47.7351 4.48807 47.7285 4.77127C47.7219 5.04379 47.776 5.31898 47.7087 5.59283C47.6427 5.86134 47.5859 6.13519 47.5331 6.40771C47.483 6.66553 47.3391 6.89263 47.3035 7.15312C47.3022 7.16514 47.3035 7.18385 47.2956 7.18919C47.1042 7.35216 47.0527 7.59663 46.963 7.8117C46.8402 8.10559 46.6066 8.32334 46.4746 8.61055C46.4245 8.72009 46.2991 8.78956 46.2278 8.89242C46.0576 9.14223 45.791 9.29451 45.6128 9.53497C45.5917 9.56436 45.5521 9.57905 45.5191 9.59508C45.3858 9.66455 45.2789 9.7634 45.1693 9.8676C45.0017 10.0266 44.8394 10.2229 44.5754 10.243C44.5319 10.247 44.4844 10.2871 44.45 10.3218C44.3313 10.442 44.2072 10.5395 44.0224 10.5142C43.9881 10.5088 43.9472 10.5262 43.9155 10.5449C43.7967 10.613 43.6872 10.7079 43.5605 10.7519C43.4338 10.796 43.2741 10.76 43.158 10.8187C42.861 10.9697 42.5508 11.0472 42.2275 11.0913C41.8949 11.2876 41.4871 11.2195 41.1505 11.4079C41.0898 11.4413 41.0027 11.4252 40.9288 11.4332C40.8417 11.4439 40.7467 11.4386 40.6701 11.4733C40.4009 11.5975 40.1145 11.6056 39.8307 11.6456C39.6499 11.671 39.4704 11.7044 39.2869 11.7218C39.1022 11.7392 38.9187 11.7886 38.7392 11.8407C38.6402 11.8701 38.5478 11.8968 38.4462 11.8634C38.4119 11.8527 38.3697 11.8474 38.3354 11.8567C37.8919 11.9783 37.4392 11.9168 36.9905 11.9222C36.9152 11.9222 36.8374 11.9195 36.7661 11.9409C36.5681 11.997 36.3768 12.037 36.1827 11.9302C36.1629 11.9195 36.1313 11.9182 36.1088 11.9248C35.7221 12.0424 35.3407 11.8848 34.954 11.9115C34.6161 11.9355 34.2888 11.8621 33.9588 11.7819C33.7107 11.7231 33.4481 11.647 33.1788 11.7258C33.0495 11.7645 32.9413 11.6697 32.8264 11.6176C32.738 11.6243 32.6496 11.6309 32.5466 11.639C32.6681 11.7565 32.742 11.6523 32.8278 11.6176`,fill:`#FFED5B`})),U.createElement(`defs`,null,U.createElement(`filter`,{id:`filter0_d_4769_10212`,x:`0`,y:`0`,width:`61`,height:`18`,filterUnits:`userSpaceOnUse`,colorInterpolationFilters:`sRGB`},U.createElement(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),U.createElement(`feColorMatrix`,{in:`SourceAlpha`,type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,result:`hardAlpha`}),U.createElement(`feOffset`,{dy:`1`}),U.createElement(`feGaussianBlur`,{stdDeviation:`1`}),U.createElement(`feComposite`,{in2:`hardAlpha`,operator:`out`}),U.createElement(`feColorMatrix`,{type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0`}),U.createElement(`feBlend`,{mode:`normal`,in2:`BackgroundImageFix`,result:`effect1_dropShadow_4769_10212`}),U.createElement(`feBlend`,{mode:`normal`,in:`SourceGraphic`,in2:`effect1_dropShadow_4769_10212`,result:`shape`}))))}l();var ws=T(`https://www.nytimes.com/subscription`).withCampaignID({defaultCampaignID:`7Q87L`}).toString();function Ts({clientProps:e,unit:t,forceLIREFallbackUsingProps:n,isEmbedded:r}){if(!t?.canShow)return null;let i=ws;return U.createElement(J,{unit:t,clientProps:{...e,className:o(_s)}},U.createElement(`div`,{className:ys},U.createElement(Cs,null)),U.createElement(`div`,{className:vs},U.createElement(de,{handleSuccess:e=>{if(t?.content?.preventRedirect){window.location.reload();return}e?.props?.redirectUri&&(window.location.href=e?.props?.redirectUri)},forceLIREFallbackUsingProps:n,lireDisplayOverride:t?.content?.display,isEmbedded:r}),U.createElement(`div`,{className:bs},U.createElement(`p`,{className:Ss},` Enjoy unlimited access to all of The Times. `),U.createElement(`p`,{className:Ss},U.createElement(z,{component:`a`,testId:`options-button`,className:xs,href:i,onClick:e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:j.Subscribe,label:`See subscription options`,url:i}}}})}},`See subscription options`))),` `))}var Es=N(Ts);l();var Ds=c`
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
`,Os=c`
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 16px auto 0;
`,ks=c`
  display: block;
  margin: 0;
`,As=c`
  display: inline-block;
  color: ${R.veryDarkGray};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${R.gray};
`,js=c`
  font-family: ${P.franklin};
  font-size: 20px;
  line-height: 120%;
  font-weight: ${F.medium};
  color: ${R.veryDarkGrey};
  text-align: center;
  margin: 0 auto;
  padding: 0 0 4px;
`,Ms=c`
  font-weight: ${F.bold};
`,Ns=c`
  border-bottom: 2px solid #286ed0;
  width: 70px;
  margin: 8px auto 12px;
`,Ps=c`
  font-family: ${P.franklin};
  font-size: 18px;
  line-height: 120%;
  font-weight: ${F.medium};
  color: ${R.veryDarkGrey};
  text-align: center;
  margin: 0 auto;
  padding: 0 0 24px 0;
`,Fs=c`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 8px 0 16px;
  padding: 12px 16px;
  background-color: ${R.veryDarkGrey};
  color: ${R.white};
  font-family: ${P.franklin};
  font-size: 16px;
  font-weight: ${F.semiBold};
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: ${R.black};
    color: ${R.white};
  }
`,Is=c`
  display: inline-block;
  min-height: 24px;
  font-family: ${P.franklin};
  font-size: 16px;
  font-weight: ${F.semiBold};
  line-height: 22px;
  color: ${R.veryDarkGrey};
  text-decoration: underline;
  text-underline-offset: 5px;
  padding-bottom: 8px;
`,Ls=`7JFJX`,Rs=`7Q87L`,zs=`response_type=cookie&client_id=oma&asset=RegiWallStandalone&application=Free_Experience&reload=3`,Bs=`regiwall_lire_always_free_modal_login`,Vs=`regiwall_lire_always_free_modal_register`,Hs=460,Us=(e,t)=>T(`${e}?${zs}&display=${t}`).withCampaignID({defaultCampaignID:Ls}).withRedirectUri({uri:x}).toString(),Ws=T(`https://www.nytimes.com/subscription`).withCampaignID({defaultCampaignID:Rs}).toString();function Gs({unit:e}){return U.createElement(`div`,{className:Os},U.createElement(`p`,{className:ks},`Enjoy unlimited access to all of The Times.`),U.createElement(`p`,{className:ks},U.createElement(z,{component:`a`,testId:`options-button`,className:As,href:Ws,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Subscribe,label:`See subscription options`,url:Ws}}}})}},`See subscription options`)))}function Ks({unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}){return U.createElement(de,{handleSuccess:e=>{e?.props?.redirectUri&&(window.location.href=e.props.redirectUri)},forceLIREFallbackUsingProps:t,lireDisplayOverride:e?.content?.display,initialHeightOverride:Hs,isEmbedded:n})}function qs({unit:e}){let{authHost:t}=m(),n=Us(`${t}/auth/login`,Bs),r=Us(`${t}/auth/register`,Vs);return U.createElement(U.Fragment,null,U.createElement(`h1`,{className:js},`This story is `,U.createElement(`span`,{className:Ms},`free to read.`)),U.createElement(`div`,{className:Ns,"aria-hidden":`true`}),U.createElement(`p`,{className:Ps},`Log in to continue.`),U.createElement(`a`,{className:Fs,"data-testid":`auth-login-modal-log-in`,href:n,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.LogIn,label:`Log in`,url:n}}}})}},`Log in`),U.createElement(`a`,{className:Is,"data-testid":`auth-login-modal-create-account`,href:r,onClick:t=>{e?.trackInteraction(t,{extraProps:{module:{element:{name:j.Register,label:`Create an account`,url:r}}}})}},`Create an account`))}function Js({unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}){if(!e?.canShow)return null;let r=e?.content?.authLoginModalVariant;return r!==`expanded`&&r!==`collapsed`?null:U.createElement(`div`,{className:Ds,"data-testid":`auth-login-modal`,"data-campaign":e.campaign,"data-audience":e.audience},r===`expanded`?U.createElement(Ks,{unit:e,forceLIREFallbackUsingProps:t,isEmbedded:n}):U.createElement(qs,{unit:e}),U.createElement(Gs,{unit:e}))}var Ys=N(Js);l(),c`
  transform: translate(0, -42vh);
`,c``;var Xs=c`
  padding: 32px 20px 48px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`,Zs=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 0 auto;
  width: 100%;
`,Qs=c`
  display: inline-block;
  border: transparent;
  background: none;
  color: ${R.black};
  font-family: ${P.franklin};
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${R.black};
`,$s=c`
  font-family: ${P.franklin};
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #121212;
  margin: 0;
  max-width: 14em;
`,ec=c`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 20px 0px 16px;
  gap: 12px;
  background-color: #f8f8f8;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  max-width: 300px;
  margin-top: 24px;
`,tc=c`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;
  list-style: none;
  margin: 0;
  flex: 1;
`,nc=c`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 2px;
  font-family: ${P.franklin};
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
  color: #121212;
  width: 100%;
`,rc=c`
  flex: 1;
  margin: 0;
  text-align: left;
`,ic=c`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`,ac=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 136px;
  border-width: 2.4px 2.4px 0px 2.4px;
  border-style: solid;
  border-color: #d9d7d7;
  border-radius: 16px 16px 0px 0px;
  background-color: #f0f0f0;
  flex-shrink: 0;
  background-image: ${e=>`url('${e.theme.assetUrl}/ConvDownloadAppRegiwall2511/download-app-device-image.gif')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,oc=c`
  display: block;
  margin: 0;
  margin-top: 12px;
`,sc=c`
  padding: 0.72rem 1rem;
  background-color: #121212;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #f8f8f8;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;l();function cc({unit:e,activeOffer:t,setActiveOffer:n,styles:r,hasBillingPeriod:i=!1,isSale:a=!1,groupLabelId:s=``}){let[c,l]=(0,U.useState)(!0),[u,d]=(0,U.useState)(!1),f=`monthly`,p=`annually`,m=e=>{e===p?(l(!1),d(!0)):(l(!0),d(!1))};return U.createElement(`div`,{className:r.containerClassName,role:`radiogroup`,"aria-labelledby":s||void 0},a&&U.createElement(fe,{text:U.createElement(H,null),classNamePillSpan:r.salePill,noMaxWidth:!0,isInlaid:!0}),U.createElement(`label`,{htmlFor:`monthly`,className:o(r.toggle,{[r.toggleSelected]:t===f})},U.createElement(`div`,{className:r.selector},U.createElement(`input`,{id:`monthly`,type:`radio`,name:`toggle`,checked:c,onChange:()=>{n(f),m(f)}}),U.createElement(`div`,{className:o(r.priceAndBilledAs)},U.createElement(`span`,{className:r.label,"data-testid":`aa-monthly-offer-copy`},!a&&e?.content?.monthly?.strikeThroughPriceDisplay?U.createElement(U.Fragment,null,U.createElement(`span`,{className:r.strikethroughExpression},U.createElement(`span`,{className:me},`Was `),e?.content?.monthly?.strikeThroughPriceDisplay),` `,U.createElement(`span`,{className:me},`Now `)):null,e?.content?.monthly?.priceDisplay,` `,a&&U.createElement(U.Fragment,null,`for your first `,U.createElement(`span`,{className:r.strikethroughExpression},`six months`),` `,`year`)),i&&U.createElement(`span`,{className:o(r.billedAs,r.billedAsContainerMonthly),"data-testid":`aa-monthly-billed-as-copy`},e?.content?.monthly?.billingPeriodText)))),U.createElement(`label`,{htmlFor:`annually`,className:o(r.toggle,{[r.toggleSelected]:t===p})},U.createElement(`div`,{className:r.selector},U.createElement(`input`,{id:`annually`,type:`radio`,name:`toggle`,checked:u,onChange:()=>{n(p),m(p)}}),U.createElement(`span`,{className:o(r.label),"data-testid":`aa-yearly-offer-copy`},e?.content?.annually?.strikeThroughPriceDisplay?U.createElement(U.Fragment,null,U.createElement(`span`,{className:r.strikethroughExpression},U.createElement(`span`,{className:me},`Was `),e?.content?.annually?.strikeThroughPriceDisplay),` `,U.createElement(`span`,{className:me},`Now `)):null,e?.content?.annually?.priceDisplay,U.createElement(`br`,null),i&&U.createElement(`span`,{className:o(r.billedAs,r.billedAsContainerAnnually),"data-testid":`aa-yearly-billed-as-copy`},e?.content?.annually?.billingPeriodText))),U.createElement(`span`,{className:r.pill},`Best value`)))}l();function lc({legalCopy:e,useArlTerms:t=!1,arlOfferTerms:n=``,surveyCampaign:r=`AA`,extraFootnote:i=null,offerDescription:a=``,hideLegal:s=!1,showPaymentIcons:c=!1,boldedCancel:l=!1,isSale:u=!1,modalStyling:d=!1,overrideClass:f=``,footerImage:p,styles:m}){let h=a||`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`;if(s)return U.createElement(`div`,{className:m.footerContainer},U.createElement(`div`,{className:m.footerContentNoLegal},U.createElement(Ve,{campaign:r,displayNone:!0}),U.createElement(Nt,null)));function g(e=`Your payment method will automatically be charged the stated monthly rate in advance every 4 weeks for a monthly subscription or the stated annual rate in advance once yearly for an annual subscription.`){return l?U.createElement(Le,{testId:`gateway-bolded-cancel`},U.createElement(`div`,{className:m.footerBillingText},l&&U.createElement(`span`,{className:m.boldCancel},`Cancel anytime.`),` `,U.createElement(Ie,{HtmlElement:`span`,content:e,extremeDangerAllowLinks:!0}))):U.createElement(Le,{testId:`gateway-standard`},U.createElement(`div`,{className:m.footerBillingText},U.createElement(Ie,{HtmlElement:`div`,content:e,extremeDangerAllowLinks:!0})))}return U.createElement(`div`,{className:o(m.footerContainer,f)},U.createElement(`div`,{className:o(m.footerContent,{[m.footerContentModal]:d})},p?U.createElement(`span`,{className:m.footerText},p()):null,i?U.createElement(U.Fragment,null,U.createElement(`div`,{className:m.footerText},i),U.createElement(`hr`,{className:m.longHorizontalRule})):null,U.createElement(`div`,{className:m.footerText},h),U.createElement(`hr`,{className:m.longHorizontalRule}),t?U.createElement(`div`,{className:m.footerBillingText},n,U.createElement(`br`,null),U.createElement(`br`,null),U.createElement(`span`,{className:o(m.arlText,{[m.arlTextLinkBold]:u})},U.createElement(`b`,null,`Automatic Renewal Terms: `),g(e))):g(e),c&&U.createElement(qt,null),U.createElement(`hr`,{className:m.longHorizontalRule}),U.createElement(Ve,{campaign:r}),U.createElement(Nt,null)))}l();function uc({unit:e,styles:t,getHeadlineComponent:n=()=>null,getSublineComponent:r=()=>null,getCancelText:i=()=>null,footerImage:a,inverseColors:s=!1,paymentOptionsCreditCardStylesOverride:c,applePayButtonStyle:l,isResubscribe:u=!1,isContinue:d=!1,parentCampaign:f}){let[p,m]=(0,U.useState)(`monthly`),h=e?.content?.multipleOffers||!1,g=e?.content?.useOfferDetailsContainer||!1,{unit:_}=A(He),v=u?`Resubscribe with`:void 0,y=()=>d?``:_?.content?.showApplePay||_?.content?.showPaypal||_?.content?.showGooglePay?`Resubscribe with card`:`Resubscribe now`,b=p&&h?e?.content?.[p]?.payflowUri:e?.content?.payflowUri,x=p&&h?e?.content?.[p]?.source:e?.content?.source,S=``,C=``;if(e?.content?.offerInfo&&!h){let t=e?.content?.offerInfo?.billingTerms,n=e?.content?.offerInfo?.cancellationTerms;S=`${(e?.content?.offerInfo)?.offerTerms[0]} ${(e?.content?.offerInfo)?.offerTerms[1]}`,C=t.concat(n).join(` `)}if(p&&h&&e?.content?.[p]?.offerInfo){let t=e?.content?.[p]?.offerInfo,n=t?.billingTerms,r=t?.cancellationTerms;S=`${t?.offerTerms[0]||``} ${t?.offerTerms[1]||``}`,C=n.concat(r).join(` `)}let w=_?.content?.showApplePay||_?.content?.showGooglePay;return U.createElement(U.Fragment,null,U.createElement(`div`,{className:t.paywallContainer},U.createElement(`div`,{className:o(t.offerContainer,{[t.paddingTopZero]:h})},g||U.createElement(`div`,{className:t.offerDetailsContainer},n(p,e?.content,u),r(p,e?.content,u),h&&!e?.content?.isSale?U.createElement(`div`,{id:`offer-selector-group-label`,className:t.offerUrgencyMessaging},`Welcome offers`):null),U.createElement(`div`,null,h?U.createElement(`div`,null,U.createElement(cc,{unit:e,activeOffer:p,setActiveOffer:m,styles:t,hasBillingPeriod:!0,isSale:e?.content?.isSale,groupLabelId:e?.content?.isSale?void 0:`offer-selector-group-label`})):null,U.createElement(`div`,{className:t.paymentOptionsV2Container},U.createElement(Ue,{offerInfo:h?e?.content?.[p]?.offerInfo:e?.content?.offerInfo,creditCardButtonLabel:u?y():``,applePayButtonLabel:v,paypalButtonLabel:v,googlePayButtonLabel:v,trackingOptions:{impression:{name:`gateway`,context:`paywall`,label:f??e?.campaign}},paymentOptionsCreditCardStylesOverride:c,payflowUri:b,source:x,inverseColors:s,applePayButtonStyle:l??(s?`white`:`black`)}))),i(p,e?.content),h&&e?.content?.country===`IN`&&U.createElement(Oe,null))),U.createElement(lc,{legalCopy:w?C:e?.content?.legal,useArlTerms:w,arlOfferTerms:S,offerDescription:e?.content?.offerDescription,extraFootnote:e?.content?.extraFootnote,showPaymentIcons:e?.content?.showPaymentIcons,boldedCancel:e?.content?.boldedCancel,surveyCampaign:e?.content?.surveyCampaign,styles:t,footerImage:a}))}var dc=N(uc),Y=`9XHYQ`,fc=e=>{let t=e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`});return t?.offerID?{subscriptionURI:`https://www.nytimes.com/subscription`,showPaymentMethods:!0,multipleOffers:!1,price:`${t.totalDueWeeklyShort} a week.`,totalDueShort:t.totalDueWeeklyShort,promoPriceDisplay:`${t.totalDueWeeklyShort} a week`,priceDisplay:`${t.totalDueWeeklyShort}/week`,strikeThroughPriceDisplay:t.fullPriceWeeklyShortNoCountryAbbreviation,strikeThroughPriceSubtext:t.fullPriceShort,billingPeriodText:`Billed as ${t.totalDueShort} every four weeks for your first six months, then ${t.fullPriceShort} thereafter.`,legal:t.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,offerInfo:t,uri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:Y}).withOfferID(t.offerID).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:Y}).withOfferID(t.offerID).toString(),source:`paywall`,isSale:!1,newPaywallHeight:!0,IsFormerNews:e.content?.IsFormerNews}:{}},pc=e=>{let t=e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`}),n=e?.offer?.annual||e?.offer?.allAccessAcquisitionAnnual,r=(t?.totalDueWeeklyShort)?.replace(`.00`,``)||`4.25`;return{subscriptionURI:`https://www.nytimes.com/subscription`,showPaymentMethods:!1,multipleOffers:!0,country:e.country,monthly:{offerInfo:t,price:`${r} a week.`,priceDisplay:`${r}/week`,totalDueShort:t?.totalDueWeeklyShort||r,strikeThroughPriceDisplay:t?.fullPriceWeeklyShortNoCountryAbbreviation||`$6.25/week`,strikeThroughPriceSubtext:t?.fullPriceShort||`$25.00`,billingPeriodText:`Billed as ${t?.totalDueMonthlyShort||`$17.00`} every four weeks for your first six months, then ${t?.fullPriceShort||`$25.00`} thereafter.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(t?.offerID||`default`).withCampaignID({defaultCampaignID:Y}).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(t?.offerID||`default`).withCampaignID({defaultCampaignID:Y}).toString(),source:`paywall`},annually:{offerInfo:n,price:`${n.totalDueAnnualShort} a year.`,priceDisplay:`${n.totalDueAnnualShort}/year`,totalDueShort:n.totalDueAnnualShort,strikeThroughPriceDisplay:n.fullPriceAnnualShortNoCountryAbbreviation,strikeThroughPriceSubtext:n.fullPriceShort,billingPeriodText:`Billed once for your first year, then ${n.fullPriceShort} thereafter.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(n.offerID).withCampaignID({defaultCampaignID:Y}).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(n.offerID).withCampaignID({defaultCampaignID:Y}).toString(),source:`paywall`},legal:e.offer.combinedOffers?.offerTerms||t?.offerTerms||`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,trackingLabel:`CONV_ALL_ACCESS_ACQUISITION`,isSale:!1,newPaywallHeight:!0,IsFormerNews:e.content?.IsFormerNews}},mc=e=>{let t=e?.offer?.allAccessSaleAcquisitionMonthly||e?.offer?.monthly;return{subscriptionURI:`https://www.nytimes.com/subscription`,showPaymentMethods:!0,multipleOffers:!1,headline:`Discover The Times with our best offer.`,headlineText:`Subscribe for ${t?.totalDueWeeklyShort||`$1.00`}/week for your first`,totalDueShort:t?.totalDueWeeklyShort,price:`${t?.totalDueWeeklyShort||`$1.00`} a week.`,strikeThroughPriceSubtext:t?.fullPriceShort||`$25.00`,priceDisplay:`year`,strikeThroughPriceDisplay:`six months`,billingPeriodText:`Billed as ${t?.totalDueMonthlyShort||`$4.00`} every four weeks, then ${t?.fullPriceShort||`$25.00`} thereafter.`,legal:t?.offerTerms||`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,trackingLabel:`CONV_ALL_ACCESS_ACQUISITION`,uri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:Y}).withOfferID(t?.offerID||`default`).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:Y}).withOfferID(t?.offerID||`default`).toString(),source:`paywall`,isSale:!0,offerInfo:t,newPaywallHeight:!0,IsFormerNews:e.content?.IsFormerNews}},hc=e=>{let t=e?.offer?.allAccessSaleAcquisitionMonthly||e?.offer?.monthly,n=e?.offer?.allAccessAcquisitionAnnual||e?.offer?.annual,r=t.totalDueWeeklyShort.replace(`.00`,``);return{subscriptionURI:`https://www.nytimes.com/subscription`,showPaymentMethods:!1,isSale:!0,multipleOffers:!0,country:e.country,headline:`Discover The Times with our best offer.`,monthly:{offerInfo:t,price:`${r} a week.`,priceDisplay:`${r}/week`,totalDueShort:t.totalDueWeeklyShort,strikeThroughPriceDisplay:t?.fullPriceWeeklyShortNoCountryAbbreviation||`$6.25/week`,strikeThroughPriceSubtext:t?.fullPriceShort,billingPeriodText:`Billed as ${t.totalDueMonthlyShort} every four weeks, then ${t.fullPriceShort} thereafter.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(t.offerID).withCampaignID({defaultCampaignID:Y}).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(t.offerID).withCampaignID({defaultCampaignID:Y}).toString(),source:`paywall`},annually:{price:`${n.totalDueAnnualShort} a year.`,priceDisplay:`${n.totalDueAnnualShort}/year`,totalDueShort:n.totalDueAnnualShort,strikeThroughPriceDisplay:n.fullPriceAnnualShortNoCountryAbbreviation,strikeThroughPriceSubtext:n.fullPriceShort,billingPeriodText:`Billed once for your first year.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(n.offerID).withCampaignID({defaultCampaignID:Y}).toString(),payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(n.offerID).withCampaignID({defaultCampaignID:Y}).toString(),source:`paywall`,offerInfo:n},legal:e.offer.combinedOffers?.offerTerms||t.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,trackingLabel:`CONV_ALL_ACCESS_ACQUISITION`,newPaywallHeight:!0,IsFormerNews:e.content?.IsFormerNews}},gc={name:`allAccessAcquisitionGateway`,tracking:{module:{name:`gateway`}},client:De(`vi`),onlyTrackWhenVisible:!1,enableOfferEligibility:!0,campaigns:{DEFAULT:{component:dc,content:e=>{let t=e.offer.allAccessAcquisitionMonthlyAsDefault;return{showPaymentMethods:!0,offerInfo:t,payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:Y}).withOfferID(t.offerID).toString(),source:`paywall`,legal:t.offerTerms,IsFormerNews:e.content?.IsFormerNews}},tracking:{module:{label:`DEFAULT`,element:{name:j.Subscribe}}}},CONV_ALL_ACCESS_ACQUISITION:{component:dc,audiences:{monthlyBau:{content:e=>fc(e)},monthlyAnnualBau:{combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>({...pc(e),headlineText:`Subscribe for`})},monthlySale:{content:e=>mc(e)},monthlyAnnualSale:{combinedOfferAliases:[`allAccessSaleAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>hc(e)}}}},fallback:{component:dc,content:()=>({showPaymentMethods:!0,surveyCampaign:`B`,uri:T(`https://myaccount.nytimes.com/get-started`).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),legal:`Offer for a New York Times All Access subscription; current subscribers not eligible. Subscription excludes print edition. Some games may be available without a subscription. Your payment method will automatically be charged in advance the introductory rate every 4 weeks for 1 year, and after 1 year the standard rate every 4 weeks. Your subscription will continue until you <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale#cancellation">cancel</a>. Cancellation takes effect at the end of your current billing period. Taxes may apply. Offer terms are subject to change.`}),tracking:{module:{label:`fallback`,element:{name:j.Subscribe}}}}};function _c({styles:e,getHeadlineComponent:t,getSublineComponent:n,getCancelText:r,footerImage:i,inverseColors:a=!1,paymentOptionsCreditCardStylesOverride:o,applePayButtonStyle:s,isContinue:c=!1,className:l,parentCampaign:u,parentIsFormerNews:d}){let{unit:f}=A(gc);if(!f?.canShow)return null;let p=d??!!f?.content?.IsFormerNews;return f?.component?U.createElement(`div`,{ref:f?.setRef,className:l,"data-testid":`onsite-messaging-unit-${gc?.name}`,"data-campaign":f?.campaign,"data-audience":f?.audience},U.createElement(f.component,{unit:f,styles:e,getHeadlineComponent:t,getSublineComponent:n,footerImage:i,inverseColors:a,getCancelText:r,paymentOptionsCreditCardStylesOverride:o,applePayButtonStyle:s,isResubscribe:p,isContinue:c,parentCampaign:u})):null}var vc=N(_c),yc=t({arlText:()=>$c,arlTextLinkBold:()=>el,billedAs:()=>Vc,billedAsContainerAnnually:()=>Hc,billedAsContainerMonthly:()=>Uc,billingText:()=>Oc,boldCancel:()=>rl,cancelText:()=>Ac,containerClassName:()=>il,footerBillingText:()=>kc,footerContainer:()=>qc,footerContent:()=>Jc,footerContentModal:()=>Yc,footerContentNoLegal:()=>Xc,footerText:()=>Qc,label:()=>zc,longHorizontalRule:()=>Zc,marginBottom:()=>Mc,marginTop:()=>jc,offerContainer:()=>xc,offerDetailsContainer:()=>Cc,offerSubtitle:()=>tl,offerTitle:()=>wc,offerUrgencyMessaging:()=>Tc,paddingTopZero:()=>Sc,paymentOptionsCheckoutContainer:()=>Fc,paymentOptionsV2Container:()=>Ic,paywallContainer:()=>bc,pill:()=>Bc,priceAndBilledAs:()=>Gc,priceExpression:()=>Ec,salePill:()=>Kc,salePillContainer:()=>nl,selector:()=>Wc,strikethroughExpression:()=>Dc,subline:()=>al,subscribeButtonClass:()=>Pc,subscribeContainer:()=>Nc,toggle:()=>Lc,toggleSelected:()=>Rc});l();var bc=c`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,xc=c`
  width: 100%;
  max-width: none;
  padding: 22px 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,Sc=c`
  padding: 0 0 48px;

  @media (min-width: 376px) {
    padding: 22px 0 48px;
  }
`,Cc=c`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 360px;
  padding-top: 15px;
`,wc=c`
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 200;
  line-height: 115%;
  color: ${R.black};
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
  }

  @media (max-width: ${L.small}px) {
    font-weight: 200;
  }
`,Tc=c`
  font-size: 14px;
  font-weight: 600;
  color: ${R.black};
  line-height: 24px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  margin-top: 20px;

  @media (min-width: ${L.mediumLarge}px) {
    line-height: 27px;
    letter-spacing: 0.72px;
  }
`,Ec=c`
  font-family: ${P.franklin};
  font-size: 26px;
  font-weight: 500;
  line-height: 36px;
  color: ${R.black};

  @media (min-width: 481px) {
    font-size: 28px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 30px;
  }
`,Dc=c`
  color: ${R.gray2};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,Oc=c`
  width: 95%;
  margin: auto;
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: ${R.footerGrey};

  a {
    font-weight: 700;
    color: ${R.veryDarkGrey};
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }

  b {
    font-weight: 700;
  }
`,kc=c`
  color: ${R.footerGrey};
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    color: ${R.footerGrey};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }
`,Ac=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  text-align: center;
  color: ${R.veryDarkGrey};
  width: 400px;
`,jc=c`
  margin-top: 15px;
`,Mc=c`
  margin-bottom: 20px;
`,Nc=c`
  margin: 20px 40px 0;

  @media (min-width: ${L.mediumLarge}px) {
    margin: 20px 60px 0;
  }
`,Pc=c`
  --fz: 16;
  --lh: 24;
  --padding-x: 10px;
  --padding-y: 10px;
  height: 44px;
  cursor: pointer;
  display: block;
  font-weight: 600;
  margin-top: 16px;
  background: var(--button-bg-color, ${R.black});
  border: 1px solid var(--button-bg-color);
  border-radius: 3px;
  box-sizing: border-box;
  color: ${R.white};
  font-family: ${P.franklin};
  font-size: calc(var(--fz) * 1px);
  line-height: calc(var(--lh) / var(--fz));
  padding: var(--padding-y) var(--padding-x);
  text-decoration: none;
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  min-width: 200px;
`,Fc=c`
  max-width: calc(100% - 40px);

  a {
    max-width: 100%;
  }
`,Ic=c`
  width: 335px;
  margin-top: 16px;

  [data-testid='apple-pay-button'] {
    font-weight: 600 !important;
  }
`,Lc=c`
  display: flex;
  width: 300px;
  margin: 11px 0;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  outline: 1px solid #979797;
  cursor: default;
`,Rc=c`
  outline: 2px solid ${R.black};

  input {
    accent-color: ${R.black};
  }
`,zc=c`
  font-size: 18px;
  font-weight: 600;
  color: ${R.black};
  margin-left: 10px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 18px;
  }
`,Bc=c`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 4px 8px 3px;
  border-radius: 100px;
  background-color: ${R.veryLightGrey};
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.4px;
  color: ${R.veryDarkGrey};
  text-transform: uppercase;
  text-align: center;
  align-self: flex-start;
`,Vc=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${R.veryDarkGrey};
  text-align: left;
  margin-top: 4px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 14px;
  }
`,Hc=c`
  display: flex;
  width: 173px;
`,Uc=c`
  width: 245px;
  margin-left: 10px;

  @media (min-width: ${L.mediumLarge}px) {
    width: 270px;
  }
`,Wc=c`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  text-align: left;
`,Gc=c`
  display: flex;
  flex-direction: column;
`,Kc=c`
  background-color: ${R.white};
  z-index: 100;
`,qc=c`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  width: 100%;
`,Jc=c`
  padding: 16px 20px 24px;
  max-width: 980px;

  @media (min-width: ${L.xLarge}px) {
    padding: 16px 230px 24px;
  }
`,Yc=c`
  @media (min-width: ${L.xLarge}px) {
    padding: 16px 20px 24px;
  }
`,Xc=c`
  padding: 24px 20px;
  width: 100%;
  max-width: 980px;
  @media (min-width: ${L.xLarge}px) {
    padding: 24px 230px;
  }
`,Zc=c`
  margin: 12px 0;
  border: none;
  border-bottom: 1.5px solid ${R.lineGrey};
`,Qc=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`,$c=c`
  b {
    font-weight: 700;
  }

  div {
    display: inline;

    a {
      font-weight: 500;
    }
  }
`,el=c`
  display: flex;
  color: black;
  align-items: anchor-center;
  flex-direction: column;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 120%; */
  line-height: 40px;
  margin-top: 20px;
`,tl=c`
  display: flex;
  align-items: anchor-center;
  flex-direction: column;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 120%; */
  line-height: 40px;
  margin-top: 20px;
`,nl=c`
  width: fit-content;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
`,rl=c`
  font-weight: 700;
`,il=c`
  width: 100%;
`,al=c`
  font-family: ${P.franklin};
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  color: ${R.black};

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 20px;
  }
`;l();function ol(e,t,n){let r=t?.[e]?.totalDueShort||t?.totalDueShort,i=e===`monthly`?`monthly`:`yearly`;return t?.isSale?U.createElement(U.Fragment,null,U.createElement(`div`,{className:o(wc),"data-testid":`aa-${i}-header-copy`},`Discover The Times with our best offer.`),!t?.multipleOffers&&U.createElement(`div`,{className:o(nl)},U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,noMaxWidth:!0}))):n?U.createElement(`div`,{className:o(wc)},`Resubscribe for unlimited access to all of The Times.`):U.createElement(`div`,{className:o(wc)},`Enjoy unlimited access for `,r,` a`,` `,e===`monthly`?`week`:`year`,`.`)}function sl(e,t,n){if(t?.multipleOffers)return t.isSale?U.createElement(`div`,{className:o(Mc)}):null;let r=e===`monthly`?`monthly`:`yearly`;return t?.isSale?U.createElement(U.Fragment,null,U.createElement(`div`,{className:o(al),"data-testid":`aa-${r}-offer-copy`},`${t?.totalDueShort}/${e===`monthly`?`week`:`year`} for your first `,U.createElement(`span`,{className:o(Dc)},e===`monthly`?`six months`:``),` year`),U.createElement(`div`,{className:o(Oc),"data-testid":`aa-${r}-billed-as-copy`},t?.billingPeriodText,` `)):U.createElement(U.Fragment,null,U.createElement(`div`,{className:Tc},`Welcome`,n?` back `:` `,`offer`),U.createElement(`div`,{className:Ec},U.createElement(`span`,{className:Dc},t?.strikeThroughPriceDisplay),` `,t?.priceDisplay),U.createElement(`div`,{className:o(Oc)},t?.billingPeriodText,` `))}function cl(){return U.createElement(`div`,{className:o(Ac,jc)},`Cancel anytime.`)}function X({unit:e,parentCampaign:t}){let n=e?.content,r=typeof n?.IsFormerNews==`boolean`?n.IsFormerNews:void 0,{messageCap:i}=Ye({unit:`gateway`,level:Xe.Audience});return(0,U.useEffect)(()=>{!e?.canShow||e?.campaign!==`CONV_FREE_TRIAL_BAU`||i.increment()},[e,i]),U.createElement(vc,{styles:yc,className:il,getHeadlineComponent:ol,getSublineComponent:sl,getCancelText:cl,parentCampaign:t??e?.campaign,parentIsFormerNews:r})}var ll=()=>U.createElement(`svg`,{width:`14`,height:`14`,viewBox:`0 0 12 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`path`,{d:`M10.5 3.44606L9.4425 2.34375L4.5 7.45939L2.565 5.46437L1.5 6.55892L4.5 9.65625L10.5 3.44606Z`,fill:`#121212`}));function ul({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=t?.content?.dismissShowsRegiwall,a=le({module:{name:i?M.Regiwall:`gateway`,context:i?`regiwall`:`paywall`,label:t?.campaign||``,region:`0`,element:{url:``}}});if((0,U.useEffect)(()=>{n&&a.trackImpression()},[n,a]),!t?.canShow)return null;let o=t?.content?.openInAppParam||`download-wall`,s=t?.content?.openInAppCtaText||`Open in app`,c=t?.content?.subscribeOnWebUrl;return n?i?U.createElement(J,{unit:t,clientProps:e},U.createElement(W,{unit:t,clientProps:e})):U.createElement(J,{unit:t,clientProps:e},U.createElement(X,{parentCampaign:t?.campaign})):U.createElement(J,{unit:t,clientProps:e},U.createElement(`div`,{className:Xs},U.createElement(`div`,{className:Zs},U.createElement(`p`,{className:$s},`Continue reading in the app — it's better.`),U.createElement(V,{openInAppParam:o,isLoggedIn:!0,className:sc,trackInteraction:t?.trackInteraction},s),U.createElement(`div`,{className:ec},U.createElement(`ul`,{className:tc},U.createElement(`li`,{className:nc},U.createElement(`span`,{className:ic},U.createElement(ll,null)),U.createElement(`span`,{className:rc},`Stay logged in.`)),U.createElement(`li`,{className:nc},U.createElement(`span`,{className:ic},U.createElement(ll,null)),U.createElement(`span`,{className:rc},`Read in dark mode.`)),U.createElement(`li`,{className:nc},U.createElement(`span`,{className:ic},U.createElement(ll,null)),U.createElement(`span`,{className:rc},`Listen to podcasts, free.`)),U.createElement(`li`,{className:nc},U.createElement(`span`,{className:ic},U.createElement(ll,null)),U.createElement(`span`,{className:rc},`Watch videos, free.`))),U.createElement(ac,null)),U.createElement(`p`,{className:oc},U.createElement(z,{testId:`continue-on-web-button`,className:Qs,onClick:e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:i?`goto-register`:`goto-subscribe`,label:t?.content?.subscribeCta||`Subscribe to read on web`}}}}),c?window.location.href=c:r(!0)}},t?.content?.subscribeCta||`Subscribe to read on web`)))))}var dl=N(ul);l(),c`
  transform: translate(0, -42vh);
`,c``;var fl=c`
  padding: 48px 20px 56px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`,pl=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 0 auto;
  width: 100%;
`,ml=c`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`,hl=c`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  border-radius: 3px;
  border: transparent;
  background: none;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #121212;
  text-decoration: underline;
  text-decoration-color: #121212;
`,gl=c`
  width: 335px;
  margin-bottom: 24px;
  font-family: 'NYTCheltenham';
  font-style: normal;
  font-weight: 250;
  font-size: 32px;
  line-height: 115%;
  text-align: center;
  color: #121212;
`,_l=c`
  display: block;
  margin: 0;
`,vl=c`
  margin-bottom: 12px;
  padding: 0.72rem 1rem;
  background-color: #121212;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #f8f8f8;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;function yl(e){let t=new URLSearchParams((window==null?void 0:window.location)?.search);return t.has(`METER_HOST`)?`${t.get(`METER_HOST`)}/meter.js`:e===`prd`?`https://meter-svc.nytimes.com/meter.js`:`https://meter-svc.stg.nytimes.com/meter.js`}async function bl(e){try{let t=yl(e),n=window.location.href,r=`${t}?sourceApp=vi&url=${encodeURIComponent(n)}&app_download_bonus=true`;await fetch(r,{method:`GET`,credentials:`include`})}catch{}}function xl(e){let{env:t}=m(),{messageCap:n}=Ye({...e,level:e.level??Xe.Audience});return(0,U.useCallback)(async()=>{await bl(t),await n.increment()},[t,n])}var Sl=()=>U.createElement(`svg`,{width:`56`,height:`56`,viewBox:`0 0 56 56`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,fill:`url(#paint0_linear_276_3541)`}),U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,stroke:`#DFDFDF`,strokeWidth:`0.5`}),U.createElement(`path`,{d:`M42.2199 31.7384C41.0216 34.8901 38.8169 37.3255 35.6535 38.6148V31.7384L39.44 28.348L35.6535 25.0053V20.2778C39.1045 20.0391 41.5009 17.5082 41.5009 14.4043C41.5009 10.3453 37.6186 8.91272 35.4139 8.91272C34.9346 8.91272 34.4074 8.91272 33.6405 9.10373V9.29474C33.9281 9.29474 34.3594 9.24699 34.5032 9.24699C36.037 9.24699 37.1873 9.96327 37.1873 11.3481C37.1873 12.3987 36.3245 13.4492 34.7908 13.4492C31.0043 13.4492 26.5469 10.393 21.706 10.393C17.3923 10.393 14.4207 13.5925 14.4207 16.8396C14.4207 20.0868 16.2899 21.0896 18.2551 21.8059L18.303 21.6149C17.6799 21.2329 17.2485 20.5643 17.2485 19.5138C17.2485 18.0812 18.5906 16.8874 20.2681 16.8874C24.3421 16.8874 30.9085 20.2778 34.9825 20.2778H35.3659V25.0531L31.5795 28.348L35.3659 31.7384V38.7103C33.7843 39.2833 32.1547 39.5221 30.4771 39.5221C24.1504 39.5221 20.1243 35.7019 20.1243 29.3508C20.1243 27.8227 20.316 26.3424 20.7474 24.9098L23.9108 23.525V37.5642L30.3333 34.7468V20.3733L20.8912 24.5755C21.8498 21.8059 23.8149 19.8003 26.1634 18.6542L26.1155 18.511C19.7888 19.8958 13.6538 24.671 13.6538 31.8339C13.6538 40.0951 20.6515 45.8254 28.7996 45.8254C37.4269 45.8254 42.3157 40.0951 42.3637 31.7384H42.2199Z`,fill:`#121212`}),U.createElement(`defs`,null,U.createElement(`linearGradient`,{id:`paint0_linear_276_3541`,x1:`28`,y1:`56`,x2:`28`,y2:`0`,gradientUnits:`userSpaceOnUse`},U.createElement(`stop`,{stopColor:`#DFDFDF`}),U.createElement(`stop`,{offset:`1`,stopColor:`#F8F8F8`}))));function Cl({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=xl({unit:`gateway`}),a=t?.content?.openInAppParam||`download-wall`,o=t?.content?.subscribeOnWebUrl,s=le({module:{name:`gateway`,context:`paywall`,label:t?.campaign||``,region:`0`,element:{url:``},other:[{key:`audience`,value:t?.audience||``}]}});if((0,U.useEffect)(()=>{n&&s.trackImpression()},[n,s]),!t?.canShow)return null;let c=e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:`goto-subscribe`,label:`Subscribe to read on web`}}}}),o?window.location.href=o:r(!0)},l={...e,convDownloadWallUxPt2Height:!n&&t?.content?.convDownloadWallUxPt2Height};return n?U.createElement(J,{unit:t,clientProps:l},U.createElement(X,{parentCampaign:t?.campaign})):U.createElement(J,{unit:t,clientProps:l},U.createElement(`div`,{className:fl},U.createElement(`div`,{className:pl},U.createElement(`div`,{className:ml},U.createElement(Sl,null)),U.createElement(`div`,{className:gl},`Read this story free`,U.createElement(`br`,null),`in The Times app.`),U.createElement(V,{openInAppParam:a,isLoggedIn:!0,handleClick:i,className:vl,trackInteraction:t?.trackInteraction},`Continue in the app`),U.createElement(`div`,{className:_l},U.createElement(z,{testId:`continue-on-web-button`,className:hl,onClick:c},`or subscribe to read on web`)))))}var wl=N(Cl);l(),c`
  transform: translate(0, -42vh);
`,c``;var Tl=c`
  position: relative;
  padding: 40px 20px 48px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    padding: 48px 20px 56px;
  }
`,El=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 0 auto;
  width: 100%;
`,Dl=c`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`,Ol=c`
  padding: 12px 0px;
  text-underline-offset: 5px;
`,kl=c`
  max-width: 335px;
  margin-bottom: 24px;
  font-family: ${P.cheltenham};
  font-style: normal;
  font-weight: 250;
  font-size: 32px;
  line-height: 115%;
  text-align: center;
  white-space: pre-line;
  color: ${D.content.primary};

  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 36px;
    line-height: 115%;
  }
`,Al=c`
  @media (min-width: 768px) {
    max-width: 440px;
  }
`,jl=c`
  @media (min-width: 768px) {
    max-width: 360px;
  }
`,Ml=c`
  margin-bottom: 8px;
`,Nl=c`
  max-width: 335px;
  margin-bottom: 24px;
  font-style: normal;
  text-align: center;
  white-space: pre-line;
  color: ${D.content.primary};

  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 18px;
  }
`,Pl=c`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4181c8 0%, #d93038 100%);
`,Fl=c`
  align-items: center;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Il=c`
  padding: 2px 8px;
  border-radius: 3px;
  background-color: #d1332b;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${D.background.secondary};
`,Ll=c`
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #d1332b;
`,Rl=c`
  display: block;
  margin: 0;
`,zl=c`
  margin-bottom: 12px;
  padding: 0.72rem 1rem;
  background-color: ${D.content.primary};
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: ${D.background.secondary};
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;l();var Bl=()=>{let e=(0,U.useId)();return U.createElement(`svg`,{width:`56`,height:`56`,viewBox:`0 0 56 56`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,fill:`url(#${e})`}),U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,stroke:D.stroke.tertiary,strokeWidth:`0.5`}),U.createElement(`path`,{d:`M42.2199 31.7384C41.0216 34.8901 38.8169 37.3255 35.6535 38.6148V31.7384L39.44 28.348L35.6535 25.0053V20.2778C39.1045 20.0391 41.5009 17.5082 41.5009 14.4043C41.5009 10.3453 37.6186 8.91272 35.4139 8.91272C34.9346 8.91272 34.4074 8.91272 33.6405 9.10373V9.29474C33.9281 9.29474 34.3594 9.24699 34.5032 9.24699C36.037 9.24699 37.1873 9.96327 37.1873 11.3481C37.1873 12.3987 36.3245 13.4492 34.7908 13.4492C31.0043 13.4492 26.5469 10.393 21.706 10.393C17.3923 10.393 14.4207 13.5925 14.4207 16.8396C14.4207 20.0868 16.2899 21.0896 18.2551 21.8059L18.303 21.6149C17.6799 21.2329 17.2485 20.5643 17.2485 19.5138C17.2485 18.0812 18.5906 16.8874 20.2681 16.8874C24.3421 16.8874 30.9085 20.2778 34.9825 20.2778H35.3659V25.0531L31.5795 28.348L35.3659 31.7384V38.7103C33.7843 39.2833 32.1547 39.5221 30.4771 39.5221C24.1504 39.5221 20.1243 35.7019 20.1243 29.3508C20.1243 27.8227 20.316 26.3424 20.7474 24.9098L23.9108 23.525V37.5642L30.3333 34.7468V20.3733L20.8912 24.5755C21.8498 21.8059 23.8149 19.8003 26.1634 18.6542L26.1155 18.511C19.7888 19.8958 13.6538 24.671 13.6538 31.8339C13.6538 40.0951 20.6515 45.8254 28.7996 45.8254C37.4269 45.8254 42.3157 40.0951 42.3637 31.7384H42.2199Z`,fill:D.content.primary}),U.createElement(`defs`,null,U.createElement(`linearGradient`,{id:e,x1:`28`,y1:`56`,x2:`28`,y2:`0`,gradientUnits:`userSpaceOnUse`},U.createElement(`stop`,{stopColor:D.stroke.tertiary}),U.createElement(`stop`,{offset:`1`,stopColor:D.background.secondary}))))};function Vl({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=(0,U.useRef)(null),a=xl({unit:`gateway`}),s=t?.content?.openInAppParam||`download-wall`,c=t?.content?.subscribeOnWebUrl,l=le({module:{name:`gateway`,context:`paywall`,label:t?.campaign||``,region:`0`,element:{url:``},other:[{key:`audience`,value:t?.audience||``}]}});if((0,U.useEffect)(()=>{var e,t,r;n&&(l.trackImpression(),(e=i.current)==null||e.focus(),(r=(t=i.current)?.scrollIntoView)==null||r.call(t,{block:`start`}))},[n,l]),!t?.canShow)return null;let u=t?.content?.headlineText||`Read this story for free.`,d=t?.content?.subtextText,f=t?.content?.ctaText||`Continue in the app`,p=t?.content?.linkText||`or subscribe to read in browser`,m=!!t?.content?.accentBar,h=!!t?.content?.isLiveBlog,g=t?.content?.liveBadgeText||`LIVE`,_=t?.content?.liveUpdatedText||`Updated 1 minute ago`,v=e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:`goto-subscribe`,label:`Subscribe to read on web`}}}}),c?window.location.href=c:r(!0)},y={...e,convDownloadWallUxPt2Height:!n&&t?.content?.convDownloadWallUxPt2Height};return n?U.createElement(J,{unit:t,clientProps:y},U.createElement(`div`,{ref:i,tabIndex:-1},U.createElement(X,{parentCampaign:t?.campaign}))):U.createElement(J,{unit:t,clientProps:y},U.createElement(k,{className:Tl},U.createElement(`div`,{className:El},m&&U.createElement(`div`,{className:Pl}),h?U.createElement(k,{className:Fl,gap:1},U.createElement(`span`,{className:Il},g),U.createElement(`span`,{className:Ll},_)):U.createElement(k,{className:Dl},U.createElement(Bl,null)),U.createElement(`h2`,{className:o(kl,{[Ml]:!!d,[Al]:m,[jl]:h})},u),d&&U.createElement(O,{as:`div`,variant:`Text/16`,className:Nl},d),U.createElement(V,{openInAppParam:s,isLoggedIn:!0,handleClick:a,className:zl,trackInteraction:t?.trackInteraction},f),U.createElement(`div`,{className:Rl},U.createElement(ne,{"data-testid":`continue-on-web-button`,className:Ol,height:`standard`,colorBehavior:`alwaysLight`,onClick:v},p)))))}var Hl=N(Vl);l();var Ul=`0.75s`,Wl=`0.5s`,Gl=`cubic-bezier(0.42, 0, 0.38, 0.77)`,Kl=i`
  from {
    opacity: 0;
    transform: rotate(90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`,ql=i`
  from {
    opacity: 0;
    transform: rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`,Jl=c`
  opacity: 0;
  transform-box: fill-box;
`,Yl=`
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
    transform: none;
  }
`,Xl=c`
  ${Jl}
  transform-origin: 100% 100%;
  animation: ${Kl} ${Ul} ${Gl} ${Wl} both;
  ${Yl}
`,Zl=c`
  ${Jl}
  transform-origin: 0% 100%;
  animation: ${ql} ${Ul} ${Gl} ${Wl} both;
  ${Yl}
`,Ql=`M80 2C120.869 2 154 35.1309 154 76H102.601C102.6 63.3169 92.3189 53.0353 79.6357 53.0352C66.9525 53.0352 56.6703 63.3168 56.6699 76H6C6 35.1309 39.1309 2 80 2Z`,$l=`M80 1C120.869 1 154 34.1309 154 75H102.602C102.602 62.3165 92.3192 52.0342 79.6357 52.0342C66.9523 52.0342 56.67 62.3166 56.6699 75H6C6 34.1309 39.1309 1 80 1Z`,eu=`M76.152 73C76.117 74.0206 76.4917 74.9993 77.2139 75.7209C77.9349 76.4426 78.9444 76.848 80 76.848C81.0556 76.848 82.0651 76.4426 82.7861 75.7209C83.5083 74.9993 83.883 74.0206 83.848 73C83.8079 71.8167 83.7678 70.6333 83.7278 69.45C83.0063 48.15 82.2848 26.85 81.5633 5.55001C81.5232 4.36666 81.4831 3.18333 81.443 2C81.4303 1.63004 81.2671 1.27522 80.9967 1.01362C80.7259 0.752014 80.37 0.605049 80 0.605049C79.63 0.605049 79.2741 0.752014 79.0033 1.01362C78.7329 1.27522 78.5697 1.63004 78.557 2C78.5169 3.18333 78.4768 4.36666 78.4368 5.55001C77.7153 26.85 76.9938 48.15 76.2723 69.45C76.2322 70.6333 76.1921 71.8167 76.152 73Z`;function tu({className:e,testId:t}){let n=`election-fan-arc-${(0,U.useId)().replace(/:/g,``)}`;return U.createElement(`svg`,{className:e,"data-testid":t,"aria-hidden":`true`,focusable:`false`,width:`160`,height:`77`,viewBox:`0 0 160 77`,fill:`none`},U.createElement(`defs`,null,U.createElement(`clipPath`,{id:n,"data-testid":`election-fan-clip`},U.createElement(`path`,{d:Ql})),U.createElement(`clipPath`,{id:`${n}-blue`},U.createElement(`rect`,{x:`6`,y:`-2`,width:`74`,height:`77`})),U.createElement(`clipPath`,{id:`${n}-red`},U.createElement(`rect`,{x:`80`,y:`-2`,width:`74`,height:`77`}))),U.createElement(`g`,{clipPath:`url(#${n})`,"data-testid":`election-fan-fill`},U.createElement(`path`,{d:$l,fill:`#f2f2f2`}),U.createElement(`g`,{clipPath:`url(#${n}-blue)`},U.createElement(`rect`,{className:Xl,x:`6`,y:`-2`,width:`74`,height:`77`,fill:`#d2e2ef`})),U.createElement(`g`,{clipPath:`url(#${n}-red)`},U.createElement(`rect`,{className:Zl,x:`80`,y:`-2`,width:`74`,height:`77`,fill:`#f2d8d9`}))),U.createElement(`path`,{d:eu,fill:`#000`}))}l();var nu=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  max-width: 100%;
  text-align: center;
  font-family: ${P.franklin};
`,ru=c`
  flex: none;
  width: 160px;
  height: 77px;
  margin-bottom: 20px;
`,iu=c`
  width: 280px;
  max-width: 100%;
  margin: 0 0 24px;
  font-family: ${P.cheltenham};
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: ${D.content.primary};
`,au=c`
  font-weight: 700;
  white-space: nowrap;
`,ou=c`
  margin-bottom: 16px;
`,su=c`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
`,cu=c`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${P.franklin};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${D.content.secondary};
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: 100ms ease-out;
    transition-property: color, opacity;

    .${su} {
      transition: text-decoration-color 100ms ease-out;
    }
  }

  &:hover .${su} {
    text-decoration-color: transparent;
  }

  &:active {
    opacity: 0.8;
  }
`,lu={coverage:`This story, and all election coverage, is`,results:`These results, and all election coverage, are`},uu=[`renderOwnContainer`,`centeredAuthModal`,`roundedModal`,`showGatewayBackdrop`,`static`,`hideTopper`];function du({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=!!t?.content?.isLoggedIn,a=le({module:{name:i?M.Gateway:M.Regiwall,context:i?`paywall`:`regiwall`,label:t?.campaign||``,region:`0`,element:{url:``},other:[{key:`audience`,value:t?.audience||``}]}}),o=(0,U.useRef)(null);if((0,U.useEffect)(()=>{var e;n&&(a.trackImpression(),(e=o.current)==null||e.focus())},[n,a]),!t?.canShow)return null;let s=lu[String(t.content?.electionAssetType)]??lu.coverage,c=t.content?.openInAppParam||`download-wall-election-modal`,l=[i?``:`Times subscriber?`,i?`Subscribe to read here`:`Log in`].filter(Boolean).join(` `),u=e=>{t.trackInteraction(e,{extraProps:{module:{element:{name:i?j.Subscribe:j.LogIn,label:l}}}}),window.scrollTo({top:0}),r(!0)};if(n){let n={...t,component:i?t.component:W,content:Object.fromEntries(Object.entries(t.content??{}).filter(([e])=>!uu.includes(e)))};return U.createElement(J,{key:`wall`,unit:n,clientProps:e},U.createElement(`div`,{ref:o,tabIndex:-1,"data-testid":`election-download-wall-content`},i?U.createElement(X,{parentCampaign:t.campaign}):U.createElement(W,{unit:n})))}return U.createElement(J,{key:`modal`,unit:t,clientProps:e},U.createElement(`div`,{className:nu,"data-testid":`election-download-wall-modal`,"data-campaign":t.campaign,"data-audience":t.audience},U.createElement(tu,{className:ru,testId:`election-download-wall-hero`}),U.createElement(`h2`,{className:iu},s,` `,U.createElement(`span`,{className:au},`free in the app`),`.`),U.createElement(V,{openInAppParam:c,oneLinkUrl:S,isLoggedIn:i,variant:`primary`,className:ou,trackInteraction:t.trackInteraction},`Continue in the app`),U.createElement(z,{testId:`election-download-wall-subscribe`,className:cu,onClick:u},U.createElement(`span`,{className:su},l))))}var fu=N(du);l();var pu=c`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px 48px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${P.franklin};
`,mu=c`
  max-width: 335px;
  margin: 0 0 24px;
  color: ${D.content.primary};
  text-align: center;
  font-family: ${P.cheltenham};
  font-size: 28px;
  font-style: normal;
  font-weight: 250;
  line-height: 115%;
  letter-spacing: 0;
  white-space: pre-line;

  @media (min-width: 768px) {
    max-width: 360px;
    font-size: 36px;
  }
`,hu=c`
  max-width: 335px;
  margin: 0 0 24px;
  color: ${D.content.primary};
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: ${P.franklin};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0;
  white-space: pre-line;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`,gu=c`
  width: 100%;
  max-width: 360px;
  align-items: stretch;
`,_u=c`
  max-width: 400px;
  margin-bottom: 8px;
`,vu=c`
  flex: 1 1 0;
  min-width: 0;
  overflow-wrap: break-word;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
  box-sizing: border-box;
  border: 1px solid ${D.stroke.tertiary};
  border-radius: 3px;
  background: ${D.background.primary};
`,yu=c`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,bu=c`
  gap: 6px;
`,xu=c`
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  color: ${D.content.secondary};
`,Su=c`
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${R.saleRed};
`,Cu=c`
  text-decoration-line: underline;
  text-decoration-color: ${R.saleRed};
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
`,wu=c`
  margin: 0;
  color: ${D.content.primary};
  font-family: ${P.cheltenham};
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0;
  white-space: pre-line;
`,Tu=c`
  color: ${D.content.secondaryDim};
  font-family: ${P.cheltenham};
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0;
  text-decoration-line: line-through;
`,Eu=c`
  && {
    display: flex;
    min-height: 32px;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    background-color: ${D.content.primary};
    font-family: ${P.franklin};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${D.background.primary};
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.2s ease;
  }

  /* tpl Button pads its inner content element; without this it renders taller than the
     MobileAppCta anchor sharing this class. */
  && > div {
    padding: 0;
  }

  &&:hover,
  &&:focus-visible {
    background-color: ${D.content.primaryDim};
  }

  &&:focus-visible {
    outline: 2px solid ${D.content.primary};
    outline-offset: 2px;
  }
`,Du=c`
  transform: rotate(45deg) scale(1.65);
  margin-top: 0;
  margin-left: 2px;
  width: 0.75rem;
  height: 0.75rem;
`,Ou=c`
  && {
    position: relative;
    display: flex;
    flex: 1 0 0;
    min-width: 0;
    height: 78px;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: 16px;
    --button-py: 0px;
    --button-px: 0px;
    border: 1px solid ${D.stroke.primary};
    border-radius: 3px;
    background: ${D.background.primary};
    color: ${D.content.primary};
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: ${P.franklin};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    white-space: pre-line;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  &&:hover,
  &&:focus-visible {
    background-color: ${D.background.secondary};
  }

  &&:focus-visible {
    outline: 2px solid ${D.content.primary};
    outline-offset: 2px;
  }
`,ku=c`
  position: absolute;
  top: 16px;
  right: 16px;
  transform: rotate(45deg) scale(1.65);
`;l();function Au({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=(0,U.useRef)(null),a=xl({unit:`gateway`}),s=t?.content?.openInAppParam||`download-wall`,c=t?.content?.subscribeOnWebUrl,l=le({module:{name:`gateway`,context:`paywall`,label:t?.campaign||``,region:`0`,element:{url:``},other:[{key:`audience`,value:t?.audience||``}]}});if((0,U.useEffect)(()=>{var e,t,r;n&&(l.trackImpression(),(e=i.current)==null||e.focus(),(r=(t=i.current)?.scrollIntoView)==null||r.call(t,{block:`start`}))},[n,l]),!t?.canShow)return null;let u=t?.content?.cardLayout!==`stacked`,d=t?.content?.headlineText||`Keep reading with one of the following options.`,f=t?.content?.appCardEyebrow,p=t?.content?.appCardHeadline||`Read for free in the app.`,m=t?.content?.appCtaText||`Continue in the app`,h=t?.content?.subscribeCardEyebrow,g=t?.content?.subscribeCardHeadline,_=t?.content?.subscribeCardHeadlinePrefix,v=t?.content?.strikeThroughPriceDisplay,y=t?.content?.priceDisplay,b=(t?.content?.subscribeCardPromoDuration)?.replace(/^1\s+/,``),x=!!t?.content?.showSaleUrgency,S=t?.content?.subscribeCtaText||`Learn more`,C=e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:`goto-subscribe`,label:`Subscribe to read on web`}}}}),c?window.location.href=c:r(!0)},w={...e,convDownloadWallUxPt2Height:!n&&t?.content?.convDownloadWallUxPt2Height};return n?U.createElement(J,{unit:t,clientProps:w},U.createElement(`div`,{ref:i,tabIndex:-1},U.createElement(X,{parentCampaign:t?.campaign}))):u?U.createElement(J,{unit:t,clientProps:w},U.createElement(`div`,{className:pu},U.createElement(`h2`,{className:mu},d),U.createElement(k,{className:o(gu,_u),flexDirection:`row`,gap:2},U.createElement(V,{openInAppParam:s,isLoggedIn:!0,handleClick:a,className:Ou,trackInteraction:t?.trackInteraction},p,U.createElement(ie,{size:12,"aria-hidden":`true`,className:ku})),U.createElement(re,{"data-testid":`combowall-subscribe-button`,className:Ou,weight:`standard`,height:`standard`,colorBehavior:`alwaysLight`,onClick:C},g)))):U.createElement(J,{unit:t,clientProps:w},U.createElement(`div`,{className:pu},U.createElement(`h2`,{className:hu},d),U.createElement(k,{className:gu,flexDirection:`column`,gap:1.5},U.createElement(`div`,{className:vu},U.createElement(`div`,{className:yu},f&&U.createElement(`span`,{className:xu},f),U.createElement(`h3`,{className:wu},p)),U.createElement(V,{openInAppParam:s,isLoggedIn:!0,handleClick:a,className:Eu,trackInteraction:t?.trackInteraction},m,` `,U.createElement(ie,{size:16,"aria-hidden":`true`,className:Du,inline:!0}))),U.createElement(`div`,{className:vu},U.createElement(`div`,{className:o(yu,{[bu]:x})},h&&U.createElement(`span`,{className:xu},h),x&&U.createElement(`span`,{className:Su},U.createElement(H,null)),y&&v?U.createElement(`h3`,{className:wu},_,` `,U.createElement(he,{oldPrice:v,currentPrice:`${y}/week`,oldPriceClassname:Tu}),b?U.createElement(U.Fragment,null,`
for your first `,x?U.createElement(`span`,{className:Cu},b):b,`.`):`.`):U.createElement(`h3`,{className:wu},g)),U.createElement(re,{"data-testid":`combowall-subscribe-button`,className:Eu,weight:`standard`,height:`standard`,colorBehavior:`alwaysLight`,onClick:C},S)))))}var ju=N(Au);l();var Mu=c`
  padding: 32px 20px 56px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`,Nu=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  text-align: center;
  font-family: ${P.franklin};
  line-height: 140%;
  margin: 0 auto;
  width: 100%;
`,Pu=c`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`,Fu=c`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  border-radius: 3px;
  border: transparent;
  background: none;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: #121212;
  text-decoration: underline;
  text-decoration-color: #121212;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
`,Iu=c`
  margin: 0;
  width: 335px;
  margin-bottom: 12px;
  font-family: ${P.cheltenham};
  font-style: normal;
  font-weight: 300;
  font-size: 1.75rem;
  line-height: 115%;
  text-align: center;
  color: #121212;
`,Lu=c`
  width: 335px;
  margin-bottom: 28px;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: #121212;
  font-feature-settings:
    'liga' off,
    'clig' off;

  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
    font-size: 1.125rem;
  }
`,Ru=c`
  display: block;
  margin: 0;
`,zu=c`
  margin-bottom: 12px;
  padding: 0.72rem 1rem;
  background-color: #121212;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: #f8f8f8;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background-color: #333;
  }
`,Bu=c`
  top: 100svh;
  transition:
    transform 750ms ease-out,
    min-height 750ms ease-out;
  min-height: 44vh;
  transform: translate(0, -44vh);

  @media screen and (min-width: 768px) {
    top: 100svh;
    min-height: 42vh;
    transform: translate(0, -42vh);
  }

  @media screen and (min-width: 1024px) {
    top: 100svh;
    min-height: 32vh;
    transform: translate(0, -32vh);
  }
`,Vu=c`
  transition:
    transform 750ms ease-out,
    min-height 750ms ease-out;
  min-height: 42vh;
  transform: translate(0, -42vh);

  @media screen and (min-width: 765px) {
    min-height: 50vh;
    transform: translate(0, -50vh);
  }
`,Hu=()=>U.createElement(`svg`,{width:`56`,height:`56`,viewBox:`0 0 56 56`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,fill:`url(#paint0_linear_276_3541)`}),U.createElement(`rect`,{x:`0.25`,y:`0.25`,width:`55.5`,height:`55.5`,rx:`13.75`,stroke:`#DFDFDF`,strokeWidth:`0.5`}),U.createElement(`path`,{d:`M42.2199 31.7384C41.0216 34.8901 38.8169 37.3255 35.6535 38.6148V31.7384L39.44 28.348L35.6535 25.0053V20.2778C39.1045 20.0391 41.5009 17.5082 41.5009 14.4043C41.5009 10.3453 37.6186 8.91272 35.4139 8.91272C34.9346 8.91272 34.4074 8.91272 33.6405 9.10373V9.29474C33.9281 9.29474 34.3594 9.24699 34.5032 9.24699C36.037 9.24699 37.1873 9.96327 37.1873 11.3481C37.1873 12.3987 36.3245 13.4492 34.7908 13.4492C31.0043 13.4492 26.5469 10.393 21.706 10.393C17.3923 10.393 14.4207 13.5925 14.4207 16.8396C14.4207 20.0868 16.2899 21.0896 18.2551 21.8059L18.303 21.6149C17.6799 21.2329 17.2485 20.5643 17.2485 19.5138C17.2485 18.0812 18.5906 16.8874 20.2681 16.8874C24.3421 16.8874 30.9085 20.2778 34.9825 20.2778H35.3659V25.0531L31.5795 28.348L35.3659 31.7384V38.7103C33.7843 39.2833 32.1547 39.5221 30.4771 39.5221C24.1504 39.5221 20.1243 35.7019 20.1243 29.3508C20.1243 27.8227 20.316 26.3424 20.7474 24.9098L23.9108 23.525V37.5642L30.3333 34.7468V20.3733L20.8912 24.5755C21.8498 21.8059 23.8149 19.8003 26.1634 18.6542L26.1155 18.511C19.7888 19.8958 13.6538 24.671 13.6538 31.8339C13.6538 40.0951 20.6515 45.8254 28.7996 45.8254C37.4269 45.8254 42.3157 40.0951 42.3637 31.7384H42.2199Z`,fill:`#121212`}),U.createElement(`defs`,null,U.createElement(`linearGradient`,{id:`paint0_linear_276_3541`,x1:`28`,y1:`56`,x2:`28`,y2:`0`,gradientUnits:`userSpaceOnUse`},U.createElement(`stop`,{stopColor:`#DFDFDF`}),U.createElement(`stop`,{offset:`1`,stopColor:`#F8F8F8`}))));function Uu({clientProps:e,unit:t}){let[n,r]=(0,U.useState)(!1),i=(0,U.useRef)(null),a=xl({unit:`gateway`}),o=t?.content?.openInAppParam||`download-wall`,s=t?.content?.headerText||`Read this story for free.`,c=t?.content?.bodyTextLine1,l=t?.content?.bodyTextLine2,u=le({module:{name:`gateway`,context:`paywall`,label:t?.campaign||``,region:`0`,element:{url:``},other:[{key:`audience`,value:t?.audience||``}]}});if((0,U.useEffect)(()=>{var e;n&&(u.trackImpression(),(e=i.current)==null||e.focus())},[n,u]),!t?.canShow)return null;let d=e=>{t?.trackInteraction(e,{extraProps:{module:{element:{name:`goto-subscribe`,label:`Subscribe to read on web`}}}}),r(!0)},f={...e,className:n?Vu:Bu};return n?U.createElement(J,{unit:t,clientProps:f},U.createElement(`div`,{ref:i,tabIndex:-1},U.createElement(X,{parentCampaign:t?.campaign}))):U.createElement(J,{unit:t,clientProps:f},U.createElement(`div`,{className:Mu},U.createElement(`div`,{className:Nu},U.createElement(`div`,{className:Pu},U.createElement(Hu,null)),U.createElement(`h2`,{className:Iu},s),c&&U.createElement(`div`,{className:Lu},c,l&&U.createElement(`br`,null),l),U.createElement(V,{openInAppParam:o,isLoggedIn:!0,handleClick:a,className:zu,trackInteraction:t?.trackInteraction},`Continue in the app`),U.createElement(`div`,{className:Ru},U.createElement(z,{testId:`continue-on-web-button`,className:Fu,onClick:d},`or subscribe to read in browser`)))))}var Wu=N(Uu);l();var Gu=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`,Ku=c`
  width: 100%;
  max-width: 560px;
  padding: 32px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: ${L.medium}px) {
    padding: 40px 0 48px;
  }
`,qu=c`
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 200;
  line-height: 1.15;
  color: ${R.veryDarkGrey};
  text-align: center;

  @media (min-width: ${L.medium}px) {
    font-size: 40px;
  }
`,Ju=c`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`,Yu=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${R.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  text-align: center;
  text-decoration: none;
  width: 220px;

  @media (min-width: ${L.medium}px) {
    width: 240px;
  }
`,Xu=c`
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: ${R.footerGrey};
  text-align: center;
`,Zu=y(`https://www.nytimes.com/subscription`).toString();function Qu({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:Gu},U.createElement(`div`,{className:Ku},U.createElement(`div`,{className:qu},`Enjoy unlimited access`,U.createElement(`br`,null),`to all of The Times.`),U.createElement(`div`,{className:Ju},U.createElement(z,{component:`a`,testId:`subscribe-button`,className:Yu,href:Zu,target:I.Blank,onClick:e?.trackInteraction},U.createElement(`p`,null,`View subscription options`)),U.createElement(`p`,{className:Xu},`Cancel anytime.`)))),U.createElement(G,{legalCopy:[],surveyCampaign:``,hideSurvey:!0,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`}))}l();var $u=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,ed=c`
  width: 100%;
  max-width: none;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,td=c`
  display: flex;
  flex-direction: column;
  text-align: center;
`,nd=c`
  margin-bottom: 20px;
  font-family: ${P.cheltenham};
  font-size: 40px;
  font-weight: 200;
  line-height: 48px;
  color: ${R.veryDarkGrey};

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 46px;
    line-height: 52px;
  }
`,rd=c`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,id=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  width: 220px;
  margin: 0 auto;
  @media (min-width: ${L.medium}px) {
    max-width: 240px;
    height: 48px;
    line-height: 48px;
  }
`,ad=c`
  margin: auto;
  width: 240px;
  align-items: center;
`,od=c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`;function sd({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:$u},U.createElement(`div`,{className:ed},U.createElement(`div`,{className:td},U.createElement(`div`,{className:nd},`Get unlimited access`,U.createElement(`br`,null),`to all of The Times.`)),U.createElement(`div`,{className:rd},U.createElement(z,{component:`a`,testId:`subscribe-button`,className:id,href:e?.content?.uri,target:I.Blank,onClick:e?.trackInteraction},U.createElement(`p`,null,`Subscribe now`)),U.createElement(`div`,{className:ad},U.createElement(`div`,{className:od},U.createElement(Re,null),U.createElement(Me,null)))))),U.createElement(G,{legalCopy:e?.content?.legal,surveyCampaign:`B`}))}var cd=new Ge({CampaignName:``,SalePeriods:[{Start:`2026-10-26T06:00:00-04:00`,End:`2026-11-26T10:00:00-05:00`,UrgencyPhases:[]}],Content:[]});l();var ld=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,ud=c`
  width: 100%;
  max-width: none;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,dd=c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.cheltenham};
  font-size: clamp(2rem, 1.5vw + 1rem, 2.25rem);
  font-style: normal;
  font-weight: ${F.light};
  line-height: 120%;
  margin: 20px 0 8px;
`,fd=c`
  display: flex;
  padding: 32px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`,pd=c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.franklin};
  font-size: 14px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${F.semiBold};
  line-height: 150%;
  letter-spacing: 0.56px;
`,md=c`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,hd=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  width: 220px;
  margin: 0 auto;
  @media (min-width: ${L.medium}px) {
    max-width: 240px;
    height: 48px;
    line-height: 48px;
  }
`,gd=c`
  margin: auto;
  width: 240px;
  align-items: center;
`,_d=c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`,vd=c`
  color: ${R.footerGrey};
  font-size: 14px;
  line-height: 130%;
`;function yd({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:ld},U.createElement(`div`,{className:ud},U.createElement(`div`,{className:fd},U.createElement(`div`,{className:pd},`SALE: Sale ends soon`),U.createElement(`div`,{className:dd},`Our best offer for your`,U.createElement(`br`,null),`first `,U.createElement(Ze,{oldPrice:`6 months`,currentPrice:`year`}),`.`),U.createElement(`p`,{className:vd},`Cancel anytime.`)),U.createElement(`div`,{className:md},U.createElement(z,{component:`a`,testId:`subscribe-button`,className:hd,href:e?.content?.uri,target:I.Blank,onClick:e?.trackInteraction},U.createElement(`p`,null,`Continue to checkout`)),U.createElement(`div`,{className:gd},U.createElement(`div`,{className:_d},U.createElement(ze,null),U.createElement(Re,null),U.createElement(Me,null)))))),U.createElement(G,{legalCopy:e?.content?.legal,surveyCampaign:`B`}))}l();var bd=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,xd=c`
  width: 100%;
  max-width: none;
  padding: 32px 0 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,Sd=c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.franklin};
  font-size: 18px;
  font-style: normal;
  font-weight: ${F.medium};
  line-height: 120%;
  margin-bottom: 8px;

  @media (min-width: ${L.medium}px) {
    font-size: 20px;
  }
`,Cd=c`
  display: flex;
  padding: 0 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  text-align: center;
`,wd=c`
  font-family: ${P.cheltenham};
  font-size: clamp(36px, 1.5vw + 1rem, 40px);
  font-weight: ${F.light};
  line-height: 41.4px;
  margin-bottom: 24px;

  @media (min-width: ${L.medium}px) {
    line-height: 46px;
  }
`,Td=c`
  @media (min-width: ${L.small}px) {
    display: none;
  }
`,Ed=c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.franklin};
  font-size: 14px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${F.semiBold};
  line-height: 150%;
  margin-bottom: 8px;
  letter-spacing: 0.56px;
`,Dd=c`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,Od=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  width: 180px;

  @media (min-width: ${L.medium}px) {
    height: 48px;
    line-height: 48px;
  }
`,kd=c`
  margin: auto;
  width: 240px;
  align-items: center;
`,Ad=c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`,jd=c`
  color: ${R.footerGrey};
  font-size: 14px;
  font-weight: ${F.medium};
  line-height: 130%;
`;function Md({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:bd},U.createElement(`div`,{className:xd},U.createElement(`div`,{className:Cd},U.createElement(`div`,{className:wd},`All of The Times.`,U.createElement(`br`,null),`For all that’s`,U.createElement(`br`,{className:Td}),` happening now.`),U.createElement(`div`,{className:Ed},`SALE: Sale ends soon`),U.createElement(`div`,{className:Sd},`Our best offer for your first`,` `,U.createElement(Ze,{oldPrice:`6 months`,currentPrice:`year`}),`.`),U.createElement(`p`,{className:jd},`Cancel anytime.`)),U.createElement(`div`,{className:Dd},U.createElement(z,{component:`a`,testId:`subscribe-button`,className:Od,href:e?.content?.uri,target:I.Blank,onClick:e?.trackInteraction},`Continue to checkout`),U.createElement(`div`,{className:kd},U.createElement(`div`,{className:Ad},U.createElement(ze,null),U.createElement(Re,null),U.createElement(Me,null)))))),U.createElement(G,{legalCopy:e?.content?.legal,surveyCampaign:`B`}))}l();var Nd=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: normal;
  box-sizing: border-box;
  overflow: hidden;
`,Pd=c`
  width: 100%;
  max-width: none;
  padding: 32px 0 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,Fd=c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.franklin};
  font-size: 18px;
  font-style: normal;
  font-weight: ${F.medium};
  line-height: 120%;
  margin-bottom: 8px;

  @media (min-width: ${L.medium}px) {
    font-size: 20px;
  }
`,Id=c`
  display: flex;
  padding: 0 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  text-align: center;
`,Ld=c`
  font-family: ${P.cheltenham};
  font-size: clamp(36px, 1.5vw + 1rem, 40px);
  font-weight: ${F.light};
  line-height: 41.4px;
  margin-bottom: 24px;

  @media (min-width: ${L.medium}px) {
    line-height: 46px;
  }
`,Rd=c`
  @media (min-width: ${L.small}px) {
    display: none;
  }
`;c`
  color: ${R.veryDarkGrey};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.franklin};
  font-size: 14px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${F.semiBold};
  line-height: 150%;
  margin-bottom: 8px;
  letter-spacing: 0.56px;
`;var zd=c`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,Bd=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  width: 180px;

  @media (min-width: ${L.medium}px) {
    height: 48px;
    line-height: 48px;
  }
`,Vd=c`
  margin: auto;
  width: 240px;
  align-items: center;
`,Hd=c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`,Ud=c`
  color: ${R.footerGrey};
  font-size: 14px;
  font-weight: ${F.medium};
  line-height: 130%;
`;function Wd({unit:e}){return U.createElement(U.Fragment,null,U.createElement(`div`,{className:Nd},U.createElement(`div`,{className:Pd},U.createElement(`div`,{className:Id},U.createElement(`div`,{className:Ld},`All of The Times.`,U.createElement(`br`,null),`For all that’s`,U.createElement(`br`,{className:Rd}),` happening now.`),U.createElement(`div`,{className:Fd},`Our best offer for your first`,` `,U.createElement(Ze,{oldPrice:`6 months`,currentPrice:`year`}),`.`),U.createElement(`p`,{className:Ud},`Cancel anytime.`)),U.createElement(`div`,{className:zd},U.createElement(z,{component:`a`,testId:`subscribe-button`,className:Bd,href:e?.content?.uri,target:I.Blank,onClick:e?.trackInteraction},`Continue to checkout`),U.createElement(`div`,{className:Vd},U.createElement(`div`,{className:Hd},U.createElement(ze,null),U.createElement(Re,null),U.createElement(Me,null)))))),U.createElement(G,{legalCopy:e?.content?.legal,surveyCampaign:`B`}))}function Gd({unit:e}){return e?.canShow?e.content.gatewayType===`PAYWALL`?Ke.isActive(Qe.getCurrentMoment())&&cd.isActive(Qe.getCurrentMoment())?U.createElement(Md,{unit:e}):Ke.isActive(Qe.getCurrentMoment())?U.createElement(yd,{unit:e}):cd.isActive(Qe.getCurrentMoment())?U.createElement(Wd,{unit:e}):U.createElement(sd,{unit:e}):e.content.gatewayType===`REGIWALL`?U.createElement(W,{unit:e}):null:null}function Kd(e){return Ke.isActive(Qe.getCurrentMoment())?{showPaymentMethods:!0,uri:T(`https://myaccount.nytimes.com/get-started`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(`4682aa6f-50b5-457e-9637-424731c7c090`).toString(),legal:`${$e} Subscription excludes print edition. Some games may be available without a subscription. Your payment method will automatically be charged in advance the introductory rate every 4 weeks for 1 year, and after 1 year the standard rate every 4 weeks. Your subscription will continue until you <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale#cancellation">cancel</a>. Cancellation takes effect at the end of your current billing period. Taxes may apply. Offer terms are subject to change.`,gatewayType:e.meter?.data?.gatewayType}:{showPaymentMethods:!0,uri:T(`https://myaccount.nytimes.com/get-started`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(`981b1f30-fe72-4186-92f5-5c6368715550`).toString(),legal:`${$e} Subscription excludes print edition. Some games may be available without a subscription. Your payment method will automatically be charged in advance the introductory rate every 4 weeks for 6 months, and after 6 months the standard rate every 4 weeks. Your subscription will continue until you <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale#cancellation">cancel</a>. Cancellation takes effect at the end of your current billing period. Taxes may apply. Offer terms are subject to change.`,gatewayType:e.meter?.data?.gatewayType}}function qd(e){let{responses:t}=e;if(!t.meter)return null;let n=t.meter.data;return!n?.gateway||n?.granted||!n?.gatewayEligible||n?.gatewayExempt?null:n.gatewayType===`PAYWALL`?{module:{label:`FALLBACK`,element:{name:j.Subscribe}}}:n.gatewayType===`REGIWALL`?{module:{label:`FALLBACK`,element:{name:j.Register}}}:null}function Jd(e){if(e.meter?.error)return!1;let t=e.meter?.data;return!(!t?.gateway||t?.granted||!t?.gatewayEligible||t?.gatewayExempt||!t?.gatewayType||![`PAYWALL`,`REGIWALL`].includes(t.gatewayType))}var Yd={component:Gd,content:Kd,tracking:qd,canShow:Jd};l();var Xd=c`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -8px;
`,Zd=c`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${R.white};
  align-self: center;
  margin: 20px 0px 48px;
  max-width: 1200px;
`;c`
  color: ${R.veryDarkGrey};
  font-family: ${P.franklin};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  line-height: 21px;
  margin-bottom: 20px;
`,c`
  height: 16px;
`;var Qd=c`
  background-color: ${R.gray97};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`,$d=c`
  color: ${R.veryDarkGrey};
  font-family: ${P.franklin};
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 20px;
  min-width: 220px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 24px;
    line-height: 28px;
    padding: 0px;
  }
`;c`
  text-decoration: line-through;
  color: ${R.grayLightContentContentPlaceholder};
`,c`
  white-space: nowrap;
`;var ef=c`
  position: relative;
  height: auto;
  width: 100%;

  @media (min-width: ${L.medium}px) {
    width: unset;
  }
`,tf=c`
  background-color: ${R.veryDarkGrey};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${R.white};
  display: block;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0.2px;
  line-height: 44px;
  text-align: center;
  text-decoration: none;
  width: 247px;
  margin: 0px auto;

  @media (min-width: ${L.mediumLarge}px) {
    max-width: 335px;
  }
`,nf=c`
  margin: 0px auto;
`;c`
  margin: auto;
  width: 240px;
  align-items: center;
`,c`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  margin-top: 16px;
`,c`
  text-align: center;
  margin-bottom: 16px;
`,c`
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 4px;
  margin-top: 0px;
  color: ${R.veryDarkGray};

  @media (min-width: ${L.medium}px) {
    font-size: 28px;
  }
`,c`
  margin: 0px;
  font-size: 14px;
  line-height: 18px;

  @media (min-width: ${L.medium}px) {
    line-height: 21px;
  }
`;var rf=c`
  font-size: 14px;
  line-height: 18px;
  font-family: ${P.franklin};
  font-style: normal;
  font-weight: 500;
  color: rgb(90, 90, 90);
  margin-top: 16px;
  text-align: center;

  a {
    color: ${R.veryDarkGrey};
  }

  @media (min-width: ${L.medium}px) {
    line-height: 21px;
  }
`;function af({unit:e}){return U.createElement(`div`,{className:Xd},U.createElement(`div`,{className:Zd},U.createElement(`div`,{className:Qd},U.createElement(`div`,{className:$d},`Log in through your organization to maintain complementary access to The New York Times.`),U.createElement(`div`,{className:ef},U.createElement(z,{component:`a`,testId:`reauth-btn`,className:tf,href:e?.content?.clickThroughURI,target:I.Blank,onClick:t=>e?.trackInteraction(t,{extraProps:{module:{element:{name:`reauth`,url:e?.content?.clickThroughURI}}}})},U.createElement(`p`,{className:nf},` `,e?.content?.ctaCopy||`Continue`)),U.createElement(`div`,{className:rf},U.createElement(`p`,null,U.createElement(`a`,{href:`https://www.nytimes.com/account/settings`,onClick:t=>{var n;(n=e?.trackInteraction)==null||n.call(e,t,{extraProps:{module:{element:{name:`disconnect-sso`,url:`https://www.nytimes.com/account/settings`}}}})}},e?.content?.disconnectText),U.createElement(`div`,null,`You will be redirected to your account page to disconnect single sign-on from your account.`)))))))}l();var of=c`
  display: flex;
  flex-direction: column;
  text-align: center;
`,sf=c`
  padding: 48px 0;
  align-items: center;
`,cf=c`
  color: ${D.background.primary};
  margin: 10px 0 0;
  text-align: center;
  width: 300px;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: ${P.franklin};
  font-size: var(--font-1, 12px);
  font-style: normal;
  line-height: 130%; /* 15.6px */

  b {
    font-weight: var(--fontWeight-bold, 700);
  }
`,lf=c`
  background: rgb(67 67 67 / 69%);
  backdrop-filter: blur(25px);
  width: 100%;
  height: 100%;
  justify-items: center;
`,uf=c`
  top: 71vh;
  @media (min-width: ${L.small}px) {
    top: 66vh;
  }

  @media (min-width: ${L.medium}px) and (max-width: ${L.mediumLarge}px) {
    /* showClass (GatewayContainer/styled.ts) normally shifts this up via
     * transform: translate(0, -42vh), landing its visual top at 66vh - 42vh = 24vh. Removing the
     * transform to let bottom: 0 work means top has to make up that difference directly, or the
     * sheet visually drops to a raw 66vh and its content gets squeezed/clipped at the bottom. */
    top: 24vh;
    bottom: 0;
    min-height: 0;
    transform: unset;

    /* gatewayContainerClass (GatewayContainer/styled.ts) has no explicit height, so it
     * shrinks to content and leaves the rest of this box empty below it. flex: 1 stretches it
     * (and our height: 100% paywallContainer inside it) to fill. */
    > div {
      flex: 1;
    }
  }
`,df=c`
  width: 300px;
`,ff=c`
  color: ${D.background.primary};
  text-align: center;
  font-style: normal;
  margin: 0 0 10px;

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
  }
`,pf=c`
  color: ${D.background.primary};
  text-align: center;
  font-family: NYTCheltenham;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  width: 250px;
  line-height: 115%; /* 36.8px */

  @media (min-width: 480px) {
    font-size: 36px;
    width: auto;
    max-width: 380px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    min-width: unset;
    max-width: 550px;
  }
`,mf=c`
  color: ${D.background.primary};
  text-align: center;
  font-family: NYTCheltenham;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  width: 250px;
  line-height: 115%; /* 36.8px */

  @media (min-width: 480px) {
    font-size: 36px;
    width: auto;
    max-width: 380px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    min-width: unset;
    max-width: none;
    white-space: nowrap;
  }
`,hf=c`
  white-space: nowrap;
`,gf=c`
  background: rgb(255 255 255 / 0%);
`,_f=c`
  margin-top: 43px;

  @media (min-width: ${L.mediumLarge}px) {
    margin-top: 48px;
  }
`,vf=c`
  background-color: ${R.black};
  div,
  div:nth-of-type(2) a,
  p,
  span {
    color: #a3a3a3;
  }
  hr {
    border-bottom: 0.2px solid #a3a3a3;
  }
`;l();var yf=c`
  justify-content: center;
  align-items: center;
`,bf=c`
  width: 269px;
  padding: 24px 16px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${D.stroke.tertiary};
  border-radius: 3px;
  background-color: ${D.background.primary};
`,xf=c`
  width: 275px;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-family: ${P.franklin};
  color: ${D.content.primary};
  gap: 20px;
`,Sf=c`
  font-size: 13px;
`,Cf=c`
  color: ${D.content.placeholder};
`,wf=c`
  white-space: nowrap;
`,Tf=c`
  font-style: normal;
  color: ${D.content.secondary};
`,Ef=c`
  font-style: normal;
  color: ${D.content.secondaryDim};
`;function Df(){return U.createElement(`div`,null,U.createElement(`svg`,{width:`20`,height:`142`,viewBox:`0 0 20 142`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM13.825 6.00002L15 7.20596L8.33333 14L5 10.6115L6.18333 9.41403L8.33333 11.5966L13.825 6.00002Z`,fill:`#121212`}),U.createElement(`path`,{d:`M10 22L10 59`,stroke:`#121212`,strokeWidth:`2`}),U.createElement(`circle`,{cx:`10`,cy:`71`,r:`6`,stroke:`#121212`,strokeWidth:`2`}),U.createElement(`path`,{d:`M10 83L10 120`,stroke:`#121212`}),U.createElement(`circle`,{cx:`10`,cy:`132`,r:`5.5`,stroke:`#121212`})))}function Of({unit:e}){let t=e?.content?.isPostAf,n=e?.content?.after7DaysFinePrint?U.createElement(O,{as:`div`,variant:`Text/12`,className:t?Ef:Tf},e?.content?.after7DaysFinePrint):null,r=e?.content?.timelineNowLabel??`Now`,i=e?.content?.timelineTodayLabel??`Today`;return U.createElement(k,{flexDirection:`column`,className:yf},U.createElement(`div`,{className:bf},U.createElement(Df,null),U.createElement(`div`,{className:xf},U.createElement(O,{as:`div`,variant:`Title/16`},r,U.createElement(O,{as:`div`,variant:`Text/14`},`Limited access to The Times.`)),U.createElement(O,{as:`div`,variant:`Title/16`},i,U.createElement(O,{as:`div`,variant:`Text/14`},`Free unlimited access for 7 days.`)),U.createElement(O,{as:`div`,variant:`Title/16`},`After 7 days`,U.createElement(O,{as:`div`,variant:`Text/14`,className:e?.content?.country===`CA`?Sf:``},` `,U.createElement(`s`,{className:Cf},e?.content?.strikeThroughPriceDisplay),t?` `:``,e?.content?.priceDisplay,` `,U.createElement(`span`,{className:wf},`for your first 6 months.`),n)))))}l();function kf({unit:e,clientProps:t}){let{unit:n}=A(He),{messageCap:r}=Ye({unit:`gateway`,level:Xe.Audience});(0,U.useEffect)(()=>{e?.canShow&&r.increment()},[e,r]);let i=``,a=``;if(e?.content?.offerInfo){let t=e?.content?.offerInfo?.billingTerms,n=e?.content?.offerInfo?.cancellationTerms;i=`${(e?.content?.offerInfo)?.offerTerms[0]} ${(e?.content?.offerInfo)?.offerTerms[1]}`,a=t.concat(n).join(` `)}let s=n?.content?.showApplePay||n?.content?.showGooglePay;return U.createElement(J,{unit:e,clientProps:{...t,fullHeight:e?.content?.fullHeight,className:`${gf} ${e?.content?.fullHeight?_f:uf}`}},U.createElement(`div`,{className:lf},U.createElement(k,{flexDirection:`column`,gap:2.5,className:o(sf)},U.createElement(`div`,{className:of},U.createElement(O,{as:`h2`,variant:`HeadlineNews/32`,className:o(ff)},e?.content?.isPostAf?`One day offer.`:`One day offer`),U.createElement(`div`,{className:o(e?.content?.isPostAf?mf:pf)},e?.content?.isPostAf?`Continue reading for free with a 7-day free trial.`:U.createElement(U.Fragment,null,`You’ve unlocked a 7-day free trial to`,` `,U.createElement(`span`,{className:hf},`The Times.`)))),U.createElement(Of,{unit:{content:{strikeThroughPriceDisplay:e?.content?.strikeThroughPriceDisplay,country:e?.content?.country,priceDisplay:e?.content?.priceDisplay,after7DaysFinePrint:e?.content?.after7DaysFinePrint,timelineNowLabel:e?.content?.timelineNowLabel,timelineTodayLabel:e?.content?.timelineTodayLabel,isPostAf:e?.content?.isPostAf}}}),U.createElement(`div`,null,U.createElement(`div`,null,U.createElement(Ue,{offerInfo:e?.content?.offerInfo,paymentOptionsStylesOverride:df,trackingOptions:{impression:{name:`gateway`,context:`paywall`,label:e?.campaign}},payflowUri:e?.content?.payflowUri,source:e?.content?.source,applePayButtonStyle:`white`,inverseColors:!0})),U.createElement(`div`,{className:o(cf)},U.createElement(`b`,null,`Cancel anytime.`),` You will not be charged if you cancel during your free trial.`)))),U.createElement(G,{legalCopy:s?a:e?.content?.legal,useArlTerms:s,arlOfferTerms:i,surveyCampaign:`AA`,offerDescription:e?.content?.offerDescription,extraFootnote:e?.content?.extraFootnote,showPaymentIcons:e?.content?.showPaymentIcons,boldedCancel:e?.content?.boldedCancel,overrideClass:vf}))}var Af=N(kf);function jf({unit:e}){let{messageCap:t}=Ye({unit:`gateway`,level:Xe.Audience});return(0,U.useEffect)(()=>{e?.canShow&&t.increment()},[e?.canShow,t]),U.createElement(X,{unit:e})}var Mf=N(jf);l();var Nf=c`
  display: flex;
  flex-direction: column;
  text-align: center;
`,Pf=c`
  padding: 48px 0;
  align-items: center;
`,Ff=c`
  color: ${D.content.secondaryDim};
  margin: 10px 0 0;
  text-align: center;
  width: 309px;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-style: normal;

  b {
    font-weight: ${F.bold};
  }
`,If=c`
  background: rgb(255 255 255 / 85%);
  backdrop-filter: blur(25px);
  width: 100%;
  height: 100%;
  justify-items: center;
`,Lf=c`
  top: 71vh;
  @media (min-width: ${L.small}px) {
    top: 66vh;
  }

  @media (min-width: ${L.medium}px) and (max-width: ${L.mediumLarge}px) {
    /* showClass (GatewayContainer/styled.ts) normally shifts this up via
     * transform: translate(0, -42vh), landing its visual top at 66vh - 42vh = 24vh. Removing the
     * transform to let bottom: 0 work means top has to make up that difference directly, or the
     * sheet visually drops to a raw 66vh and its content gets squeezed/clipped at the bottom. */
    top: 24vh;
    bottom: 0;
    min-height: 0;
    transform: unset;

    /* gatewayContainerClass (GatewayContainer/styled.ts) has no explicit height, so it
     * shrinks to content and leaves the rest of this box empty below it. flex: 1 stretches it
     * (and our height: 100% paywallContainer inside it) to fill. */
    > div {
      flex: 1;
    }
  }
`,Rf=c`
  width: 309px;
`,zf=c`
  color: ${D.content.primary};
  text-align: center;
  font-family: ${P.franklin};
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`,Bf=c`
  width: 40px;
  height: 2px;
  background-color: ${R.black};
  margin: 12px auto;

  @media (min-width: ${L.medium}px) {
    margin: 16px auto;
  }
`,Vf=c`
  margin: 0;
  color: ${R.black};
  text-align: center;
  font-family: ${P.cheltenham};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 250;
  width: 300px;
  line-height: 115%; /* 36.8px */

  @media (min-width: 480px) {
    width: auto;
  }

  @media (min-width: ${L.medium}px) {
    font-size: 2.75rem;
    min-width: unset;
  }
`,Hf=c`
  padding-bottom: 8px;
`,Uf=c`
  margin-top: 43px;

  @media (min-width: ${L.mediumLarge}px) {
    margin-top: 48px;
  }
`;l();var Wf=c`
  justify-content: center;
  align-items: center;
`,Gf=c`
  width: 275px;
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${D.stroke.tertiary};
  border-radius: 3px;
  background-color: ${D.background.primary};
`,Kf=c`
  width: 275px;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-family: ${P.franklin};
  color: ${D.content.primary};
  gap: 20px;
`,qf=c`
  font-size: 0.8125rem;
`,Jf=c`
  color: ${R.darkRed};
  white-space: nowrap;
`,Yf=c`
  background-color: ${R.saleRed};
  border-color: ${R.saleRed};
  color: ${D.background.primary};
  font-weight: 600;
  padding: 2px 8px 1px;
  height: auto;
  min-height: 18px;
  max-height: 36px;
`,Xf=c`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  z-index: 10;
  margin-bottom: -4%;
`,Zf=c`
  white-space: nowrap;
`,Qf=c`
  font-style: normal;
  color: ${D.content.secondary};
`;function $f(){return U.createElement(`div`,null,U.createElement(`svg`,{width:`20`,height:`182`,viewBox:`0 0 20 182`,fill:`none`,"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`},U.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM13.825 6.00002L15 7.20596L8.33333 14L5 10.6115L6.18333 9.41403L8.33333 11.5966L13.825 6.00002Z`,fill:`#121212`}),U.createElement(`path`,{d:`M10 18L10 64`,stroke:`#121212`,strokeWidth:`2`}),U.createElement(`circle`,{cx:`10`,cy:`72`,r:`8`,stroke:`#121212`,strokeWidth:`1`}),U.createElement(`svg`,{x:`3`,y:`63`,width:`14`,height:`17`,viewBox:`0 0 16 16`,fill:`none`},U.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5319 6.22127H5.91341V5.45304C5.91341 5.07427 6.03481 4.38861 6.37956 3.83325C6.53672 3.58016 6.73401 3.3597 6.99349 3.20239C7.2524 3.04543 7.57894 2.94784 8.00065 2.94784C8.42237 2.94784 8.7489 3.04543 9.00781 3.20239C9.2673 3.3597 9.46458 3.58016 9.62174 3.83325C9.65554 3.8877 9.68721 3.94342 9.71683 4H10.9566C10.8313 3.65034 10.6556 3.2953 10.416 2.97518C9.91918 2.31127 9.149 1.80005 8.00065 1.80005C6.71026 1.80005 5.89972 2.44551 5.41602 3.22453C4.93552 3.99844 4.77539 4.90563 4.77539 5.45304V6.22127H3.4694C3.15437 6.22127 2.9005 6.47909 2.90039 6.79484V13.4264C2.90039 13.7422 3.1543 14.0006 3.4694 14.0006H12.5319C12.847 14.0006 13.1009 13.7422 13.1009 13.4264V6.79484C13.1008 6.47909 12.8469 6.22127 12.5319 6.22127ZM11.9629 7.36841V12.8528H4.03841V7.36841H11.9629Z`,fill:`#121212`})),U.createElement(`path`,{d:`M10 80L10 124.85`,stroke:`#121212`,strokeWidth:`2`}),U.createElement(`svg`,{x:`2`,y:`124`,width:`17`,height:`17`,viewBox:`0 0 20 20`,fill:`none`},U.createElement(`rect`,{x:`1`,y:`1`,width:`18`,height:`18`,rx:`9`,stroke:`#121212`,strokeWidth:`1.2`}),U.createElement(`path`,{d:`M14.5 5.625H13V4.625H12V5.625H8V4.625H7V5.625H5.5C5.22 5.625 5 5.845 5 6.125V14.125C5 14.405 5.22 14.625 5.5 14.625H14.5C14.78 14.625 15 14.405 15 14.125V6.125C15 5.845 14.78 5.625 14.5 5.625ZM7 6.625H14V8.295H6V6.625H7ZM6 13.625V9.295H14V13.625H6Z`,fill:`#121212`})),U.createElement(`path`,{d:`M10 140.15L10 182`,stroke:`url(#paint0_linear_31269_910)`,strokeWidth:`2`}),U.createElement(`defs`,null,U.createElement(`linearGradient`,{id:`paint0_linear_31269_910`,x1:`10`,y1:`140.15`,x2:`10`,y2:`182`,gradientUnits:`userSpaceOnUse`},U.createElement(`stop`,{stopColor:`#121212`}),U.createElement(`stop`,{offset:`1`,stopColor:`#121212`,stopOpacity:`0`})))))}function ep({unit:e}){let t=!!e?.content?.isSale,n=e?.content?.after7DaysFinePrint?U.createElement(O,{as:`div`,variant:`Text/12`,className:Qf},e?.content?.after7DaysFinePrint):null;return U.createElement(k,{flexDirection:`column`,className:Wf},t&&U.createElement(`div`,{className:Xf},U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,noMaxWidth:!0,classNamePillSpan:Yf})),U.createElement(`div`,{className:Gf},U.createElement($f,null),U.createElement(`div`,{className:Kf},U.createElement(O,{as:`div`,variant:`Title/16`},`Today`,U.createElement(O,{as:`div`,variant:`Text/14`},`Claim your free trial.`)),U.createElement(O,{as:`div`,variant:`Title/16`},`Next 7 days`,U.createElement(O,{as:`div`,variant:`Text/14`},`Free unlimited access to all of The Times.`)),U.createElement(O,{as:`div`,variant:`Title/16`},`After 7 days`,U.createElement(O,{as:`div`,variant:`Text/14`,className:e?.content?.country===`CA`?qf:``},` `,e?.content?.priceDisplay,` `,t?U.createElement(U.Fragment,null,`for your first `,U.createElement(`span`,{className:me},`Was `),U.createElement(`s`,{className:Jf},`6 months`),` `,U.createElement(`span`,{className:me},`Now `),`year.`):U.createElement(`span`,{className:Zf},`for your first 6 months.`),n)))))}l();function tp({unit:e,clientProps:t}){let{unit:n}=A(He),{messageCap:r}=Ye({unit:`gateway`,level:Xe.Audience});(0,U.useEffect)(()=>{!e?.canShow||e?.campaign!==`CONV_FREE_TRIAL_BAU`||r.increment()},[e,r]);let i=``,a=``;if(e?.content?.offerInfo){let t=e?.content?.offerInfo?.billingTerms,n=e?.content?.offerInfo?.cancellationTerms;i=`${(e?.content?.offerInfo)?.offerTerms[0]} ${(e?.content?.offerInfo)?.offerTerms[1]}`,a=t.concat(n).join(` `)}let s=n?.content?.showApplePay||n?.content?.showGooglePay,c=!!e?.content?.isSale;return U.createElement(J,{unit:e,clientProps:{...t,fullHeight:e?.content?.fullHeight,className:`${e?.content?.fullHeight?Uf:Lf}`}},U.createElement(`div`,{className:If},U.createElement(k,{flexDirection:`column`,gap:2.5,className:o(Pf)},U.createElement(`div`,{className:Nf},c?null:U.createElement(U.Fragment,null,U.createElement(`div`,{className:o(zf)},`Welcome offer`),U.createElement(`div`,{className:Bf})),U.createElement(`h2`,{className:o(Vf,c&&Hf)},e?.content?.headline,U.createElement(`br`,null),`Plus 7 days free.`)),U.createElement(ep,{unit:{content:{country:e?.content?.country,priceDisplay:e?.content?.priceDisplay,after7DaysFinePrint:e?.content?.after7DaysFinePrint,isSale:c}}}),U.createElement(`div`,null,U.createElement(`div`,null,U.createElement(Ue,{offerInfo:e?.content?.offerInfo,paymentOptionsStylesOverride:Rf,trackingOptions:{impression:{name:`gateway`,context:`paywall`,label:e?.campaign}},payflowUri:e?.content?.payflowUri,source:e?.content?.source})),U.createElement(O,{as:`div`,variant:`Text/12`,className:o(Ff)},U.createElement(`b`,null,`Cancel anytime.`),` You will not be charged if you cancel during your free trial.`)))),U.createElement(G,{legalCopy:s?a:e?.content?.legal,useArlTerms:s,arlOfferTerms:i,surveyCampaign:`AA`,offerDescription:e?.content?.offerDescription,extraFootnote:e?.content?.extraFootnote,showPaymentIcons:e?.content?.showPaymentIcons,boldedCancel:e?.content?.boldedCancel,isSale:c}))}var np=N(tp),rp=t({arlText:()=>Rp,arlTextLinkBold:()=>zp,billedAs:()=>Tp,billedAsContainerAnnually:()=>Ep,billedAsContainerMonthly:()=>Dp,billingText:()=>fp,boldCancel:()=>Hp,cancelText:()=>mp,containerClassName:()=>Up,creditCardButton:()=>Ap,footerBillingText:()=>pp,footerContainer:()=>Mp,footerContent:()=>Np,footerContentModal:()=>Pp,footerContentNoLegal:()=>Fp,footerText:()=>Lp,label:()=>Cp,longHorizontalRule:()=>Ip,marginBottom:()=>gp,marginTop:()=>hp,offerContainer:()=>ap,offerDetailsContainer:()=>sp,offerSubtitle:()=>Bp,offerTitle:()=>cp,offerUrgencyMessaging:()=>lp,paddingTopZero:()=>op,paymentOptionsCheckoutContainer:()=>yp,paymentOptionsV2Container:()=>bp,paywallContainer:()=>ip,pill:()=>wp,priceAndBilledAs:()=>kp,priceExpression:()=>up,salePill:()=>jp,salePillContainer:()=>Vp,selector:()=>Op,strikethroughExpression:()=>dp,subline:()=>Wp,subscribeButtonClass:()=>vp,subscribeContainer:()=>_p,toggle:()=>xp,toggleSelected:()=>Sp});l();var ip=c`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${E.colors.background.primary.hex};
  margin: 32px 20px 0;
  border-radius: 16px;
  position: relative;
`,ap=c`
  width: 100%;
  max-width: none;
  padding: 22px 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,op=c`
  padding: 0 0 48px;

  @media (min-width: 376px) {
    padding: 22px 0 48px;
  }
`,sp=c`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 15px;
`,cp=c`
  font-family: ${P.cheltenham};
  font-size: 32px;
  font-weight: 200;
  line-height: 115%;
  color: ${E.colors.content.primary.hex};
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 32px;

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 40px;
    margin-bottom: 36px;
  }

  @media (max-width: ${L.small}px) {
    font-weight: 200;
  }
`,lp=c`
  font-size: 14px;
  font-weight: 600;
  color: ${E.colors.content.primary.hex};
  line-height: 24px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  margin-top: 20px;

  @media (min-width: ${L.mediumLarge}px) {
    line-height: 27px;
    letter-spacing: 0.72px;
  }
`,up=c`
  font-family: ${P.franklin};
  font-size: 26px;
  font-weight: 500;
  line-height: 36px;
  color: ${E.colors.content.primary.hex};

  @media (min-width: 481px) {
    font-size: 28px;
  }

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 30px;
  }
`,dp=c`
  color: ${E.colors.content.breaking.hex};
  text-decoration-line: line-through;
  text-decoration-thickness: 0.75px;
`,fp=c`
  width: 95%;
  margin: auto;
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: ${E.colors.content.secondary.hex};

  a {
    font-weight: 700;
    color: ${E.colors.content.primary.hex};
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }

  b {
    font-weight: 700;
  }
`,pp=c`
  color: ${R.footerGrey};
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    color: ${R.footerGrey};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }
`,mp=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  text-align: center;
  color: ${E.colors.content.secondary.hex};
`,hp=c`
  margin-top: 15px;
`,gp=c`
  margin-bottom: 20px;
`,_p=c`
  margin: 20px 40px 0;

  @media (min-width: ${L.mediumLarge}px) {
    margin: 20px 60px 0;
  }
`,vp=c`
  --fz: 16;
  --lh: 24;
  --padding-x: 10px;
  --padding-y: 10px;
  height: 44px;
  cursor: pointer;
  display: block;
  font-weight: 600;
  margin-top: 16px;
  background: var(--button-bg-color, ${E.colors.content.primary.hex});
  border: 1px solid var(--button-bg-color);
  border-radius: 3px;
  box-sizing: border-box;
  color: ${E.colors.background.primary.hex};
  font-family: ${P.franklin};
  font-size: calc(var(--fz) * 1px);
  line-height: calc(var(--lh) / var(--fz));
  padding: var(--padding-y) var(--padding-x);
  text-decoration: none;
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  min-width: 200px;
`,yp=c`
  max-width: calc(100% - 40px);

  a {
    max-width: 100%;
  }
`,bp=c`
  width: 335px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin-top: 32px;

  @media (min-width: ${L.mediumLarge}px) {
    margin-top: 24px;
  }
`,xp=c`
  display: flex;
  width: 300px;
  margin: 11px 0;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  outline: 1px solid ${R.lightgray};
  cursor: default;
`,Sp=c`
  outline: 2px solid ${E.colors.content.primary.hex};

  input {
    accent-color: ${E.colors.content.primary.hex};
  }
`,Cp=c`
  font-size: 18px;
  font-weight: 600;
  color: ${E.colors.content.primary.hex};
  margin-left: 10px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 18px;
  }
`,wp=c`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 4px 8px 3px;
  border-radius: 100px;
  background-color: ${E.colors.background.secondary.hex};
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.4px;
  color: ${E.colors.content.primary.hex};
  text-transform: uppercase;
  text-align: center;
  align-self: flex-start;
`,Tp=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${E.colors.content.secondary.hex};
  text-align: left;
  margin-top: 4px;

  @media (min-width: ${L.mediumLarge}px) {
    font-size: 14px;
  }
`,Ep=c`
  display: flex;
  width: 173px;
`,Dp=c`
  width: 245px;
  margin-left: 10px;

  @media (min-width: ${L.mediumLarge}px) {
    width: 270px;
  }
`,Op=c`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  text-align: left;
`,kp=c`
  display: flex;
  flex-direction: column;
`,Ap=c`
  background-color: ${E.colors.background.primary.hex};
  color: ${E.colors.content.primary.hex};
  border: 1px solid ${E.colors.content.primary.hex};
`,jp=c`
  background-color: ${E.colors.content.breaking.hex};
  color: ${E.colors.content.primary.hex};
  border-color: ${E.colors.content.breaking.hex};
  z-index: 100;
`,Mp=c`
  background-color: ${R.whiteDarkContentPrimary};
  display: flex;
  justify-content: center;
  width: 100%;
`,Np=c`
  padding: 16px 20px 24px;
  max-width: 980px;

  @media (min-width: ${L.xLarge}px) {
    padding: 16px 230px 24px;
  }
`,Pp=c`
  @media (min-width: ${L.xLarge}px) {
    padding: 16px 20px 24px;
  }
`,Fp=c`
  padding: 24px 20px;
  width: 100%;
  max-width: 980px;
  @media (min-width: ${L.xLarge}px) {
    padding: 24px 230px;
  }
`,Ip=c`
  margin: 12px 0;
  border: none;
  border-bottom: 1.5px solid ${R.lineGrey};
`,Lp=c`
  font-family: ${P.franklin};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.25px;
    text-underline-offset: 2px;
  }
`,Rp=c`
  b {
    font-weight: 700;
  }

  div {
    display: inline;

    a {
      font-weight: 500;
    }
  }
`,zp=c`
  display: flex;
  color: ${R.black};
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-top: 20px;
`,Bp=c`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-top: 20px;
  color: ${E.colors.content.primary.hex};
`,Vp=c`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`,Hp=c`
  font-weight: 700;
`,Up=c`
  width: 100%;
`,Wp=c`
  font-family: ${P.franklin};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  color: ${E.colors.content.primary.hex};
`;l();function Gp(e,t,n){let r=t?.[e]?.totalDueShort||t?.totalDueShort,i=e===`monthly`?`monthly`:`yearly`;return t?.isSale?U.createElement(U.Fragment,null,!t?.multipleOffers&&U.createElement(`div`,{className:o(Vp)},U.createElement(fe,{text:U.createElement(H,null),isInlaid:!1,noMaxWidth:!0,classNamePillSpan:jp})),U.createElement(`div`,{className:o(cp),"data-testid":`aa-${i}-header-copy`},`Resubscribe\xA0at a\xA0special\xA0rate.`)):n?U.createElement(`div`,{className:o(cp)},`Resubscribe for unlimited access to all of The Times.`):U.createElement(`div`,{className:o(cp)},`Enjoy unlimited access for `,r,` a`,` `,e===`monthly`?`week`:`year`,`.`)}function Kp(e,t,n){let r=e===`monthly`?`monthly`:`yearly`;return t?.multipleOffers?t.isSale?U.createElement(`div`,{className:o(gp)}):null:t?.isSale?U.createElement(`div`,{className:o(Wp),"data-testid":`aa-${r}-offer-copy`},`${t?.totalDueShort}/${e===`monthly`?`week`:`year`} for your first`,U.createElement(`br`,null),U.createElement(`span`,{className:o(dp)},e===`monthly`?`six months`:``),` year back.`):U.createElement(U.Fragment,null,U.createElement(`div`,{className:lp},`Welcome`,n?` back `:` `,`offer`),U.createElement(`div`,{className:up},U.createElement(`span`,{className:dp},t?.strikeThroughPriceDisplay),` `,t?.priceDisplay),U.createElement(`div`,{className:o(fp)},t?.billingPeriodText,` `))}function qp(e,t){let n=(t?.billingPeriodText)?.trim(),r=e===`monthly`?`monthly`:`yearly`;return U.createElement(`div`,{className:o(mp,hp),"data-testid":`aa-${r}-billed-as-copy`},n?`${n} Cancel anytime.`:`Cancel anytime.`)}function Jp({unit:e,parentCampaign:t}){return U.createElement(vc,{styles:rp,className:Up,getHeadlineComponent:Gp,getSublineComponent:Kp,getCancelText:qp,isContinue:!0,paymentOptionsCreditCardStylesOverride:Ap,applePayButtonStyle:`white`,parentCampaign:t??e?.campaign})}var Z=`9XHYQ`,Q=`allAccessSaleAcquisitionMonthly`,Yp=e=>({agents_per_regi:e.content?.agents_per_regi,friction_tier:e.content?.friction_tier,last_friction_ts:e.content?.last_friction_ts}),Xp=e=>({module:{name:M.Gateway,context:`upgrade`,label:e.campaign,other:[{key:`tb_details`,value:JSON.stringify({agentsPerRegi:e.staticContent?.agents_per_regi,frictionTier:e.staticContent?.friction_tier,lastFrictionTs:e.staticContent?.last_friction_ts})}]}}),Zp=e=>{let t=e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`});return t?.offerID?{showPaymentMethods:!0,price:`${t.totalDueWeeklyShort} a week.`,promoPriceDisplay:`${t.totalDueWeeklyShort} a week`,priceDisplay:`${t.totalDueWeeklyShort}/week`,strikeThroughPriceDisplay:t.fullPriceWeeklyShortNoCountryAbbreviation,strikeThroughPriceSubtext:t.fullPriceShort,billingPeriodText:`Billed as ${t.totalDueShort} every 4 weeks for your first 6 months, then\u00a0${t.fullPriceShort} thereafter.  Cancel anytime.`,legal:t.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,uriApplePay:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(t.offerID).withPaymentMethod(`paywall:apple_pay`).toString(),uriPayPal:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(t.offerID).withPaymentMethod(`paywall:paypal`).toString(),uri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(t.offerID).toString(),source:`paywall`,payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(t.offerID).toString(),offerInfo:t,trackingLabel:`CONV_ALL_ACCESS_ACQUISITION`,newPaywallHeight:!0,animateHeadline:!0}:{}},Qp=(e,t=!1,n=!1,r=!1)=>{let i=e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`}),a=e?.offer?.annual||e?.offer?.allAccessAcquisitionAnnual,o=i.totalDueWeeklyShort.replace(`.00`,``)+(n?` USD`:``);return{showPaymentMethods:!1,country:e.country,monthly:{price:`${o} a week.`,priceDisplay:`${o}/week`,strikeThroughPriceDisplay:i.fullPriceWeeklyShortNoCountryAbbreviation,strikeThroughPriceSubtext:i.fullPriceShort,billingPeriodText:`Billed as ${i.totalDueMonthlyShort} every ${t?`four`:4} weeks for your first ${t?`six`:6} months, then ${i.fullPriceShort} thereafter.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(i.offerID).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),uriPayPal:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(i.offerID).withPaymentMethod(`paywall:paypal`).toString(),uriApplePay:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(i.offerID).withPaymentMethod(`paywall:apple_pay`).toString(),source:`paywall`,payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(i.offerID).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),offerInfo:i},annually:{price:`${a.totalDueAnnualShort+(n?` USD`:``)} a year.`,priceDisplay:`${a.totalDueAnnualShort+(n?` USD`:``)}/year`,strikeThroughPriceDisplay:a.fullPriceAnnualShortNoCountryAbbreviation,strikeThroughPriceSubtext:a.fullPriceShort,billingPeriodText:r?`Billed as ${a.totalDueAnnualShort} once for your first year, then ${a.fullPriceShort} thereafter.`:`Billed once for your first year, then ${a.fullPriceShort} thereafter.`,clickThroughURI:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(a.offerID).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),uriPayPal:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(a.offerID).withPaymentMethod(`paywall:paypal`).toString(),uriApplePay:T(`https://myaccount.nytimes.com/get-started/payment`).withCampaignID({defaultCampaignID:`9XHYQ`}).withOfferID(a.offerID).withPaymentMethod(`paywall:apple_pay`).toString(),source:`paywall`,payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(a.offerID).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),offerInfo:a},legal:e.offer.combinedOffers?.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,trackingLabel:`CONV_ALL_ACCESS_ACQUISITION`,newPaywallHeight:!0,animateHeadline:!0}},$p=`9XHYQ`,em=(e,t,n=``,r=!1,i=!1)=>{let a=e.offer.annual||e.offer.allAccessAcquisitionAnnual,o=e.offer[t],s=o.promoPriceWeekly.replace(`.00`,``)+(i?` USD`:``),c=o.fullPriceMonthlyShort.replace(` `,`\xA0`),l=n===``?`CONV_ALL_ACCESS_ACQUISITION`:n;return{showPaymentMethods:!1,showPaymentIcons:!0,monthly:{price:`${o.totalDueMonthlyShort} a\u00a0month your first 6\u00a0months`,billingPeriodText:`Billed as ${o.totalDueMonthlyShort} every four weeks, then\u00a0${c}\u00a0thereafter.`,priceDisplay:`${s}/week`,strikeThroughPriceDisplay:o.fullPriceMonthlyShortNoCountryAbbreviation,strikeThroughPriceSubtext:o.fullPriceShort,clickThroughURI:v(o.offerID,Z),uriPayPal:v(o.offerID,Z,b.Paypal),uriApplePay:v(o.offerID,Z,b.ApplePay),source:`paywall`,payflowUri:v(o.offerID,Z),promoPriceDisplay:`${s} a week`,moduleElementName:r?j.Payflow:``,offerInfo:o},annually:{billingPeriodText:`Billed once for your first year.`,price:`${a.totalDueAnnualShort} your first year.`,priceDisplay:`${a.totalDueAnnualShort+(i?` USD`:``)}/year`,strikeThroughPriceDisplay:a.fullPriceAnnualShortNoCountryAbbreviation,strikeThroughPriceSubtext:a.fullPriceShort,clickThroughURI:v(a.offerID,Z),uriPayPal:v(a.offerID,Z,b.Paypal),uriApplePay:v(a.offerID,Z,b.ApplePay),source:`paywall`,payflowUri:v(a.offerID,Z),promoPriceDisplay:a.totalDueAnnualShort,moduleElementName:r?j.Payflow:``,offerInfo:a},legal:e.offer.combinedOffers?.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,trackingLabel:l,buttonText:`Subscribe now`,newPaywallHeight:!0,animateHeadline:!0}},tm=(e,t=!1)=>{let n=t?e.getPresentation({program:`Acquisition`,initiative:`AllAccessAcquisitionSaleMonthlyFreeTrial`}):e.offer.allAccessAcquisitionMonthlyFreeTrial,r=t?e.offer[Q]:e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`});return!n?.offerID||!r?.offerID?{renderOwnContainer:!0,hideTopper:!0,isSale:t}:{strikeThroughPriceDisplay:n.fullPriceWeeklyShortNoCountryAbbreviation,priceDisplay:`${r.totalDueWeeklyShort}/week`,country:e.country,after7DaysFinePrint:`After free trial, billed as ${r.totalDueMonthlyShort} every four weeks for your first ${t?`year`:`six months`}, then ${n.fullPriceMonthlyShort} thereafter.`,payflowUri:T(`https://myaccount.nytimes.com/get-started/payment`).withOfferID(n.offerID).withCampaignID({defaultCampaignID:`9XHYQ`}).toString(),source:`paywall`,legal:n.offerTerms,offerInfo:n,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.`,renderOwnContainer:!0,showPaymentIcons:!1,hideTopper:!0,isSale:t}},$=(e,t,n,r=!1)=>{let i=t?e?.offer?.[Q]:e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`}),a=t&&r?e.getPresentation({program:`Acquisition`,initiative:`AllAccessAnnualSaleIntl`}):e?.offer?.annual||e?.offer?.allAccessAcquisitionAnnual;if(!i?.offerID||!a?.offerID)return{hideTopper:!0,step1:{headline:``,isSale:t},step2:{monthly:void 0,annually:void 0,offerDescription:`An All Access subscription includes News, Games, Cooking, Audio, Wirecutter and The Athletic.`,initialOffer:`monthly`,offerOrder:`monthly-first`,isSale:t}};let{monthly:o,annually:s,offerDescription:c,legal:l}=t?em(e,Q,`CONV_TA_INTL_NEWS_2STEP_PAYWALL`):Qp(e,!0,!1,!0),u=typeof i.fullPriceMonthlyShort==`string`?i.fullPriceMonthlyShort.replace(` `,`\xA0`):``,d=(t&&typeof i.totalDueMonthlyShort==`string`&&typeof i.fullPriceMonthlyShort==`string`?`Billed as ${i.totalDueMonthlyShort} every four weeks for your first year, then ${u} thereafter.`:null)??o.billingPeriodText,f=t&&a?`Billed once for your first year, then ${a.fullPriceShort} thereafter.`:s.billingPeriodText;return{hideTopper:!0,showGatewayBackdrop:!0,isAnnualSaleTest:r,step1:{isSale:t,headlineLeadIn:r?n?`Resubscribe for `:`Get unlimited access for `:n?t?`Resubscribe for `:`Resubscribe for just`:t?`Unlimited access for `:`Welcome offer:`,headlineStrikeThroughPrice:t?o.strikeThroughPriceDisplay:s.strikeThroughPriceDisplay,headlinePriceDisplay:t?o.priceDisplay:s.priceDisplay,annualTestHeadlineStrikeThroughPrice:a.fullPriceAnnualShort,annualTestHeadlinePriceDisplay:`${a.totalDueAnnualShortNoCountryAbbreviation}/year`,productDescription:t?`Enjoy all of The Times — News, Games,
Cooking, Audio, Wirecutter and The Athletic.`:`Unlimited access to News, Games, Cooking,
Audio, Wirecutter and The Athletic.`,showProductIcons:!t,step1SaleHeadlineFirstYearPromo:t,step1SaleHeadlineFirstYearPromoNoLineBreakBeforePrice:t},step2:{monthly:{priceDisplay:r?`${o.priceDisplay} for your first year.`:o.priceDisplay,strikeThroughPriceDisplay:r?i.fullPriceWeeklyShortNoCountryAbbreviation:o.strikeThroughPriceDisplay,billingPeriodText:d,payflowUri:o.payflowUri,offerInfo:o.offerInfo,...t&&!r?{showFirstYearSixMonthsStrikeSuffix:!0}:{}},annually:r?{priceDisplay:`${a.totalDueAnnualShort}/year for your first year.`,strikeThroughPriceDisplay:a.fullPriceAnnualShort,billingPeriodText:`Billed as ${a.totalDueAnnualShort} once for your first year, then ${a.fullPriceAnnualShort} thereafter.`,payflowUri:v(a.offerID,Z),offerInfo:a}:{priceDisplay:s.priceDisplay,strikeThroughPriceDisplay:s.strikeThroughPriceDisplay,billingPeriodText:f,payflowUri:s.payflowUri,offerInfo:s.offerInfo},offerDescription:c||`An All Access subscription includes News, Games, Cooking, Audio, Wirecutter and The Athletic.`,legal:l,showPaymentIcons:!0,...!t||r?{initialOffer:`annually`,offerOrder:`annual-first`}:{initialOffer:`monthly`,offerOrder:`monthly-first`},isSale:t,country:e.country}}},nm=e=>{let t=e.offer.gamesSaleAcquisitionMonthly,n=e.offer.gamesSaleAcquisitionAnnual;return{showPaymentMethods:!0,source:`paywall`,trackingLabel:`CONV_GAMES_SALE_EVERGREEN_245`,midHeightSale:!0,offerDiscountExpression:e.content?.offerDiscountExpression,showMonthlyOfferPaywall:e.content?.showMonthlyOfferPaywall,monthly:{clickThroughURI:v(t.offerID,Z),priceDisplay:t.totalDueMonthlyShort,billedAsCopy1:`every four weeks for your first year`,billedAsCopy2:`every four weeks thereafter.`,strikeThroughPriceDisplay:t.fullPriceMonthlyShortNoCountryAbbreviation,billedAsFullPrice:t.fullPriceMonthlyShort,legal:Array.isArray(t.offerTerms)?t.offerTerms:[t.offerTerms],payflowUri:v(t.offerID,$p),offerInfo:t},annual:{clickThroughURI:v(n.offerID,Z),priceDisplay:n.totalDueAnnualShort,billedAsCopy1:`for the first year`,billedAsCopy2:`every year thereafter.`,strikeThroughPriceDisplay:n.fullPriceAnnualShortNoCountryAbbreviation,billedAsFullPrice:n.fullPriceAnnualShort,legal:Array.isArray(n.offerTerms)?n.offerTerms:[n.offerTerms],payflowUri:v(n.offerID,$p),offerInfo:n}}},rm=e=>Ee(e)?{headerText:`Upgrade to enjoy all of The\xA0Times at no extra cost for`,billingTerms:`Billed at your current rate every 4 weeks for 1 year. Cancel anytime.`}:ge(e)?{headerText:`Upgrade to enjoy all of The\xA0Times at a special rate for`,billingTerms:`Cancel anytime.`}:ve(e)?{headerText:`Upgrade to enjoy all of The\xA0Times at\xA0no\xA0extra\xA0cost for\xA0one\xA0year.`,billingTerms:`Billed at your current rate for one\xA0year. Cancel\xA0anytime.`}:_e(e)?{headerText:`Upgrade to enjoy all of The\xA0Times at\xA0no\xA0extra\xA0cost for\xA06\xA0months.`,billingTerms:`Billed at your current rate every 4\xA0weeks for 6\xA0months. Cancel\xA0anytime.`}:{headerText:`Upgrade to enjoy all of The\xA0Times.`,billingTerms:`Cancel anytime.`},im=e=>{let t=rm(e);return{saleUrgencyText:Te(e),clickThroughURI:pe(e,`paywall.news.vi.upgrade_to_aa`,``),action:j.ProductSwitch,offerTitle:t.headerText,billingPeriodText:t.billingTerms,legal:e.offer.productSwitch.offerTerms,offerDescription:`All Access includes news, plus Games, Cooking, Audio, Wirecutter and The\xA0Athletic.`,oesOfferAlias:`productSwitch`,offerId:xe(e,`productSwitch`),offerLabels:Ce(e,`productSwitch`)}},am=e=>({renderOwnContainer:!0,hideTopper:!0,convDownloadWallUxPt2Height:!0,shortHeight:!0,dialogAriaLabel:`Read this story in The Times app`,dialogExitVerb:`opening the app`,openInAppParam:`download-wall-free-article`,...e}),om=e=>({renderOwnContainer:!0,centeredAuthModal:!0,roundedModal:!0,showGatewayBackdrop:!0,hideTopper:!0,static:!0,openInAppParam:`download-wall-election-modal`,dialogAriaLabel:`Read election coverage free in the app`,dialogExitVerb:`opening the app`,...e}),sm={module:{name:M.Gateway,context:`appdownloadhardwall`}},cm=e=>({module:{label:e.campaign,other:[{key:`audience`,value:e.audience}]}}),lm=({isLoggedIn:e})=>({"1_modal":{component:fu,content:t=>om({isLoggedIn:e,electionAssetType:t.content?.electionAssetType}),tracking:sm}}),um={name:`gateway`,client:De(`vi`),onlyTrackWhenVisible:!1,enableOfferEligibility:!0,tracking:e=>{let t=e?.responses?.meter?.data?.gatewayType,n=e?.responses?.meter?.data?.gatewayTypeVariation,r=M.Gateway,i=`paywall`;return t===`REGIWALL`&&(r=M.Regiwall,i=`regiwall`),(n===`TRUNCATOR_HIGH`||n===`TRUNCATOR_LOW`)&&(i=`truncator`),{module:{name:r,context:i}}},fallback:Yd,campaigns:{DEFAULT:{component:Qu,audiences:{BAU:{component:X,content:()=>({animateHeadline:!0}),tracking:{module:{label:`DEFAULT`,element:{name:j.Subscribe}}}},Sale:{component:X,content:()=>({animateHeadline:!0}),tracking:{module:{label:`Sale`,element:{name:j.Subscribe}}}}}},GAMES_GAMES_CROSS_BOT_IN_CROSSPLAY_APP:{component:Rn,audiences:{iOS:{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytcrossplay://subscribe`}),tracking:e=>({module:{name:`gamesPaywallCrossbot`,context:_(`game_id`)||``,label:e.campaign,region:e.meterViewed,element:{name:j.Subscribe},other:[{key:`source_app`,value:`crossplay-ios`},{key:`native_app.asset.section`,value:`page-game-review`}]}})},Android:{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytcrossplay://subscribe`}),tracking:e=>({module:{name:`gamesPaywallCrossbot`,context:_(`game_id`)||``,label:e.campaign,region:e.meterViewed,element:{name:j.Subscribe},other:[{key:`source_app`,value:`crossplay-android`},{key:`native_app.asset.section`,value:`page-game-review`}]}})}}},CONV_WORDLEBOT_PAYWALL_IN_GAMES_APP_245:{component:Pn,audiences:{"1_variant_ios":{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytxwd://subscribe`}),tracking:{module:{label:`CONV_WORDLEBOT_PAYWALL_IN_GAMES_APP_245`,element:{name:j.Subscribe}}}},"1_variant_android":{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytxwd://subscribe`}),tracking:{module:{label:`CONV_WORDLEBOT_PAYWALL_IN_GAMES_APP_245`,element:{name:j.Subscribe}}}}}},GAMES_GAMES_CONNECTIONS_BOT_IN_APP_256:{component:In,audiences:{iOS:{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytxwd://subscribe`}),tracking:{module:{label:`GAMES_GAMES_CONNECTIONS_BOT_IN_APP_256`,element:{name:j.Subscribe}}}},Android:{content:()=>({isAppWebview:!0,midHeight:!0,ctaText:`See subscription options`,uri:`nytxwd://subscribe`}),tracking:{module:{label:`GAMES_GAMES_CONNECTIONS_BOT_IN_APP_256`,element:{name:j.Subscribe}}}}}},SUBCON_CONV_BAU_REGIWALL_231:{component:W,tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`SUBCON_CONV_BAU_REGIWALL_231`,element:{name:j.Register}}}},SUBCON_CONV_GOOGLE_EAFS_REGIWALL_8471:{component:W,tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`SUBCON_CONV_GOOGLE_EAFS_REGIWALL_8471`,element:{name:j.Register}}}},CONV_LOGIN_WALL_WITH_FREE_ARTICLE_265:{component:W,content:()=>({display:`regiwall_lire_newsletter_always_free`}),tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`CONV_LOGIN_WALL_WITH_FREE_ARTICLE_265`,element:{name:j.Register}}}},AUTH_LOGIN_MODAL_ALWAYS_FREE:{tests:[{statsigExperiment:{name:`auth_login_modal`,parameter:`variant`}}],audiences:{"0_control":{component:W,content:()=>({display:`regiwall_lire_newsletter_always_free`})},"1_expanded_form":{component:Ys,content:()=>({authLoginModalVariant:`expanded`,display:`regiwall_lire_newsletter_always_free`,centeredAuthModal:!0,showGatewayBackdrop:!0,hideTopper:!0,static:!0,dialogAriaLabel:`Log in or create an account`,dialogExitVerb:`logging in or creating an account`})},"2_collapsed_form":{component:Ys,content:()=>({authLoginModalVariant:`collapsed`,centeredAuthModal:!0,showGatewayBackdrop:!0,hideTopper:!0,static:!0,dialogAriaLabel:`Log in or create an account`,dialogExitVerb:`logging in or creating an account`})}},tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`AUTH_LOGIN_MODAL_ALWAYS_FREE`,element:{name:j.Register}}}},CONV_ANON_ELECTION_MODAL_2610:{tests:[{statsigExperiment:{name:`conv_anon_election_modal`,parameter:`variant`}}],audiences:{...lm({isLoggedIn:!1})},tracking:cm},CONV_REGI_ELECTION_MODAL_2610:{tests:[{statsigExperiment:{name:`conv_regi_election_modal`,parameter:`variant`}}],audiences:{...lm({isLoggedIn:!0})},tracking:cm},UJ_OPEN_IN_APP_REGIWALL:{audiences:{open_in_app_regiwall:{component:gs,content:()=>({shortHeight:!0,display:`open_in_app_regiwall`,renderOwnContainer:!0}),tracking:{module:{name:M.Regiwall,label:`known-sub-regiwall`,context:`standard`,region:`regiwall`}}}}},JOURNEYS_GIFT_SHARE_DIFF_TEST:{audiences:{regiwall_no_paywall:{component:Es,content:()=>({display:`gift_share_regiwall_no_paywall`,renderOwnContainer:!0}),tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`JOURNEYS_GIFT_SHARE_DIFF_TEST`,element:{name:j.Register}}}},regiwall_unlocked_story:{component:Es,content:()=>({display:`gift_share_regiwall_unlocked_story`,renderOwnContainer:!0}),tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`JOURNEYS_GIFT_SHARE_DIFF_TEST`,element:{name:j.Register}}}},regiwall_free_access:{component:Es,content:()=>({display:`gift_share_regiwall_free_access`,renderOwnContainer:!0}),tracking:{module:{name:M.Regiwall,context:`regiwall`,label:`JOURNEYS_GIFT_SHARE_DIFF_TEST`,element:{name:j.Register}}}}}},CONV_ALL_ACCESS_ACQUISITION:{component:X,content:()=>({newPaywallHeight:!0,animateHeadline:!0})},CONV_FREE_TRIAL_BAU:{audiences:{"0_control":{component:X,content:()=>({newPaywallHeight:!0,animateHeadline:!0})},"1_variant_pulsed":{component:Af,content:tm},"2_variant_static":{component:np,content:e=>({...tm(e,!1),headline:`Get all of The\xA0Times.`})},"2_variant_static_sale":{component:np,content:e=>({...tm(e,!0),headline:`Discover The\xA0Times with our best offer.`})}}},SUBCON_CONV_WORDLEBOT_238:{component:Ft,content:e=>({...Zp(e),trackingLabel:`SUBCON_CONV_WORDLEBOT_238`}),tracking:{module:{label:`SUBCON_CONV_WORDLEBOT_238`,element:{name:j.Subscribe}}}},CONV_FORMERS_SALE_PAYWALL:{component:X,audiences:{"0_control":{content:()=>({newPaywallHeight:!0,animateHeadline:!0})},"1_design_clean":{component:Jp,content:()=>({newPaywallHeight:!0,animateHeadline:!0})}},tracking:{module:{label:`CONV_FORMERS_SALE_PAYWALL`}}},CONV_FORMERS_LOOKBACK_TEST_1_3:{component:X,audiences:{"1_formers_messaging":{content:()=>({newPaywallHeight:!0,animateHeadline:!0,IsFormerNews:!0})}}},"CONV_FORMERS_LOOKBACK_TEST_3+":{component:X,audiences:{"1_formers_messaging":{content:()=>({newPaywallHeight:!0,animateHeadline:!0,IsFormerNews:!0})}}},[Je.name]:{component:Tn,audiences:{eligible_for_games_sale_offer:{content:e=>({...nm(e),country:e.country,paymentOptionsV2:e.country===`US`})},eligible_for_games_sale_offer_app:{content:e=>({...nm(e),ctaText:`See subscription options`,uri:`nytxwd://subscribe`,isAppWebview:!0,midHeightSale:!0})}},tracking:{module:{label:Je.name,region:`1`}}},ACCT_UPGRADE_248:{component:an,tracking:e=>({module:{label:`ACCT_UPGRADE_248`,other:be(e)}}),audiences:{UpgradeEligible:{content:e=>im(e)}}},ACCT_CONFIRM_ACCOUNT_CODEWALL_326:{audiences:{"1_Variant":{component:ba,content:Yp}},tracking:Xp},ACCT_CODEWALL_FREQUENCY_CAP_0926:{component:ba,tracking:Xp,audiences:{control_no_cap:{content:Yp},cap_2_per_day:{content:Yp},cap_7_per_week:{content:Yp}}},B2B_SSO_USER_RENEWAL_252:{component:af,content:()=>({clickThroughURI:`https://nytimes.com/activate-access/SSO?reauth=true`,disconnectText:`I don't work for that organization anymore.`}),tracking:{module:{label:`B2B_SSO_USER_RENEWAL_252`}}},JOURNEYS_DOWNLOAD_WALL_TEST:{audiences:{"0_control":{component:wl,content:()=>({renderOwnContainer:!0,hideTopper:!0,convDownloadWallUxPt2Height:!0,dialogAriaLabel:`Read this story in The Times app`,dialogExitVerb:`opening the app`,openInAppParam:`download-wall-free-article`}),tracking:{module:{context:`appdownloadhardwall`}}},"1_no_cc":{component:Wu,content:()=>({renderOwnContainer:!0,hideTopper:!0,dialogAriaLabel:`Read this story in The Times app`,dialogExitVerb:`opening the app`,openInAppParam:`download-wall-free-article`,headerText:`Read this story for free.`,bodyTextLine1:`Your first month in the app is free.`,bodyTextLine2:`No credit card required.`}),tracking:{module:{context:`appdownloadhardwall`}}},"2_free_stories":{component:Wu,content:()=>({renderOwnContainer:!0,hideTopper:!0,dialogAriaLabel:`Read this story in The Times app`,dialogExitVerb:`opening the app`,openInAppParam:`download-wall-free-article`,headerText:`Read this story for free.`,bodyTextLine1:`Plus, explore a daily selection of`,bodyTextLine2:`free-to-read stories in the app.`}),tracking:{module:{context:`appdownloadhardwall`}}}},tests:[{statsigExperiment:{name:`journeys_download_wall_test`,parameter:`variant`}}]},METER_APP_DOWNLOAD_WALL:{audiences:{"1_downloadwall_paywall":{component:wl,content:()=>({renderOwnContainer:!0,hideTopper:!0,convDownloadWallUxPt2Height:!0,openInAppParam:`download-wall-free-article`}),tracking:{module:{context:`appdownloadhardwall`}}},"1_downloadwall_paywall_formers":{component:wl,content:()=>({renderOwnContainer:!0,hideTopper:!0,convDownloadWallUxPt2Height:!0,openInAppParam:`download-wall-free-article`}),tracking:{module:{context:`appdownloadhardwall`}}}}},CONV_PAYWALL_FREE_TRIAL_1X_YEAR_2510:{audiences:{"1_blur_2607":{component:Af,content:tm}},tracking:{module:{label:`CONV_PAYWALL_FREE_TRIAL_1X_YEAR_2510`}}},CONV_PAYWALL_POST_AF:{tests:[{statsigExperiment:{name:`conv_paywall_post_af`,parameter:`variant`}}],audiences:{"0_control":{component:Mf,content:()=>({newPaywallHeight:!0,animateHeadline:!0})},"1_continue_reading_free_ft":{component:Af,content:e=>({...tm(e),timelineNowLabel:`Current access`,timelineTodayLabel:`Starting today`,isPostAf:!0})}}},CONV_TA_INTL_NEWS_2STEP_PAYWALL:{audiences:{bau:{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>$(e,!1,!1)},sale:{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>$(e,!0,!1)}},tracking:{module:{label:`CONV_TA_INTL_NEWS_2STEP_PAYWALL`}}},CONV_INTL_PAYWALL_ANNUAL_SALE_OFFER_2_STEP:{audiences:{"0_control":{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>{let t=!!e.content?.IsFormerNews;return{...$(e,!0,t),isFormerNews:t}}},"1_variant":{component:K,combinedOfferStrategy:[{program:`Acquisition`,initiative:`AllAccessSaleMonthly`},{program:`Acquisition`,initiative:`AllAccessAnnualSaleIntl`}],content:e=>{let t=!!e.content?.IsFormerNews;return{...$(e,!0,t,!0),isFormerNews:t}}}},tracking:{module:{label:`CONV_INTL_PAYWALL_ANNUAL_SALE_OFFER_2_STEP`}},tests:[{statsigExperiment:{name:`conv_intl_paywall_annual_sale_offer_2_step`,parameter:`variant`}}]},CONV_TA_INTL_PAYWALL_PAYMENT_METHODS_MESSAGING:{audiences:{control_bau:{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>$(e,!1,!1)},control_bau_formers:{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!1,!0),isFormerNews:!0})},control_sale:{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>$(e,!0,!1)},control_sale_formers:{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!0,!0),isFormerNews:!0})},variant_bau:{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>$(e,!1,!1)},variant_bau_formers:{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!1,!0),isFormerNews:!0})},variant_sale:{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>$(e,!0,!1)},variant_sale_formers:{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!0,!0),isFormerNews:!0})}},tracking:{module:{label:`CONV_TA_INTL_PAYWALL_PAYMENT_METHODS_MESSAGING`}}},CONV_DOWNLOAD_WALL_ITERATION_3:{audiences:{"0_control":{component:wl,content:()=>({renderOwnContainer:!0,hideTopper:!0,convDownloadWallUxPt2Height:!0,dialogAriaLabel:`Read this story in The Times app`,dialogExitVerb:`opening the app`}),tracking:{module:{context:`appdownloadhardwall`}}},"1_variant":{component:dl,content:()=>({renderOwnContainer:!0,hideTopper:!0,dialogAriaLabel:`Download the app to continue reading`,dialogExitVerb:`downloading the app`,subscribeCta:`or subscribe to read on web`}),tracking:{module:{context:`appdownloadhardwall`}}}},tests:[{statsigExperiment:{name:`conv_download_wall_iteration_3`,parameter:`variant`}}]},CONV_DOWNLOAD_WALL_BANDIT_8491:{component:Hl,tracking:e=>({module:{context:`appdownloadhardwall`,label:e.campaign,other:[{key:`audience`,value:e.audience},{key:`intents`,value:[`appDownload`]}]}}),audiences:{version_1:{content:()=>am({headlineText:`Read this story free
in The Times app.`,ctaText:`Continue in the app`,linkText:`or subscribe to read on web`})},version_2:{content:()=>am({headlineText:`Read this story free
in The Times app.`,subtextText:`Explore Cooking, The Athletic and Games, too.`,ctaText:`Continue in the app`,linkText:`or subscribe to read on web`})},version_3:{content:()=>am({headlineText:`Read this story and all
election coverage—
free in the app.`,accentBar:!0,ctaText:`Continue in the app`,linkText:`or subscribe to read on web`})},version_5:{content:()=>am({headlineText:`Follow this story in real time with the app.`,isLiveBlog:!0,liveBadgeText:`LIVE`,liveUpdatedText:`Updated 1 minute ago.`,ctaText:`Open in the app`,linkText:`or subscribe to read on web`})},version_6:{component:ju,content:()=>am({cardLayout:`sideBySide`,headlineText:`Read this story with one
of the following options.`,appCardHeadline:`Read for free
in the app.`,subscribeCardHeadline:`Subscribe to read on web.`})},version_7:{component:ju,content:e=>{let t=am({cardLayout:`stacked`,headlineText:`Read this story with one of
the following options.`,appCardHeadline:`Read for free in the app.`,appCtaText:`Continue in the app`,subscribeCtaText:`Learn more`}),n=e.content?.AllAccessPromotionActive===!0,r=n?e?.offer?.[Q]||e.getPresentation({program:`Acquisition`,initiative:`AllAccessSaleMonthly`}):e?.offer?.monthly||e.getPresentation({program:`Acquisition`,initiative:`AllAccessMonthly`});return r?.offerID?{...t,...n&&{showSaleUrgency:!0},subscribeCardHeadlinePrefix:`Subscribe for`,strikeThroughPriceDisplay:r.fullPriceWeeklyShortNoCountryAbbreviation,priceDisplay:r.totalDueWeeklyShort,subscribeCardPromoDuration:n?r.promoDuration:`six months`}:{...t,subscribeCardHeadline:`Subscribe to read on web.`}}}}},CONV_FORMERS_2_STEP_PAYWALL:{audiences:{"3_annual_offer_product_breadth_bau":{component:K,combinedOfferAliases:[`allAccessAcquisitionMonthly`,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!1,!0),isFormerNews:!0}),tracking:{module:{label:`CONV_FORMERS_2_STEP_PAYWALL`}}},"3_annual_offer_product_breadth_sale":{component:K,combinedOfferAliases:[Q,`allAccessAcquisitionAnnual`],content:e=>({...$(e,!0,!0),isFormerNews:!0}),tracking:{module:{label:`CONV_FORMERS_2_STEP_PAYWALL`}}}}}}},dm=()=>{let e=d(),t=U.useContext(f),{unit:n}=A(um);return typeof window>`u`?{...t,showGateway:n.canShow}:e?.internalPreviewConfig?.meter===`off`||window?.__preloadedData?.config?.internalPreviewConfig?.meter===`off`?{...t,showGateway:!1}:vi.env.ENVIRONMENT===`prd`?{...t,showGateway:n.canShow}:new URLSearchParams(window?.location?.search).has(`pagecount`)?{...t,showGateway:!1}:{...t,showGateway:n.canShow}};export{ps as a,ms as i,um as n,J as o,xl as r,dm as t};
//# sourceMappingURL=useMeter-D_MARkAK.js.map