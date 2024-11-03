const Countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function callbackFunction(element) {
    console.log(element);
  }

Countries.forEach(callbackFunction);
names.forEach(callbackFunction);
numbers.forEach(callbackFunction);

const uppercasedCountries = Countries.map((country)=>country.toUpperCase());
console.log(uppercasedCountries);

const lengthCountries = Countries.map((country)=>country.length);
console.log(lengthCountries);

const squaredNumbers = numbers.map((number)=>number**2);
console.log(squaredNumbers);

const uppercasedNames = names.map((name)=> name.toUpperCase());
console.log(uppercasedNames);

const prices = products.map((product)=> product.price);
console.log(prices);


const filteredCountries = Countries.filter((country) => country.includes('land'));
console.log(filteredCountries);

const sixCharacterCountries = Countries.filter(country => country.length==6);
console.log(sixCharacterCountries);

const moreSixCountries = Countries.filter(country => country.length>=6);
console.log(moreSixCountries);

const startWithE = Countries.filter(country => country.startsWith('E'));
console.log(startWithE);

const filteredProducts = products.filter(product => product.price !== undefined && product.price !== null && typeof product.price !== "string");
console.log(filteredProducts);

function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
  }

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

Countries.unshift('Estonia');
const sentence = Countries.reduce((acc, curr, index) => {
    if (index === Countries.length - 1) {
      return `${acc} and ${curr} are north European countries`;
    } 
    else {
      return `${acc}, ${curr}`;
    }
  }, '');
  console.log(sentence);

const hasLongName = names.some(name => name.length > 7);
console.log(hasLongName);

const landCountries = Countries.every(country => country.includes('land'));
console.log(landCountries);

const onlySixLetter = Countries.find(country => country.length === 6);
console.log(onlySixLetter);

const sixLetterCountryIndex = Countries.findIndex(country => country.length === 6);
console.log(sixLetterCountryIndex); 

const norwayIndex = Countries.findIndex(country => country === 'Norway');
console.log(norwayIndex); 

const russiaIndex = Countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);

const totalPrice = products
  .map(product => product.price)
  .filter(price => typeof price === 'number')
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalPrice);

const TotalPrice = products.reduce((acc, curr) => {
    if (typeof curr.price === 'number') {
      return acc + curr.price;
    } else {
      return acc;
    }
  }, 0);
  
  console.log(TotalPrice);

function categorizeCountries(pattern) {
    return countries.filter(country => country.name.toLowerCase().includes(pattern.toLowerCase()));
  }
    
console.log(categorizeCountries('land')); 
console.log(categorizeCountries('ia')); 
console.log(categorizeCountries('stan'));

function countLetters() {
    return countries.reduce((acc, curr) => {
      const initial = curr.name[0].toLowerCase();
      if (acc[initial]) {
        acc[initial]++;
      } else {
        acc[initial] = 1;
      }
      return acc;
    }, {});
  }
console.log(countLetters());
function getFirstTenCountries() {
  return countries.slice(0, 10);
}
console.log(getFirstTenCountries());

function getLastTenCountries() {
  return countries.slice(-10);
}
console.log(getLastTenCountries());

function getMostCommonInitialLetter() {
  const initials = countries.map(country => country.name[0]);
  const initialCounts = initials.reduce((acc, initial) => {
    acc[initial] = (acc[initial] || 0) + 1;
    return acc;
  }, {});

  let mostCommonInitial = '';
  let maxCount = 0;

  for (const [initial, count] of Object.entries(initialCounts)) {
    if (count > maxCount) {
      mostCommonInitial = initial;
      maxCount = count;
    }
  }

  return mostCommonInitial;
}

console.log(getMostCommonInitialLetter());
  
