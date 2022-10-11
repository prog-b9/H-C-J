let reg = document.getElementById("register");
let subm = document.getElementById("submit");
reg.onsubmit = function () {
  // Start Email
  let email = document.getElementById("email");
  let emailRe = /\w+@\w+.[a-zA-Z]{2,}$/gi;
  let emailValid = emailRe.test(email.value);
  //Start Username
  let user = document.getElementById("user");
  let userRe = /[a-zA-Z0-9_-]{3,20}/gi;
  let userValid = userRe.test(user.value);

  // //Start Password
  let pass = document.getElementById("pass");
  let passRe = /[a-zA-Z0-9_-]{8,}/gi;
  let passValid = passRe.test(pass.value);

  // This Is Validation (Email, User, Pass)
  if (
    email.value.length == 0 ||
    user.value.length == 0 ||
    pass.value.length == 0
  ) {
    console.log("Please Enter Data Alls");
  } else if (email.value !== "" || user.value !== "" || pass.value !== "") {
    // This validation By Email
    if (emailValid === false) {
      console.log("Error => Exam: a@a.aa");
    } else {
      console.log(`Email: ${email.value}`);
    }
    //This Is Validation By Username
    if (userValid === false) {
      console.log("Error => Username Please Again");
    } else {
      console.log(`Username: ${user.value}`);
    }
    //This Is Validation By Password
    if (passValid === false) {
      console.log("Error => Password Please Again");
    } else {
      console.log(`Password: ${pass.value}`);
    }
    //This Is evens Text Empty Again In Input
    email.value = "";
    user.value = "";
    pass.value = "";
    txtArea.value = "";
  }
};

// Strat TextArea
let txtArea = document.getElementById("textarea"); // the var is textarea
let countTxtArea = document.getElementById("count-textarea");// the var is count-textarea
let countNum = 30;
countTxtArea.innerHTML = countNum;

txtArea.onkeyup = function () {
  countTxtArea.innerHTML = countNum - txtArea.value.length;
  return true;
};
