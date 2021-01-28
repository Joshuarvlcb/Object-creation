"use strict";
// Create a way to look through the list and choose a user by name or ID. The information should print out in a nice form below it, showing all of the information for that user. This can be done with a search box that goes through your list, a drop down menu with all of the names, or you can create your own unique way of searching through the list.
const leaveTime = function (name, dateLeave, dateReturn) {
  const dateLeave2 = new Date(dateLeave);
  const dateReturn2 = new Date(dateReturn);
  const difference = dateReturn2 - dateLeave2;
  const days = 1000 * 60 * 60 * 24;
  return `${name} you have been gone for ${Math.abs(
    Math.floor(difference / days)
  )}`;
};

const age = function (name, birthDay2) {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const birthDay = new Date(birthDay2);
  const year = birthDay.getFullYear();
  const age = currentYear - year;
  console.log(`${name} you are ${Math.floor(age)} years old`);
  if (age >= 21) {
    return "you can drink alcohol";
  } else {
    return "you can only drink juice";
  }
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
//make 7 hours on the time
const dateFormat = function (birthYear) {
  let date = new Date(birthYear);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate() + 1;
  return `${month}/${day}/${year}`;
};
const extraCost = function (bags, checkbox) {
  const bags2 = Number(bags);
  let checkbox2 = checkbox.size + 1;
  const total = bags2 * 20 + checkbox2 * 10 + 300;
  if (!checkbox2) {
    checkbox2 = 1;
    console.log(`your total is ${bags2 * 20 + checkbox2 * 10 + 300}$`);
  } else {
    console.log(`your total is ${total}$`);
  }
};

let id = 56;
const objectData = [];
const joshua = new User(
  "joshua",
  "ruvalcaba",
  dateFormat("march/25/2003"),
  "Phoenix Az",
  "Los Angeles Ca",
  dateFormat("1/21/2021"),
  dateFormat("9/23/2021"),
  "LX" + 53,
  "fish",
  9,
  "headphones"
);

const noemi = new User(
  "noemi",
  "espino",
  dateFormat("may/20/1993"),
  "Phoenix Az",
  "Los Angeles Ca",
  dateFormat("1/21/2021"),
  dateFormat("9/23/2021"),
  "LX" + 54,
  "chicken",
  5,
  "headphones"
);
const saul = new User(
  "saul",
  "ruvalcaba",
  dateFormat("december/21/1964"),
  "Phoenix Az",
  "Los Angeles Ca",
  dateFormat("1/21/2022"),
  dateFormat("6/23/2022"),
  "LX" + 55,
  "veggies",
  3,
  "legroom"
);
const joshLeave = leaveTime(
  joshua.firstName,
  joshua.dateLeave,
  joshua.dateReturn
);
const joshAge = age(joshua.firstName, joshua.dateOfBirth);
const joshTotal = extraCost(joshua.bags, joshua.extras);
console.log(`---------------------------------------------`);
const noemiLeave = leaveTime(
  noemi.firstName,
  noemi.dateLeave,
  noemi.dateReturn
);
const noemiAge = age(noemi.firstName, noemi.dateOfBirth);
const noemiTotal = extraCost(noemi.bags, noemi.extras);
console.log(`---------------------------------------------`);

const saulLeave = leaveTime(saul.firstName, saul.dateLeave, saul.dateReturn);
const saulAge = age(saul.firstName, saul.dateOfBirth);
const saulTotal = extraCost(saul.bags, saul.extras);
objectData.push(joshua, noemi, saul);
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

    document.querySelector("form").reset();
    if (
      (firstName !== " " &&
        lastName !== " " &&
        radioValue.includes("chicken")) ||
      radioValue.includes("fish") ||
      radioValue.includes("vegeterian")
    )
    if(boxes.has('legRoom') || boxes.has('windowseat') || boxes.has('headphones') || boxes.has('meal')){
     {
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
      objectData.push(passenger);
      id++;
      radioValue = " ";
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      let select = document.getElementById("select");
      let option = document.createElement("option");

      for (let i = 0; i < objectData.length; i++) {
        option.text = `${objectData[i].firstName} ${objectData[i].lastName} ${objectData[i].id}`;
        options.pop();
        options.pop();
        options.pop();
        options.push(option.outerHTML);
      }
      select.insertAdjacentHTML("beforeEnd", options.join("\n"));
    }
  }
});
document.addEventListener("DOMContentLoaded", setup);

//1 fix to not print id there is no first name
document.getElementById("printBtn").addEventListener("click", () => {
  const ids = document.getElementById("id-space");
  const names = document.getElementById("name-space");
  ids.innerHTML = "";
  names.innerHTML = "";
  for (let i = 0; i < objectData.length; i++) {
    if (objectData[i].firstName !== "") {
      ids.innerHTML += `<div><span>${objectData[i].id}</span></div>`;
      names.innerHTML += `<div><span>${objectData[i].firstName} ${objectData[i].lastName}</span></div>`;
    }
  }
});

