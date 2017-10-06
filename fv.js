/*

*/

var warn = "#fecfcf";

function onFormLoad()
{
    var btn = document.getElementById("myBtn");
    btn.addEventListener("click", validateForm, false)
}



function validateForm()
{
    //
    var email = document.getElementById("emailId");
    var name = document.getElementById("nameId");
    var phone = document.getElementById("phoneId");
    var radio = document.getElementById("radioMain");


    //
    if (email.value === "")
    {
        email.style.background = warn;
        email.style.border = "1px solid red";
    }
    else
    {
        email.style.background = "";
        email.style.border = "";
    }


    //
    if (name.value === "")
    {
        name.style.background = warn;
        name.style.border = "1px solid red";
    }
    else
    {
        name.style.background = "";
        name.style.border = "";
    }


    //
    if (phone.value === "")
    {
        phone.style.background = warn;
        phone.style.border = "1px solid red";
    }
    else
    {
        phone.style.background = "";
        phone.style.border = "";
    }


     //
     if (radio.value === "")
     {
         radio.style.background = warn;
         radio.style.border = "1px solid red";
     }
     else
     {
         radio.style.background = "";
         radio.style.border = "";
     }
}


window.addEventListener("load", onFormLoad, false);