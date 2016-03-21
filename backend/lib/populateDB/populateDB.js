'use strict"'
const Path = require('path')

module.exports = (client) => {
  const fs = require('fs')
  const dbHelpers = require('./../dbHelpers.js')(client)

  // make array of all CSV files to be imported
  const fileNameArray = ['laptops', 'footballs', 'gardenFurniture', 'hairdryers',
  'mensClothing', 'sportTech', 'televisions', 'womensClothing']

  // grab files, split by newline (into rows) and split again by comma (into
  // columns). Results in one huge 4D array containing the info from all CSVs
  const fourDArray = fileNameArray.map((fileName) => {
    fileName = fileName + '.csv'
    const path = Path.join(__dirname, 'productCSVs/filtered', fileName)
    return fs.readFileSync(path, 'utf8')
      .split('\n')
      .map((rowString) => rowString.split('\t'))
  })

  // assign variable to each 3D array in the 4D array
  const laptops = fourDArray[0]
  const footballs = fourDArray[1]
  const gardenFurniture = fourDArray[2]
  const hairdryers = fourDArray[3]
  const mensClothing = fourDArray[4]
  const sportTech = fourDArray[5]
  const televisions = fourDArray[6]
  const womensClothing = fourDArray[7]

// add each member of an array to the database using dbHelper
  const addArrayOfProducts = (array, categories) => {
    array.forEach((productArr, i) => {
      dbHelpers.addProduct({
        title: productArr[0],
        price: productArr[1],
        imageLink: productArr[2],
        rating: productArr[3],
        reviews: productArr[4],
        description: productArr[5],
        stock: productArr[6],
        categories: JSON.stringify(categories)
      }, (x) => { })
    })
  }
  // Call function with each array, passing in categories
  // (we can change & improve these later)
  addArrayOfProducts(laptops, ['technology', 'computers', 'global'])
  addArrayOfProducts(footballs, ['sport', 'garden', 'global'])
  addArrayOfProducts(gardenFurniture, ['garden', 'furniture', 'global'])
  addArrayOfProducts(hairdryers, ['appliances', 'electric', 'global'])
  addArrayOfProducts(mensClothing, ['clothing', 'men', 'global'])
  addArrayOfProducts(sportTech, ['technology', 'sport', 'clothing', 'global'])
  addArrayOfProducts(televisions, ['technology', 'television', 'global'])
  addArrayOfProducts(womensClothing, ['clothing', 'women', 'global'])
}
