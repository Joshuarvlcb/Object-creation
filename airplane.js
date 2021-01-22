"use strict";
//You will take the bit of code that we did together and add to it. We already have a way to take the value from text areas and store them inside of an object, and assign them a unique ID value.
// * First Name
// * Last Name
// * Date of Birth (format MM/DD/YYYY)
// * City they are leaving from
// * City they are going to
// * Date leaving (format MM/DD/YYYY)
// * Date returning(format MM/DD/YYYY)
// Bags they are bringing (Number)
// Type of meal - chicken, fish, vegetarian (radio button)
// Extras - legroom, window seat, headphones, and/or extra food (checkboxes)

// From that information you will also add a few more bits of information that they don’t need to input:

// Can they drink alcohol? (over 21)
// Extra costs (+10 for each checkbox +20 for each bag they are bringing)
// How long will they be leaving for (returning - leaving)
// Assign a unique ID value

// All the data above should be stored in an object that is stored in an array with proper key values and naming conventions. Make sure you are using a class, to create the passenger objects. The array should be able to be printed out so you can see a long list of every passenger that is boarding, but only show the ID and Name of the passenger.

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
    bags,
    radio,
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
let id = 0;
const objectData = [];

//1.i need to get the value of my radio button and put it inside the object array
let radios = document.getElementsByName("project");
for (let i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    console.log(radios[i].value);
    break;
  }
}

const dateFormat = function (birthYear) {
  let date = new Date(birthYear);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();
  return `${month}/${day}/${year}`;
};
const setup = document
  .getElementById("submit5")
  .addEventListener("click", () => {
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const birthDay = document.getElementById("birth").value;
    const cityLeave = document.getElementById("cityLeave").value;
    const cityReturn = document.getElementById("cityReturn").value;
    const dateLeave = document.getElementById("dateLeave").value;
    const dateReturn = document.getElementById("dateReturn").value;
    id++;
    const passenger = new User(
      firstName,
      lastName,
      dateFormat(birthDay),
      cityReturn,
      cityLeave,
      dateFormat(dateLeave),
      dateFormat(dateReturn),
      id
    );
    document.querySelector("form").reset();
    if (firstName !== " " && lastName !== " ") {
      objectData.push(passenger);
    }
  });

document.addEventListener("DOMContentLoaded", setup);

console.log(objectData);
