"use strict";
const submit = document.getElementById("submit");
//need to make values into a object
//functions with paramters of key words
//1. I need to make the values of the input into a object

//2.What i need to do
//need to make data into a object

//javascript is passing the click event to survey object
let counter = 0;
const surveyObject = function (evClick) {
  evClick.preventDefault(); //stoping form submitting because it refreshes and lose everything

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone").value;

  let survey = {
    fn: firstName,
    ln: lastName,
    em: email,
    phone: phoneNumber,
  };

  document.querySelector("form").reset(); //resetting form but not refreshing page so we keep the data
  counter++;
  console.log(`Object data for entry ${counter}`);
  console.log(survey);
};
document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", surveyObject);
});
