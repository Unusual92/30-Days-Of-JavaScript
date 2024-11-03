let age = parseInt(prompt("Enter your age:"));
if (isNaN(age)) {
  console.log("Invalid input. Please enter a number.");
} else if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

let myAge = 30;
let yourAge = parseInt(prompt("Enter your age:"));
if (isNaN(yourAge)) {
  console.log("Invalid input. Please enter a number.");
} else if (yourAge > myAge) {
  let ageDiff = yourAge - myAge;
  console.log(`You are ${ageDiff} years older than me.`);
} else {
  let ageDiff = myAge - yourAge;
  console.log(`I am ${ageDiff} years older than you.`);
}

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);

let num = parseInt(prompt("Enter a number:"));
if (isNaN(num)) {
  console.log("Invalid input. Please enter a number.");
} else if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

let score = parseInt(prompt("Enter your score:"));
let grade;
if (isNaN(score)) {
  console.log("Invalid input. Please enter a number.");
} else if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
} else {
  grade = "Invalid score";
}
console.log(`Your grade is ${grade}`);

let month = prompt("Enter a month:").toLowerCase();
let season;
if (month === "september" || month === "october" || month === "november") {
  season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
  season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
  season = "Summer";
} else {
  season = "Invalid month";
}
console.log(`The season is ${season}`);

let day = prompt("What is the day today?").toLowerCase();
let dayType;
if (day === "saturday" || day === "sunday") {
  dayType = "weekend";
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
  dayType = "working day";
} else {
  dayType = "invalid day";
}
console.log(`${day} is a ${dayType}`);

let days;
if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
  days = 31;
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
  days = 30;
} else if (month === "february") {
  let year = parseInt(prompt("Enter a year:"));
  if (isNaN(year)) {
    console.log("Invalid input. Please enter a number.");
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days = 29;
  } else {
    days = 28;
  }
} else {
  days = "Invalid month";
}
console.log(`${month} has ${days} days`);