console.log(objectData);
let options = [];
let select = document.getElementById("select");
let option = document.createElement("option");
for (let i = 0; i < objectData.length; i++) {
  if (objectData[i].firstName !== "" && objectData[i].lastName !== "") {
    option.text = `${objectData[i].firstName} ${objectData[i].lastName} ${objectData[i].id}`;
    //outer html is replacing completely replacing the option element with the firstName content
    options.push(option.outerHTML);
  }
}
//outer html
//insertAdjacentHTML method that is putting the options in the select element after eachother with beforeend
//before end
//
select.insertAdjacentHTML("beforeEnd", options.join("\n"));
//i need to click on a person and get there first name
//i need to find out what array i clicked on so i can get the value for name
select.addEventListener("change", (name) => {
  let firstName = document.getElementById("fn22");
  let lastName = document.getElementById("lastn2");
  let id = document.getElementById("id2");
  let bday = document.getElementById("bday");
  let leavefrom = document.getElementById("leavefrom");
  let goingTo = document.getElementById("goingto");
  let dateLeave = document.getElementById("dateleave");
  let dateReturning = document.getElementById("datereturning");
  let bags = document.getElementById("bags");
  let meals = document.getElementById("meals");
  let extras = document.getElementById("extras");

  firstName.innerHTML = "";
  lastName.innerHTML = "";
  id.innerHTML = "";
  bday.innerHTML = "";
  leavefrom.innerHTML = "";
  goingTo.innerHTML = "";
  dateLeave.innerHTML = "";
  dateReturning.innerHTML = "";
  bags.innerHTML = "";
  meals.innerHTML = "";
  extras.innerHTML = "";
  //target returns the specific element that trigered the event
  const namesValue = name.target.value;
  const first = namesValue.slice(0, namesValue.indexOf(" "));
  const idName = namesValue.split('').slice(-2).join('')

  for (let i = 0; i < objectData.length; i++) {
    if (
      first == objectData[i].firstName) {
          if(idName == objectData[i].id.slice(-2)){
        firstName.innerHTML += `<span>${objectData[i].firstName}</span>`;
      lastName.innerHTML += `<span>${objectData[i].lastName}</span>`;
      id.innerHTML += `<span>${objectData[i].id}</span>`;
      bday.innerHTML += `<span>${objectData[i].dateOfBirth}</span>`;
      leavefrom.innerHTML += `<span>${objectData[i].cityLeave}</span>`;

      goingTo.innerHTML += `<span>${objectData[i].cityReturn}</span>`;
      dateLeave.innerHTML += `<span>${objectData[i].dateLeave}</span>`;
      dateReturning.innerHTML += `<span>${objectData[i].dateReturn}</span>`;
      bags.innerHTML += `<span>${objectData[i].bags}</span>`;
      meals.innerHTML += `<span>${objectData[i].food}</span>`;
      extras.innerHTML += `<span>${objectData[i].extras}</span>`;
          }
        }

  }
  // console.log(namesValue);
});


//modal
const close = document.getElementById('close')
const overLay = document.getElementById('overlay')
const modal = document.getElementById('modal')
close.addEventListener('click',()=>{
modal.classList.add('remove')
overLay.classList.add('remove')
})
// document.addEventListener('click',e=>{
//   console.log('document')
// },{capture:true})

// //
// const josh = {
//   birthYear:2003,
//   fruits:230,
//   bindMethod(year = new Date(),price){
//       console.log(`you are ${year.getFullYear() - this.birthYear} years old`)
//       let fruits = this.fruits;
//       let price2 = price
//       console.log(`you have sold ${fruits} fruits and made ${fruits*price2}$ `)
//   }
// }
// josh.bindMethod(undefined,21)
// const functionBind = josh.bindMethod
// const jessy = {
//   birthYear:2001,
//   fruits:230,
// }
// functionBind.call(jessy,undefined,21)


// const john = {
//   Josh.call(this,)
// }

// //problem make a diamond size x
// //i need to loop and add 1 * after each iteration on a new line
// let str = ''
// for(let i = 0;i <= 5;i++){
// str += '\n'
// for(let j = 0;j < i  ;j++){
//   str += '*'
// }
// }
// for(let e = 0;e <= 4;e++){
//   str+='\n'
//   for(let x = 3 ;x >=e;x--){
//     str+='*'
//   }
// }
// console.log(str)


// //problem i nned to create this
// //1 = 1
// // 1 + 2 = 3
// // 1 + 2 + 3 = 6
// // 1 + 2 + 3 + 4 = 10
// // 1 + 2 + 3 + 4 + 5 = 15

// // 1 + 3 + 6 + 10 + 15 = 35
// // The output of the series is: 35

// //i need to make a for loop that adds the input length strating from one
// const input = 10
// let number = []
// number = (number.map(Number))
// let answer;
// for(let i = 1; i <= input;i++){
// number.push(i)
// console.log([i])

