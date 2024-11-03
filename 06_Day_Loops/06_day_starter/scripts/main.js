for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let i=0;
while ( i <= 10) {
    console.log(i);
    i++;
}

i=0;
do {
    console.log(i);
    i++;
} while (i <= 10);

let n = 27; 
for (let i = 0; i <= n; i++) {
    console.log(i);
}

for (let i = 0; i <= 6; i++) {
    let str='';
    for (let j = 0; j<=i; j++) {
        str+="#"
    }
    console.log(str);
}

for (let i=0; i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`);
}

console.log('i  i^2  i^3');
for (let i=0; i<=10;i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

function isPrime(num) {
    if (num<=3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0 )   return false;
    }
    return true;
}

for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds} `);
console.log([sumEvens, sumOdds]);

function RandomArray(count, max) {
    let randomNumbers = new Set();
    while (randomNumbers.size < count) {
        randomNumbers.add(Math.floor(Math.random() * max)); 
    }
    return Array.from(randomNumbers);
}

console.log(RandomArray(5, 100));

let length = 10
function RandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}

console.log(RandomId(length));

function RandomHex() {
    const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
    const hexNumber = randomNumber.toString(16).padStart(6, '0');
    return `#${hexNumber}`;
}

const Hex = RandomHex();
console.log(Hex);

function RandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const randomRGB = RandomRGB();
console.log(randomRGB);

const countries = [
    "albania", "bolivia", "canada", "denmark", "ethiopia",
    "finland", "germany", "hungary", "ireland", "iceland", "japan", "kenya"
];

const uppercaseCountries = countries.map(country => country.toUpperCase());

console.log(uppercaseCountries);

const countryLengths = countries.map(country => country.length);

console.log(countryLengths);

const ArrayOfArrays = countries.map((country) => [
    country.charAt(0).toUpperCase() + country.slice(1), 
    country.toUpperCase().slice(0,3),
    country.length
]);

console.log(ArrayOfArrays);

const Land = countries.filter(country => country.includes('land'));

if (Land.length > 0) {
    const formattedLand = Land.map(country =>
        country.charAt(0).toUpperCase() + country.slice(1)
    );
    console.log(formattedLand);
} else {
    console.log('All these countries are without land');
}

const Ia = countries.filter(country => country.endsWith('ia'));

if (Ia.length > 0) {
    const formattedIa = Ia.map(country =>
        country.charAt(0).toUpperCase() + country.slice(1)
    );
    console.log(formattedIa);
} else {
    console.log('These are countries ends without ia');
}

let max=0;
let maxCountry ='';
for (let i=0; i<countries.length; i++){
    if (countries[i].length > max){
        max=countries[i].length;
        maxCountry = countries[i];
    }
}
console.log(maxCountry);

const fiveLetter = countries.filter(country => country.length === 5);
console.log(fiveLetter);


