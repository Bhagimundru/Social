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
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GO5IB5Z4B0LB-2");

  (function() {
    var data = [{"firstName":"Bernard","lastName":"Campbell","company":"Campbell Networks Ltd"},{"firstName":"Lily","lastName":"Fairclough","company":"Fairclough Software Ltd"},{"firstName":"Roland","lastName":"Adderley","company":"Adderley Productions Ltd"},{"firstName":"Lydia","lastName":"Penn","company":"Penn Health Products Ltd"},{"firstName":"Mark","lastName":"Radcliffe","company":"Premier Pet Supplies Ltd"},{"firstName":"Linda","lastName":"Thorne","company":"Thorne Brewery Ltd"},{"firstName":"Simeon","lastName":"Allen","company":"Allen Distribution Ltd"},{"firstName":"Tia","lastName":"Sylvester","company":"Sylvester Disposal Ltd"},{"firstName":"Frederick","lastName":"Hudson","company":"Summit Plumbing Ltd"},{"firstName":"Elizabeth","lastName":"Presley","company":"Presley Plant Hire Ltd"},{"firstName":"Edward","lastName":"Ratner","company":"Ratner Photography Ltd"},{"firstName":"Renee","lastName":"Yeoman","company":"Summit Tractors Ltd"},{"firstName":"Ashley","lastName":"Kilkenny","company":"Kilkenny Productions Ltd"},{"firstName":"Donna","lastName":"Quant","company":"Fine Beauty Products Ltd"},{"firstName":"Glen","lastName":"Talbot","company":"Astral Coaches Ltd"},{"firstName":"Kathy","lastName":"Hammerton","company":"Classic Entertainment Ltd"},{"firstName":"Darryl","lastName":"Keays","company":"Keays Kitchens Ltd"},{"firstName":"Alice","lastName":"Turnbull","company":"Turnbull Workwear Ltd"},{"firstName":"Clifford","lastName":"James","company":"Phoenix Fitness Products Ltd"},{"firstName":"Carla","lastName":"Newbry","company":"Newbry Business Services Ltd"},{"firstName":"Tyler","lastName":"Pickering","company":"Riverside Technical Services Ltd"},{"firstName":"Olivia","lastName":"Hanley","company":"Hanley Insulation Services Ltd"},{"firstName":"Geoffrey","lastName":"Preston","company":"Preston Training Ltd"},{"firstName":"Carla","lastName":"Radley","company":"Radley Express Ltd"},{"firstName":"Quincy","lastName":"Bentley","company":"Bentley Disposal Ltd"},{"firstName":"Dawn","lastName":"Umbridge","company":"Umbridge Brewery Ltd"},{"firstName":"Cecil","lastName":"Abbott","company":"Abbott Coverings Ltd"},{"firstName":"Jennifer","lastName":"Neill","company":"Neill Finishing Ltd"},{"firstName":"Bernard","lastName":"Renley","company":"Renley Services Ltd"},{"firstName":"Ruth","lastName":"Maltby","company":"Maltby Crafts Ltd"},{"firstName":"Roger","lastName":"Owens","company":"Owens Kitchens Ltd"},{"firstName":"Sarah","lastName":"Kilbane","company":"On Top Marine Equipment Ltd"},{"firstName":"Harvey","lastName":"Naylor","company":"Naylor Powdered Coatings Ltd"},{"firstName":"Ursula","lastName":"Keats","company":"Keats Waste Disposal Ltd"},{"firstName":"Lewis","lastName":"Halsall","company":"Halsall Compressors Ltd"},{"firstName":"Geraldine","lastName":"Hobbs","company":"Hobbs Cameras Ltd"},{"firstName":"Liam","lastName":"Netherton","company":"Netherton Tools Ltd"},{"firstName":"Margaret","lastName":"Cartwright","company":"Cartwright Entertainment Ltd"},{"firstName":"Aaron","lastName":"Collins","company":"Collins Double Glazing Ltd"},{"firstName":"Sandra","lastName":"Peel","company":"Super Luxury Cars Ltd"},{"firstName":"Conrad","lastName":"Boatman","company":"Eastwood Appliances Ltd"},{"firstName":"Angela","lastName":"Saddlemore","company":"Saddlemore Fixings Ltd"},{"firstName":"Jimmy","lastName":"Clayton","company":"Clayton Tractors Ltd"},{"firstName":"Bethany","lastName":"Carter","company":"Carter Manufacturing Ltd"},{"firstName":"Paul","lastName":"Atkins","company":"Atkins Removals Ltd"},{"firstName":"Xena","lastName":"Eckard","company":"Eckard Lighting Services Ltd"},{"firstName":"Steven","lastName":"Aitken","company":"Phoenix Workshops Ltd"},{"firstName":"Dawn","lastName":"Dylan","company":"Dylan Transport Ltd"},{"firstName":"Larry","lastName":"Campbell","company":"Campbell Workshops Ltd"},{"firstName":"Kimberley","lastName":"Carter","company":"Carter Entertainment Ltd"}];
    if (document.cookie.indexOf('apit.uid') == -1){
    var random = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    var user = data[random];
    aptrinsic("identify",
  {
    "id": user.firstName+"."+user.lastName+"@gmail.com",
    "email": user.firstName+"."+user.lastName+"@gmail.com",
    "firstName": user.firstName,
    "lastName": user.lastName,
    "signUpDate": 1522697426479
  },
  {
    "id":user.company,
    "name":user.company,
    "parentGroupId" : "A2Z",
     "sfdcId": "00SFDC1"
 });
alert("Valid User");
 form.action = "Landingpage.html";
}})()
;

/*function allowuser(form) {
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
}*/
