'use strict'

const authors = [ 'Marcella', 'Odessa', 'Lorenza', 'Ashton', 'Burma', 'Hsiu', 'Kitty', 'Marianela', 'Margret', 'Marine', 'Casie', 'Kymberly', 'Julieann', 'Bennie', 'Nelly', 'Dotty', 'Katelyn', 'Sasha', 'Stephenie', 'Rochell', 'Joette', 'Wan', 'Alpha', 'Nakita', 'Kathaleen', 'Stefanie', 'Althea', 'Emmett', 'Junita' ]

const generateDescription = (productArray) => {
  const descriptions = ['Perfect for individuals OR families, this product , the ' + productArray[0] + ', is an absolute bargain at £' + productArray[1] + '. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.',
    'One of the best-performing in its field, the ' + productArray[0] + ' features light, but strong construction for easy deployment. Experts have praised it as a leader in its field, and it is also remarkably affordable.',
    'On its release last year, the ' + productArray[0] + ' was met with universal acclaim from both the press and from fans of the brand. Featuring all the latest technologies in its field, it has proved resilient to rival products that have since been released.',
    'The ' + productArray[0] + ' is the latest in a line of quality products from this manufacturer, and it is no disappointment. Fans of the ' + productArray[1] + ' BETA will love its fully fledged new successor.'
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

const generateSingleReview = (productName) => {
  const reviews = [ 'This ' + productName + " is amazing. I didn't follow the normal instruction though and I think it works better. " + productName + ' is absolutely amazing stuff.',
    'Bought the same size as the one it was replacing but I think the new ' + productName + ' is smaller than it used to be.',
    'Great fit and solid product, bravo ' + productName,
    'great price, great fit, great brand. purchased a ' + productName + ' for my husband who then had me purchase again for a co-worker for secret santa.',
    'Not expected as what it is on the picture.. disappointed by the ' + productName,
    'This is a good attempt at a difficult balance - the ' + productName + ' has lots of learning opportunities - how do they fit so much in the space available?',
    'This ' + productName + ' was fantastic. I have never been so happy with a product before in my life as I was with the ' + productName
  ]
  const author = authors[Math.floor(Math.random() * authors.length)]
  const rating = +(Math.random() * 4 + 1).toFixed(1)
  const review = reviews[Math.floor(Math.random() * reviews.length)]
  return {
    author: author,
    text: review,
    rating: rating,
    date: Date.now()
  }
}

// generate three different reviews; get average rating from reviews; generate random stock
const generateThreeReviews = (productArray) => {
  let reviews = []
  for (let i = 0; i < 3; i++) {
    reviews.push(generateSingleReview(productArray[0]))
  }
  const rating = Math.round(reviews.reduce((acc, b) => {
    return acc + b.rating
  }, 0) / 3)
  const stock = Math.floor(Math.random() * 6)
  return {reviews: JSON.stringify(reviews), rating: rating, stock: stock}
}

module.exports = (productArray) => {
  const reviewsAndRating = generateThreeReviews(productArray)
  const description = generateDescription(productArray)
  return [reviewsAndRating.rating, reviewsAndRating.reviews, description, reviewsAndRating.stock]
}
