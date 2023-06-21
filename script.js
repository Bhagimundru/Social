function allowuser(form) {
    let a = document.getElementById("user").value;
    var b="";
    b= a.substr(8,5);
    var id = b;
    //passing user and account objects:
    /*aptrinsic("identify",
        {
            //User Fields
            "id": b, // Required for logged in app users
            "email": a,
            "userrole": "Admin",
        
        },
        {
            //Account Fields
            "id": "Account6", //Required
        });*/
        alert("Valid User");
        form.action = "Landingpage.html";
        alert("Logged in user id :"+b);
    return b;
}