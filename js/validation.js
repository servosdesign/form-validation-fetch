function validate() {
  const userName = document.registrationForm.UserName.value;
  const userNameFocus = document.registrationForm.UserName.focus();
  const email = document.registrationForm.EMail.value;
  const password = document.registrationForm.Password.value;
  const passwordFocus = document.registrationForm.Password.focus();
  const confirmPassword = document.registrationForm.ConfirmPassword.value;
  const confirmPasswordFocus = document.registrationForm.ConfirmPassword.focus();

  var userNameLetters = /^[A-Za-z]+$/;
  var userNameLength = /^.{3,}$/;
  
  var passwordLetters = /[A-Z].*\d|\d.*[A-Z]/; 
  var passwordDigits = /^[/*-+!@#$^&~[]]/; 
  var passwordLength = /^.{8,}$/;

  if (userName == "") {
    alert("Username required");
    userNameFocus;
    return false;
  }
  if (!userName.match(userNameLetters)) {
    alert("Make sure username starts with a letter A-Z");
    userNameFocus;
    return false;
  }
  if (!userName.match(userNameLength)) {
    alert("Make sure username is 3 or more alphanumeric characters long");
    userNameFocus;
    return false;
  }

  if (email == "") {
    alert("Email Required");
    document.registrationForm.EMail.focus();
    return false;
  }

  if (password == "") {
    alert("Password Required");
    passwordFocus;
    return false;
  }
  if (!password.match(passwordLength)){
    alert("Make sure password is 8 or more alphanumeric characters long");
    passwordFocus;
    return false;
  }
  if (!password.match(passwordLetters) && !password.match(passwordDigits)) {
    alert("Make sure password is contains at least one upper case letter, one number, and one of the following special characters: / * - + ! @ # $ ^ & ~ [ ]");
    passwordFocus;
    return false;
  }

  if (confirmPassword == "") {
    alert("Confirm password");
    confirmPasswordFocus;
    return false;
  }

  if (password != confirmPassword){
    alert("Make sure both passwords match exactly")
    confirmPasswordFocus;
    return false;
  }
}
