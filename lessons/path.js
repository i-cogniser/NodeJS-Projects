const path = require('path')

console.log('Склеить участки пути',path.join(__dirname, '..', '..'));
const fullPath= path.resolve(__dirname, 'first', 'second','third.js' );

console.log('Парсинг пути', path.parse(fullPath));
console.log('Разделитель в ОС', path.sep);
console.log('Проверка на обсалютный путь', path.isAbsolute('first/second'));
console.log('название файла', path.basename(fullPath));
// console.log('Расширение файла', path.extname(fullPath));

// -----------------------------------------------------------

const siteUrl = 'http://localhost:8000/users?id=5123'

const url = new URL(siteUrl)
console.log(url);
