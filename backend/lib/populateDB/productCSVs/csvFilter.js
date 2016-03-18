const fs = require('fs')
const generateReviewAndDesc = require('./processHelpers.js')

const mapObj = {
  laptops: {
    1: 'title',
    5: 'price',
    42: 'imageLink'
  },
  footballs: {
    1: 'title',
    4: 'price',
    41: 'imageLink'
  },
  gardenFurniture: {
    1: 'title',
    4: 'price',
    40: 'imageLink'
  },
  hairdryers: {
    1: 'title',
    4: 'price',
    39: 'imageLink'
  },
  mensClothing: {
    1: 'title',
    4: 'price',
    38: 'imageLink'
  },
  televisions: {
    1: 'title',
    5: 'price',
    42: 'imageLink'
  },
  sportTech: {
    1: 'title',
    4: 'price',
    41: 'imageLink'
  },
  womensClothing: {
    1: 'title',
    4: 'price',
    38: 'imageLink'
  }
}

const csvFilter = (fileName) => {
  // Grab file; split into rows; slice off first row (header); split into
  // columns; filter for values according to mapObj; join all back into string
  const processedCSV = fs.readFileSync('original/' + fileName + '.csv', 'utf8')
    .replace(/"/g, '')
    .split('\n')
    .slice(1)
    .map((rowString) => rowString.split(','))
    .map((rowArray) => rowArray.filter((elem, index) => mapObj[fileName][index]))
    .map((rowArray) => {
      rowArray[0] = rowArray[0].slice(0, rowArray[0].length - 1)
      return rowArray.concat(generateReviewAndDesc(rowArray))
    })
    .map((rowArray) => rowArray.join('\t'))
    .join('\n')

  fs.writeFile('filtered/' + fileName + '.csv', processedCSV, (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

const fileNameArray = ['laptops', 'footballs', 'gardenFurniture', 'hairdryers',
'mensClothing', 'sportTech', 'televisions', 'womensClothing']

fileNameArray.forEach((x) => csvFilter(x))

// LAPTOPS
//   title: x[1],
//   price: x[5],
//   ratingImage: x[15],
//   imageLink: x[42],

// footballs
// title: 1
// price: 4
// ratingImage: 14
// imageLink: 41

// gardenFurniture
// title: 1
// price: 4
// ratingImage: 14
// imageLink: 40

// hairdryers
// title: 1
// price: 4
// ratingImage: 14
// imageLink: 39

// mensClothing
// title: 1
// price: 4
// ratingImage: 13
// imageLink: 38

// televisions
// title: 1
// price: 5
// ratingImage: 15
// imageLink: 42

// sportTech
// title: 1
// price: 4
// ratingImage: 14
// imageLink: 41

// womensClothing
// title: 1
// price: 4
// ratingImage: 13
// imageLink: 38
