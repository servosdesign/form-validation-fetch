var userNameInput = document.getElementById("userNameInput");
var passwordInput = document.getElementById("passwordInput");
var confirmPasswordInput = document.getElementById("confirmPasswordInput");
var emailInput = document.getElementById("emailInput");

var userNameStyle = userNameInput.style;
var passwordStyle = passwordInput.style;
var confirmedPasswordStyle = confirmPasswordInput.style;
var emailStyle = emailInput.style;

var userNameLetters = /^[A-Za-z]/i;
var userNameLength = /^.{3,}$/;

var passwordLetters = /[A-Z].*\d|\d.*[A-Z]/;
var passwordDigits = /^[/*-+!@#$^&~[]]/;
var passwordLength = /^.{8,}$/;
var passwordVerfication = /[A-Z].*\d|\d.*[A-Z]*[/*-+!@#$^&~[]]*/;

var blackBox = "2px solid black";
var redBox = "2px solid red";

function validate() {
  const userName = document.registrationForm.UserName.value;
  const userNameFocus = document.registrationForm.UserName.focus();
  const email = document.registrationForm.EMail.value;
  const password = document.registrationForm.Password.value;
  const passwordFocus = document.registrationForm.Password.focus();
  const confirmPassword = document.registrationForm.ConfirmPassword.value;
  const confirmPasswordFocus =
    document.registrationForm.ConfirmPassword.focus();

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
    emailStyle.outline = redBox;
    document.registrationForm.EMail.focus();
    return false;
  } else {
    emailStyle.outline = blackBox;
  }

  if (password == "") {
    alert("Password Required");
    passwordFocus;
    return false;
  }
  if (
    !password.match(passwordLetters) &&
    !password.match(passwordDigits) &&
    !password.match(passwordLength)
  ) {
    alert(
      "Make sure password is 8 alphanumeric characters long, contains at least one upper case letter, one number, and one of the following special characters: / * - + ! @ # $ ^ & ~ [ ]"
    );
    passwordFocus;
    return false;
  }

  if (confirmPassword == "") {
    alert("Confirm password");
    confirmPasswordFocus;
    return false;
  }

  if (password != confirmPassword) {
    alert("Make sure both passwords match exactly");
    confirmPasswordFocus;
    return false;
  }
}

function checkUsername() {
  var value = userNameInput.value;

  if (value.match(userNameLetters) && value.match(userNameLength)) {
    userNameStyle.outline = blackBox;
  } else {
    userNameStyle.outline = redBox;
  }
}

function checkPassword() {
  var password = passwordInput.value;

  if (password.match(passwordVerfication) && password.match(passwordLength)) {
    passwordStyle.outline = blackBox;
  } else {
    passwordStyle.outline = redBox;
  }
}

function checkPasswords() {
  var password = passwordInput.value;
  var confirmedPassword = confirmPasswordInput.value;

  if (password === confirmedPassword) {
    confirmedPasswordStyle.outline = blackBox;
  } else {
    confirmedPasswordStyle.outline = redBox;
  }
}

function validated() {
  alert("The form was submitted succesfully... Reloading the page");
  location.reload();
}
