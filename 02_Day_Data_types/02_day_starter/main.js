let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3));
console.log(challenge.slice(3));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
let str = ' 30 Days Of JavaScript ';
console.log(str.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
let matches = challenge.match(/a/g);
console.log(matches.length);
console.log('30 Days of'.concat(' JavaScript'));
console.log(challenge.repeat(2));
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
console.log(typeof '10' === typeof 10);
console.log(+'10' === 10);
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);
console.log('python'.includes('on') && 'jargon'.includes('on'));
console.log('I hope this course is not full of jargon'.includes('jargon'));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
let randomIndex = Math.floor(Math.random() * challenge.length);
console.log(challenge[randomIndex]);
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
console.log(sentence.replace(/because because because/g, ''));
let loveCount = (sentence.match(/love/g) || []).length;
console.log(loveCount);
let becauseCount = (sentence.match(/because/g) || []).length;
console.log(becauseCount);
let cleanedSentence = sentence.replace(/[^a-zA-Z ]/g, "").toLowerCase();
let words = cleanedSentence.split(' ');
let wordCount = {};
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}
let maxCount = 0;
let mostFrequentWord = '';
for (let word in wordCount) {
  if (wordCount[word] > maxCount) {
    maxCount = wordCount[word];
    mostFrequentWord = word;
  }
}
console.log(mostFrequentWord);
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g).map(Number);
let monthlyIncome = incomeNumbers[0] + incomeNumbers[2];
let annualIncome = monthlyIncome * 12 + incomeNumbers[1];
console.log(annualIncome);
