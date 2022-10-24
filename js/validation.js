function validate() {

const userName = document.registrationForm.UserName.value;
const email = document.registrationForm.EMail.value;
const password = document.registrationForm.Password.value
const confirmPassword = document.registrationForm.ConfirmPassword.value;

  if (userName == "") {
    alert("Please provide your userName!");
    document.registrationForm.UserName.focus();
    return false;
  }

  if (email == "") {
    alert("Please provide your Email!");
    document.registrationForm.EMail.focus();
    return false;
  }

  if (password == "") {
    alert("Please provide your password!");
    document.registrationForm.Password.focus();
    return false;
  }

  if (confirmPassword.value == "") {
    alert("Please provide your password!");
    document.registrationForm.ConfirmPassword.focus();
    return false;
  }
}
