function calculateTotalIncome(monthlySalary, annualBonus, courseIncome) {
    let totalMonthlyIncome = monthlySalary + courseIncome;
    let totalAnnualIncome = totalMonthlyIncome * 12 + annualBonus;
    return totalAnnualIncome;
}
console.log(calculateTotalIncome(4000, 10000, 5500));

let numbers = [-4, -3, -1, -1, 0, 2, 4, 8];
numbers.sort((a, b) => a - b);
let range = numbers[numbers.length - 1] - numbers[0];
console.log(range);

function isValidName(str) {
    let pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return pattern.test(str);
}
console.log(isValidName('first_name'));
console.log(isValidName('first-name'));
console.log(isValidName('1first_name'));
console.log(isValidName('firstname'));

function mostCommonWords(text, count = 10) {
    let words = text.match(/\b\w+\b/g);
    let wordCount = {};
    let maxCount = 0;
    let result;

    for(let word of words) {
        word = word.toLowerCase();
        if(wordCount[word] != undefined) {
            ++wordCount[word];
        } else {
            wordCount[word] = 1;
        }
        if(wordCount[word] > maxCount) {
            maxCount = wordCount[word];
        }
    }

    result = Object.keys(wordCount).map(function(key) {
        return {word: key, count: wordCount[key]};
    });

    result.sort(function(a, b) {
        return b.count - a.count;
    });

    return result.slice(0, count);
}
console.log(mostCommonWords(paragraph));
