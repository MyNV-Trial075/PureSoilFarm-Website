function validateEmail()
{
let email1 = document.getElementById("email1").value;
let email2 = document.getElementById("email2").value;
    if(email1 == email2)
{
alert("emails match");
    return true;
}
else
{
alert("emails do not match");
    return false;
}
}
