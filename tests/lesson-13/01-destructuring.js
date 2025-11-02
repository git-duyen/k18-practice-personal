const myClass = {
  school: 'BBA',
  course: 'Full-stack QA',
};

// const school = myClass.school;
// const course = myClass.course;

const { school, course } = myClass;

console.log(school);     // => 'BBA',
console.log(course); // => 'Full-stack QA'