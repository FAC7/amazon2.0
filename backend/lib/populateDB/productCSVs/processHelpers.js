'use strict'
const generateDescription = (productArray) => {
  return 'Perfect for individuals OR families, this product , a ' +
  productArray[0] + ', is an absolute bargain at £' + productArray[1] +
  '. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.'
}

const generateSingleReview = (productName) => {
  const rating = +(Math.random() * (6 - 4) + 3).toFixed(1)
  const review = 'This ' + productName + ' was fantastic. I have never been so happy with a product before in my life as I was with the ' + productName
  return {
    author: 'nickname',
    text: review,
    rating: rating,
    date: Date.now()
  }
}

const generateThreeReviews = (productArray) => {
  let reviews = []
  for (let i = 0; i < 3; i++) {
    reviews.push(generateSingleReview(productArray[0]))
  }
  const rating = Math.round(reviews.reduce((acc, b) => {
    return acc + b.rating
  }, 0) / 3)
  return {reviews: JSON.stringify(reviews), rating: rating}
}

module.exports = (productArray) => {
  const description = generateDescription(productArray)
  const reviews = generateThreeReviews(productArray).reviews
  const rating = generateThreeReviews(productArray).rating
  return [rating, reviews, description]
}
