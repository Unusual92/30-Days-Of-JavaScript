let name='Andrei';
let surname='Miller';

function fullName(firstname,lastname){
    console.log(firstname +" "+ lastname);
}
fullName(name,surname);

function addNumbers(frst,scnd){
    return frst+scnd;
}
console.log(addNumbers(52,55));

function areaOfRectangle(length,width){
    return length*width;
}
console.log(areaOfRectangle(52,66));

function perimetrOfRectangle(length,width){
    return 2*(length+width);
}
console.log(perimetrOfRectangle(27,12));

function volumeOfRectPrism(length,width,height){
    return length*width*height;
}
console.log(volumeOfRectPrism(3,2,11));

function areaOfCircle(r){
    return 3.14*r**2;
}
console.log(areaOfCircle(3));

function circumOfCircle(r){
    return 2*3.14*r;
}
console.log(circumOfCircle(36));

function density (mass,volume){
    return mass/volume;
}
console.log(density(3,6));

function speed(distance, time) {
    return distance / time;
}
console.log(speed(100, 5));

function weight(mass, gravity = 9.81) {
    return mass * gravity;
}
console.log(weight(10));

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(convertCelsiusToFahrenheit(25));

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBMI(60, 1.75));

function checkSeason(month) {
    switch (month.toLowerCase()) {
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring";
        case "june":
        case "july":
        case "august":
            return "Summer";
        case "september":
        case "october":
        case "november":
            return "Autumn";
        default:
            return "Invalid month";
    }
}
console.log(checkSeason("March"));

function findMax(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

function solveLinEquation(a, b, c) {
    let y1=-c/b;
    let x2=-c/a;
    return([`(0,${y1})`,`(${x2},0)`]);
}
console.log(solveLinEquation(1, 2, 5));

function solveQuadEquation(a,b,c){
    let D=b**2-4*a*c;
    if (D>0){
        let x1=(-b+Math.sqrt(D))/(2*a);
        let x2=(-b-Math.sqrt(D))/(2*a);
        return(`${x1} ,  ${x2}`);
    }
    else if (D==0){
        let x = -b/(2*a);
        return(x);
    }
    else if(D<0){
        return('No roots');
    }
}
console.log(solveQuadEquation(1,3,-9));

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArray([1, 2, 3, 4, 5]);

function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    console.log(`${month}/${day}/${year} ${hours}:${minutes}`);
}
showDateTime();

function swapValues(x, y) {
    console.log(`Before swap: x = ${x}, y = ${y}`);
    let temp = x;
    x = y;
    y = temp;
    console.log(`After swap: x = ${x}, y = ${y}`);
}
swapValues(3, 4);
swapValues(4, 5);

function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(array) {
    return array.map(item => item.charAt(0).toUpperCase() + item.slice(1));
}
console.log(capitalizeArray(['michael', 'loly']));

function addItem(array,item){
    array.push(item)
    return array;
}
console.log(addItem([4,'iui',88],52));

function removeItem(array,index){
    array.splice(index,1);
    return array;
}
console.log(removeItem(['rarar',66,NaN],1));

function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));

function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfOdds(5));

function sumOfEven(n) {
    let sum = 0;
    for (let i = 0; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfEven(5));

function evensAndOdds(n) {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
}
evensAndOdds(100);

function sum(...args) {
    return args.reduce((body, part) => body + part, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
console.log(randomUserIp());

const digits = '0123456789ABCDEF';
function randomMacAddress() {
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        macAddress += digits.charAt(Math.floor(Math.random() * 16));
        macAddress += digits.charAt(Math.floor(Math.random() * 16));
        if (i < 5) {
            macAddress += ':';
        }
    }
    return macAddress;
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
        hexNumber += digits.charAt(Math.floor(Math.random() * 16));
    }
    return hexNumber;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
        userId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return userId;
}
console.log(userIdGenerator());
