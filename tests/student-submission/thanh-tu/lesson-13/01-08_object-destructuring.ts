// Bai tap 1:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  occupation: 'Software Engineer',
};

const { firstName, lastName, age } = person;

console.log('Bài tập 1: ' + `${firstName} ${lastName}, ${age}`);

// Bai tap 2:
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'White',
};

const { brand, model, year, color } = car;

console.log('Bài tập 2: ' + `${brand} - ${model} - ${color}, ${year}`);

// Bai tap 3:
const user = {};

const { name = 'Guest' } = user;

console.log('Bài tập 3: ' + name);

// Bai tap 4:
const product = {};

const { price = 0 } = product;

console.log('Bài tập 4: ' + price);

// Bai tap 5:
const book = {
  title: 'Dế Mèn Phiêu Lưu Ký',
};

const { title: bookTitle } = book;

console.log('Bài tập 5: ' + bookTitle);

// Bai tap 6:
const movie = {
  director: 'Victor Vũ',
};

const { director: filmDirector } = movie;

console.log('Bài tập 6: ' + filmDirector);

// Bai tap 7:
const person2 = {
  address: {
    street: 'Nguyễn Huệ',
    city: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
};

const {
  address: { street },
} = person2;

console.log('Bài tập 7: ' + street);

// Bai tap 8:
const product2 = {
  details: {
    brand: 'Vinfast',
    model: 'VF3',
    color: 'Yellow',
  },
};

const {
  details: { model: product2Model },
} = product2;

console.log('Bài tập 8: ' + product2Model);
