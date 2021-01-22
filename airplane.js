"use strict";
//4 The array should be able to be printed out so you can see a long list of every passenger that is boarding, but only show the ID and Name of the passenger.

//function to check hpw long the passenger will be gone for

const leaveTime = function (dateLeave, dateReturn) {
  const dateLeave2 = new Date(dateLeave);
  const dateReturn2 = new Date(dateReturn);
  const difference = dateReturn2 - dateLeave2;
  const days = 1000 * 60 * 60 * 24;
  console.log(
    `days you have been gone for ${Math.abs(Math.floor(difference / days))}`
  );
};

class User {
  constructor(
    firstName,
    lastName,
    DOB,
    cityLeave,
    cityReturn,
    dateLeave,
    dateReturn,
    id,
    radio,
    bags,
    extras
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = DOB;
    this.cityLeave = cityLeave;
    this.cityReturn = cityReturn;
    this.dateLeave = dateLeave;
    this.dateReturn = dateReturn;
    this.id = id;
    this.bags = bags;
    this.food = radio;
    this.extras = extras;
  }
}
let id = 55;
const objectData = [];

//1.i need to get the value of my radio button and put it inside the object array
//i need to slice the last values of the radio array and always update it
let radio = [];
let radioValue = [];
let radios = document.getElementsByName("project");
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", () => {
    radio.push(radios[i].value);
    radioValue = radio.slice(-1);
  });
}

const extraCost = function (bags, checkbox) {
  const bags2 = Number(bags);
  const checkbox2 = checkbox.size;
  const total = bags2 * 20 + checkbox2 * 10;
  console.log(`your total is ${total}`);
};

let boxes = new Set([]);
let checks = document.getElementsByClassName("checkboxs");
for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener("click", () => {
    if (checks[i].checked == true) {
      boxes.add(checks[i].value);
    } else {
      boxes.delete(checks[i].value);
    }
  });
}

const dateFormat = function (birthYear) {
  let date = new Date(birthYear);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();
  return `${month}/${day}/${year}`;
};

const age = function (birthDay2) {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const birthDay = new Date(birthDay2);
  const year = birthDay.getFullYear();
  const age = currentYear - year;
  console.log(`you are ${age} years old and ${currentMonth} months old`);
  if (age >= 21) {
    return "you can drink alcohol";
  } else {
    return "you can only drink juice";
  }
};
const setup = document
  .getElementById("submit5")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const birthDay = document.getElementById("birth").value;
    const cityLeave = document.getElementById("cityLeave").value;
    const cityReturn = document.getElementById("cityReturn").value;
    const dateLeave = document.getElementById("dateLeave").value;
    const dateReturn = document.getElementById("dateReturn").value;
    const bags = document.getElementById("bagNumbers").value;
    id++;
    const passenger = new User(
      firstName,
      lastName,
      dateFormat(birthDay),
      cityReturn,
      cityLeave,
      dateFormat(dateLeave),
      dateFormat(dateReturn),
      "LX" + id,
      radioValue,
      bags,
      boxes
    );
    leaveTime(dateReturn, dateLeave);
    age(birthDay);
    extraCost(bags, boxes);
    document.querySelector("form").reset();
    if (firstName !== " " && lastName !== " ") {
      objectData.push(passenger);
    }
  });

document.addEventListener("DOMContentLoaded", setup);

console.log(objectData);
