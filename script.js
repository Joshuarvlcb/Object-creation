"use strict";
// const submit = document.getElementById("submit");
// //need to make values into a object
// //functions with paramters of key words
// //1. I need to make the values of the input into a object

// //2.What i need to do
// //need to make data into a object

// //javascript is passing the click event to survey object
let counter = 0;
const surveyObject = function (ev) {
  ev.preventDefault(); //stoping form submitting because it refreshes and lose everything

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone").value;
  let msg = document.getElementById("message").value;
  let survey = {
    fn: firstName,
    ln: lastName,
    em: email,
    phone: phoneNumber,
    message: msg,
  };

  document.querySelector("form").reset(); //resetting form but not refreshing page so we keep the data
  counter++;
  console.log(`Object data for entry ${counter}`);
  console.log(survey);
};
//when the document is fully loaded it will trigger the arraor function and when i click on submit button it will triger the surveyObject function
document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", surveyObject);
});
// const objectMaker = function (name, age, height) {
//   return {
//     name,
//     age,
//     height,
//   };
// };
// const run = function () {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   let email = document.getElementById("email").value;
//   let phoneNumber = document.getElementById("phone").value;

//   let newUser = objectMaker(firstName, lastName);
//   console.log(newUser);
// };
// let Catheryn = {
//   grade1: 70,
//   grade2: 27,
//   grade3: 27,
//   grade4: 13,
//   grade5: 60,
//   grade6: 3,
//   grade7: 29,
//   grade8: 23,
//   grade9: 67,
//   grade10: 16,
//   grade11: 18,
//   grade12: 70,
//   grade13: 76,
//   grade14: 13,
//   grade15: 26,
//   grade16: 30,
//   grade17: 41,
//   grade18: 16,
//   grade19: 33,
//   grade20: 26,
//   grade21: 59,
//   grade22: 1,
//   grade23: 57,
//   grade24: 3,
//   grade25: 61,
//   grade26: 78,
//   grade27: 10,
//   grade28: 22,
//   grade29: 62,
//   grade30: 72,
//   grade31: 59,
//   grade32: 82,
//   grade33: 59,
//   grade34: 84,
//   grade35: 20,
//   grade36: 34,
//   grade37: 52,
//   grade38: 81,
//   grade39: 76,
//   grade40: 41,
//   grade41: 18,
//   grade42: 90,
//   grade43: 41,
//   grade44: 31,
//   grade45: 16,
//   grade46: 15,
//   grade47: 68,
//   grade48: 44,
//   grade49: 47,
//   grade50: 25,
//   grade51: 20,
//   grade52: 20,
//   grade53: 46,
//   grade54: 44,
//   grade55: 14,
//   grade56: 79,
//   grade57: 81,
//   grade58: 2,
//   grade59: 62,
//   grade60: 88,
//   grade61: 29,
//   grade62: 34,
//   grade63: 27,
//   grade64: 45,
//   grade65: 26,
//   grade66: 59,
//   grade67: 75,
//   grade68: 73,
//   grade69: 31,
//   grade70: 82,
//   grade71: 85,
//   grade72: 39,
//   grade73: 13,
//   grade74: 14,
//   grade75: 9,
//   grade76: 52,
//   grade77: 49,
//   grade78: 27,
//   grade79: 4,
//   grade80: 30,
//   grade81: 38,
//   grade82: 21,
//   grade83: 10,
//   grade84: 73,
//   grade85: 44,
//   grade86: 23,
//   grade87: 24,
//   grade88: 13,
//   grade89: 69,
//   grade90: 35,
//   grade91: 63,
//   grade92: 8,
//   grade93: 57,
//   grade94: 59,
//   grade95: 79,
//   grade96: 76,
//   grade97: 74,
//   grade98: 81,
//   grade99: 96,
//   grade100: 13,
// };

// let length = Object.keys(Catheryn).length;
// let total = 0;
// let grades = 0;
// for (let props in Catheryn) {
//   grades += Catheryn[props];
//   console.log(grades / length);
// }
// let salaries = {
//   Trudie: 98311,
//   Monique: 102525,
//   Taunya: 265436,
//   Pamela: "intern",
//   Kenisha: 250967,
//   Vergie: 68621,
//   Elvina: 88935,
//   Brittny: 251569,
//   Brett: 55658,
//   Gillian: 264467,
//   Amie: "intern",
//   Lacey: 98986,
//   Susanne: 74833,
//   Leonard: 61230,
//   Anastasia: 56256,
//   Alona: 113901,
//   Pricilla: 106730,
//   Julene: 279553,
//   Barrett: 70687,
//   Annika: "intern",
//   Maybelle: 200963,
//   Virgie: 201997,
//   Parker: 119879,
//   Bettye: "intern",
//   Amal: 112783,
//   Kina: "intern",
//   Sparkle: 57785,
//   Debbi: 71139,
//   Katherine: "intern",
//   Devona: 51325,
//   Jake: 283782,
//   Evan: "intern",
//   Breann: "intern",
//   Jeffery: 95836,
//   Coral: 109686,
//   Madie: "intern",
//   Rosemary: 76613,
//   Dulcie: 225397,
//   Celena: 73214,
//   Maxine: 53210,
//   Tierra: 96672,
//   Lynetta: 208919,
//   Delta: 256844,
//   Marguerita: "intern",
//   Seema: "intern",
//   Ben: "intern",
//   Sherita: 85298,
//   Eden: 295511,
//   Hilda: 75828,
//   Stefanie: 54703,
// };
// let newObj = {};
// for (let props in salaries) {
//   let salaryEmplsalaries = salaries[props];
//   if (typeof salaryEmplsalaries !== "number") continue;
//   let raise = salaryEmplsalaries * 2;
//   console.log(props);
//   newObj[props] = raise;
// }

// console.log();
// console.log(newObj);
// let hero = {
//   people: [
//     { name: "joe", age: 23 },
//     { name: "angel", age: 22 },
//     { name: "alex", age: 13 },
//   ],
// };

// let people = hero["people"];
// for (let i = 0; i < people.length; i++) {
//   // console.log(people[i]);
//   // console.log(people[i].name);
//   // console.log(people[i]["age"]);

//   for (let prop in people[i]) {
//     console.log(people[i][prop]);
//   }
// }
