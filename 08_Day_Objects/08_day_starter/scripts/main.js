let dog = {};

console.log(dog);

dog.name = "Muhtar";
dog.legs = 4;
dog.color = "Spotty";
dog.age = 7;
dog.bark = function() {
    return "woof woof";
};

console.log("Name:", dog.name);
console.log("Legs amount:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

dog.breed = "Ovcharka";
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Legs amount: ${this.legs}, Color: ${this.color}, Age: ${this.age}`;
};

console.log(dog.getDogInfo());

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkillsCount) {
    maxSkillsUser = user;
    maxSkillsCount = users[user].skills.length;
  }
}
console.log(maxSkillsUser);

let loggedInUsers = 0;
let pointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUsers++;
  }
  if (users[user].points >= 50) {
    pointsCount++;
  }
}

console.log(`Amount of logged in users: ${loggedInUsers}`);
console.log(`Amount of 50>= points: ${pointsCount}`);

 //Task 3
 const mernDevelopers = [];
 const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
 for (const user in users) {
   const skills = users[user].skills;
   if (mernStack.every(skill => skills.includes(skill))) {
     mernDevelopers.push(user);
   }
 }
 
 console.log(`MERN stack developers are ${mernDevelopers.join(', ')}`);

 const newUsers = Object.assign({}, users, {
    Andy: {
      email: 'hauntedfamily@rofl.com',
      skills: ['HTML', 'CSS', 'JavaScript','Python','C#'],
      age: 16,
      isLoggedIn: true,
      points: 50
    }
  });
  
  console.log(newUsers);

const userKeys = Object.keys(users);
console.log(userKeys.join(', ') );

const userValues = Object.values(users);
console.log( userValues);

import {countries} from "./data/countries_data.js";
for (const country in countries) {
    console.log(`Name ${country.name}`);
    console.log(`Capital ${country.capital}`);
    console.log(`Population ${country.population}`);
    console.log(`Languages: ${country.languages.join(', ')}`);
  }