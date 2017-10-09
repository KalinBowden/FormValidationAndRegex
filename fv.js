/*

*/

var warn = "#fecfcf";
var regex0 = /([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}\.[0-9]{3}\.[0-9]{4})/
var regex1 = /([0-9a-zA-Z\.\_\-]{0,}@[0-9a-zA-Z\.\_\-]{0,}\.[0-9a-zA-z]{2,})/

function onFormLoad()
{
    var btn = document.getElementById("myBtn");
    btn.addEventListener("click", validateForm, false)
}



function validateForm()
{

    // Function level variables
    var warnBox = document.getElementById("warning");
    var email = document.getElementById("emailId");
    var name = document.getElementById("nameId");
    var phone = document.getElementById("phoneId");
    var radio0 = document.getElementById("radio1");
    var radio1 = document.getElementById("radio2");
    var radio2 = document.getElementById("radio3");
    var duck = document.getElementById("duckSelect");
    var formValid = true;
    var mgs = "";

    try
    {
        // Reset the error msg
        msg = "";
        formValid = true;


        // Test for a proper email
        if (email.value === "")
        {
            email.style.background = warn;
            email.style.border = "1px solid red";
            msg += "Please include your email.";
            formValid = false;
        }
        else if (!regex1.test(email.value))
        {
            email.style.background = warn;
            email.style.border = "1px solid red";
            msg += "Please include you full email address.";
            formValid = false;
        }
        else
        {
            email.style.background = "";
            email.style.border = "";
            warnBox.style.display = "none";
        }


        // Test for a proper name
        if (name.value === "")
        {
            name.style.background = warn;
            name.style.border = "1px solid red";
            msg += "Please include your full name";
            formValid = false;
        } 
        else if (name.value.length < 6)
        {
            name.style.background = warn;
            name.style.border = "1px solid red";
            msg += "Please include your full name.";
            formValid = false;
        }
        else
        {
            name.style.background = "";
            name.style.border = "";
            warnBox.style.display = "none";
        }


        //Test for a proper Phone number
        if (phone.value === "")
        {
            phone.style.background = warn;
            phone.style.border = "1px solid red";
            msg += "please incluse your phone wit area code.";
            formValid = false;
        }
        else if (!regex0.test(phone.value))
        {
            phone.style.background = warn;
            phone.style.border = "1px solid red";
            msg += "please include your phone with area code.";
            formValid = false;
        }
        else
        {
            phone.style.background = "";
            phone.style.border = "";
            warnBox.style.display = "none";
        }


        // Test to make sure an option is picked
        if(radio0.checked === false && radio1.checked === false && radio2.checked === false)
        {
            radio0.style.outline = "1px solid red";
            radio1.style.outline = "1px solid red";;
            radio2.style.outline = "1px solid red";
            formValid = false;
            msg += "You must select how many ducks you want";
        }
        else
        {
            radio0.style.outline = "";
            radio1.style.outline = "";
            radio2.style.outline = "";
            warnBox.style.display = "none";
        }


        //Test that a duck has been selected
        if (duck.value === "Please select a Duck...")
        {
            duck.style.background = warn;
            duck.style.border = "1px solid red";
            msg += "please pick a duck.";
            formValid = false;
            alert("it fired");
        }
        else
        {
            duck.style.background = "";
            duck.style.border = "";
            warnBox.style.display = "none";
        }


        if(!formValid)
        {
            throw msg;
        }
    }
    catch(msg) // If an error is encountered display the approprate error msg
    {
        warnBox.style.display = "block";
        warnBox.innerHTML = msg;
    }




    



    
}


window.addEventListener("load", onFormLoad, false);