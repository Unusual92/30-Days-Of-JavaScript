
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Финляндия', 'Эстония', 'Швеция', 'Дания', 'Норвегия'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries;
const { width, height, area, perimeter } = rectangle;


const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },

];

users.forEach(({ name, scores, skills, age }) => {
  console.log(name, scores, skills, age);
});

const personsWithLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);


const [name, skills, [, , jsScore, reactScore]] = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
console.log(name, skills, jsScore, reactScore);

function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({ name, skills, scores }));
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: [
      ...student.skills.frontEnd,
      { skill: 'Bootstrap', level: 8 }
    ],
    backEnd: [
      ...student.skills.backEnd,
      { skill: 'Express', level: 9 }
    ],
    dataBase: [
      ...student.skills.dataBase,
      { skill: 'SQL', level: 8 }
    ],
    dataScience: [
      ...student.skills.dataScience,
      'SQL'
    ]
  }
};

console.log(newStudent);
