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
    var warnBox = document.getElementById("warning");
    var email = document.getElementById("emailId");
    var name = document.getElementById("nameId");
    var phone = document.getElementById("phoneId");
    var radio0 = document.getElementById("radio1");
    var radio1 = document.getElementById("radio2");
    var radio2 = document.getElementById("radio3");


    //
    if (email.value === "")
    {
        email.style.background = warn;
        email.style.border = "1px solid red";
        warnBox.style.display = "block";
    }
    else
    {
        email.style.background = "";
        email.style.border = "";
        warnBox.style.display = "none";
    }


    //
    if (name.value === "")
    {
        name.style.background = warn;
        name.style.border = "1px solid red";
        warnBox.style.display = "block";
    }
    else
    {
        name.style.background = "";
        name.style.border = "";
        warnBox.style.display = "none";
    }


    //
    if (phone.value === "")
    {
        phone.style.background = warn;
        phone.style.border = "1px solid red";
        warnBox.style.display = "block";
    }
    else if ()
    {
        
    }
    else
    {
        phone.style.background = "";
        phone.style.border = "";
        warnBox.style.display = "none";
    }


     //
     if(radio0.checked === false && radio1.checked === false && radio2.checked === false)
     {
        radio0.style.outline = "1px solid red";
        radio1.style.outline = "1px solid red";;
        radio2.style.outline = "1px solid red";
        warnBox.style.display = "block";
     }
     else
     {
        radio0.style.outline = "";
        radio1.style.outline = "";
        radio2.style.outline = "";
        warnBox.style.display = "none";
     }
}


window.addEventListener("load", onFormLoad, false);