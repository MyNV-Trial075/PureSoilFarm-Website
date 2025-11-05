<script>
function validatePasswords() 
{
</script>  
  
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return ; // prevents form submission
  }
}
  // Optionally, you can add a minimum length check:
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }


