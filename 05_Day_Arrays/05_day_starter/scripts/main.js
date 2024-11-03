const arr = Array();

const sevenArray = [1,'c',33,true,null,'oh',NaN];

console.log(sevenArray.length);

console.log(sevenArray[0]);
console.log(sevenArray[Math.floor(sevenArray.length/2)]);
console.log(sevenArray[sevenArray.length-1]);

let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length /2)]);
console.log(itCompanies[itCompanies.length-1]);

for (let i of itCompanies){
    console.log(i.toUpperCase);
}

console.log(itCompanies.toString().concat(' are big IT companies'));

function checkCompanyExists(company) {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return "not found";
    }
}
console.log(checkCompanyExists('Google'));
console.log(checkCompanyExists('7Bits'));

let counter=0;
let filtered = [];
for (let i of itCompanies){
    for (let j of i){
        if (j=='o'){
            counter+=1;
        }
    }
    if ( counter>1){
        filtered.push(i);
    }
    counter=0;
}
console.log(filtered);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

let index = Math.floor(itCompanies.length / 2);
let middleCompanies;

if (itCompanies.length % 2 === 0) {
    middleCompanies = itCompanies.slice(index - 1, index + 1);
} else {
    middleCompanies = itCompanies.slice(index, index + 1);
}

console.log(middleCompanies);

itCompanies.shift();
console.log(itCompanies);

if (itCompanies.length % 2 === 0) {
    itCompanies.splice(index - 1, 2);
} else {
    itCompanies.splice(index, 1);
}

console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies = [];
console.log(itCompanies);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

if (Math.floor(Math.random())==1) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
