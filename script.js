type="text/javascript">
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-EOXVMFT8UBRB-2");

function allowuser(form) {
    let a = document.getElementById("user").value;
    var b="";
    b= a.substr(8,5);
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