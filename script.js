"use strict";
const submit = document.getElementById("submit");
//need to make values into a object
//functions with paramters of key words
//1. I need to make the values of the input into a object

//2.What i need to do
//
const surveyObject = function () {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  console.log(
    (firstName = {
      fn: firstName,
      ln: lastName,
      em: email,
      phone: phoneNumber,
      msg: message,
    })
  );
};
submit.addEventListener("click", surveyObject);
