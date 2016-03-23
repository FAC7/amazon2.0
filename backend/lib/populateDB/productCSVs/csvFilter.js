const fs = require('fs')
const Path = require('path')
const generateReviewAndDesc = require('./processHelpers.js')

const mapObj = { // necessary because different CSVs have values at different indexes.
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
  },
  tablets: {
    1: 'title',
    5: 'price',
    42: 'imageLink'
  },
  mensFragrance: {
    1: 'title',
    7: 'price',
    41: 'imageLink'
  },
  womensFragrance: {
    1: 'title',
    6: 'price',
    40: 'imageLink'
  },
  mobilePhones: {
    1: 'title',
    4: 'price',
    41: 'imageLink'
  }
}

const csvFilter = (fileName) => {
  // Grab file; split into rows; slice off first row (header); split into
  // columns; filter for values according to mapObj; add reviews, description
  // and stock; join all back into string; save in new location as csv.
  const processedCSV = fs.readFileSync(Path.join(__dirname, 'original', fileName + '.csv'), 'utf8')
    .replace(/"/g, '')
    .split('\n')
    .slice(1)
    .map((rowString) => rowString.split(','))
    .map((rowArray) => rowArray.filter((elem, index) => mapObj[fileName][index]))
    .map((rowArray) => {
      rowArray[0] = rowArray[0].replace(/\s*.\s*$/, '') // removes trailing '.'s and spaces
      return rowArray.concat(generateReviewAndDesc(rowArray)) // adds reviews, descriptions, stock
    })
    .map((rowArray) => rowArray.join('\t'))
    .join('\n')

  fs.writeFile(Path.join(__dirname, 'filtered', fileName + '.csv'), processedCSV, (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

const fileNameArray = ['laptops', 'footballs', 'gardenFurniture', 'hairdryers',
'mensClothing', 'sportTech', 'televisions', 'womensClothing', 'tablets',
'mensFragrance', 'womensFragrance', 'mobilePhones']

fileNameArray.forEach((x) => csvFilter(x))
