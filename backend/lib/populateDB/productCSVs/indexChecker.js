const fs = require('fs')
const Path = require('path')

fs.readFileSync(Path.join(__dirname, 'original', 'mobilePhones' + '.csv'), 'utf8')
  .split('\n')
  .map((rowString) => rowString.split(','))
  .map((rowArray) => rowArray.forEach((el, i) => console.log(i + '>>> ' + el)))