"use strict";
function formValidation() {​​​​​
// setting passwords according to id
var password = document.getElementById('regiterPass').value;
var password2 = document.getElementById('regiterCnfPass').value;
// setting passwords error fields according to id
let password_error = document.getElementById('pass1')
let password2_error = document.getElementById('pass2')
// validation for first password that it is of length 6 or not or empty or not
if (password.length < 6) {​​​​​
// if first password length is 0
if(password.length == 0){​​​​​
document.getElementById('regiterPass').style.borderColor = "red";
password_error.innerHTML = 'Password is required';
return false;
// if first password length is not 0 but less than 6
}​​​​​else{​​​​​
document.getElementById('regiterPass').style.borderColor = "red";
password_error.innerHTML = 'Password must be at least 6 characters';
return false;
}​​​​​
// validation for confirm password that it is of length 6 or not or empty or not
}​​​​​ else {​​​​​
// here first password is correct so removing errors
document.getElementById('regiterPass').style.borderColor = "black";
password_error.innerHTML = '';
if(password2.length < 6){​​​​​
// if confirm password length is 0
if (password2.length === 0) {​​​​​
document.getElementById('regiterCnfPass').style.borderColor = "red";
password2_error.innerHTML = 'Confirm Password is required'
return false;
// if confirm password length is not 0 but less than 6
}​​​​​else{​​​​​
document.getElementById('regiterCnfPass').style.borderColor = "red";
password2_error.innerHTML = 'Confirm Password must be at least 6 characters';
return false;
}​​​​​
// validation that whether password and confirm password is same or not
}​​​​​else{​​​​​
// here confirm password is correct so removing errors
document.getElementById('regiterCnfPass').style.borderColor = "black";
password2_error.innerHTML = ''
// if password and confirm password is same
if(password === password2){​​​​​
document.getElementById('regiterPass').style.borderColor = "black";
document.getElementById('regiterCnfPass').style.borderColor = "black";
return true;
// if password and confirm password is not same
}​​​​​else{​​​​​
document.getElementById('regiterPass').style.borderColor = "red";
document.getElementById('regiterCnfPass').style.borderColor = "red";
password_error.innerHTML =  'Password and Confirm Password should be same'
password2_error.innerHTML = 'Password and Confirm Password should be same'
return false;
}​​​​​
}​​​​​
}​​​​​
}​​​​​
