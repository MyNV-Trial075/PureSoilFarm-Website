function validatePassword()
{
let password = document.getElementById("password").value;
let confirm_password = document.getElementById("confirm_password").value;
    if(password == confirm_password)
{
alert("passwords match");
    return true;
}
else
{
alert("passwords do not match");
    return false;
}
}