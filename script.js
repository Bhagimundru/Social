/*type="text/javascript">
!function(){"use strict";var sdkBaseUrl="https://cdn.rudderlabs.com/v3";var sdkName="rsa.min.js";var asyncScript=true
;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession"]
;for(var t=0;t<e.length;t++){var n=e[t];window.rudderanalytics[n]=function(e){return function(){
window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(n)}try{
new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
if(window.rudderAnalyticsMount=function(){
"undefined"==typeof globalThis&&(Object.defineProperty(Object.prototype,"__globalThis_magic__",{get:function get(){
return this},configurable:true}),__globalThis_magic__.globalThis=__globalThis_magic__,
delete Object.prototype.__globalThis_magic__);var e=document.createElement("script")
;e.src="".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),e.async=asyncScript,
document.head?document.head.appendChild(e):document.body.appendChild(e)
},"undefined"==typeof Promise||"undefined"==typeof globalThis){var d=document.createElement("script")
;d.src="https://polyfill.io/v3/polyfill.min.js?features=Symbol%2CPromise&callback=rudderAnalyticsMount",
d.async=asyncScript,document.head?document.head.appendChild(d):document.body.appendChild(d)}else{
window.rudderAnalyticsMount()}window.rudderanalytics.load("2Xx5eab4YxSb0TMDi6UDQnrvkGL","https://gainsightxhbpd.dataplane.rudderstack.com",{})}();   */ 


/*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GAPBOYI51MQU-2");*/


  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MTUFRPVCOSHV-2");

function allowuser(form) {
    let a = document.getElementById("user").value;
    var b="";
    b= a.substr(1,5);
    var id = b;
    //passing user and account objects:
    aptrinsic("identify",
        {
            //User Fields
            "id": b, // Required for logged in app users
            "email": a,
            "userrole": "Admin",
        
        },
        {
            //Account Fields
            "id": "Account6", //Required
        });
        alert("Valid User");
        form.action = "Landingpage.html";
        alert("Logged in user id :"+b);
}