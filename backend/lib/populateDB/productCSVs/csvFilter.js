const fs = require('fs')

const mapObj = {
  1: 'title',
  5: 'price',
  42: 'imageLink'
}

const csvFilter = (fileName) => {
  // Grab file; split into rows; slice off first row (header); split into
  // columns; filter for values according to mapObj; join all back into string
  const processedCSV = fs.readFileSync('original/' + fileName + '.csv', 'utf8')
    .split('\n')
    .slice(1)
    .map((rowString) => rowString.split(','))
    .map((rowArray) => rowArray.filter((elem, index) => mapObj[index]))
    .map((rowArray) => rowArray.join(','))
    .join('\n')

  fs.writeFile('filtered/' + fileName + '.csv', processedCSV, (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

csvFilter('laptops')

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
