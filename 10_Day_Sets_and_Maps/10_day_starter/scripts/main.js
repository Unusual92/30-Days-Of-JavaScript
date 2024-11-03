const emptySet = new Set();

for (let i = 0; i <= 10; i++) {
    emptySet.add(i);
}
console.log(emptySet);

console.log(emptySet.delete(2));

emptySet.clear();

const rappers = [
    '21 Savage',
    'JPEGMAFIA',
    'Ye',
    'MF Doom',
    'Future',
  ]
  const rapSet = new Set(rappers);
  console.log(rapSet);

const countriesMap = new Map()

countriesMap.set('Russia', 143000000);
countriesMap.set('Omsk', 1100000);
countriesMap.set('UK', 59600000);
console.log(countriesMap);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let c =[...b,...a];
let C = new Set(c);
console.log(C);

let d = [...a].filter((num) => b.includes(num));
let D = new Set(d);

console.log(D);

let A = new Set(a);
let B = new Set(b);
let e = a.filter((num) => !B.has(num));
let E = new Set(e);

console.log(E);

const countriesSet = new Set();
countries.forEach(country => {
    country.languages.forEach(language => {
        countriesSet.add(language);
    });
  });
console.log(countriesSet.size);

const myMap = new Map();
countries.forEach(country => {
    country.languages.forEach(language => {
        if(myMap.has(language)){
            let value = myMap.get(language);
            myMap.set(language, value+1);
        }
        else {
            myMap.set(language, 1);
        }
    });
  });
const myArray = Array.from(myMap, ([language, count]) => ({ language, count }));
myArray.sort((a, b) => b.count - a.count);
const topLanguages = myArray.slice(0, 10);
console.log(topLanguages);

