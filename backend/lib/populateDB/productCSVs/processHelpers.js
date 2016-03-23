'use strict'

const authors = [ 'Marcella', 'Odessa', 'Lorenza', 'Ashton', 'Burma', 'Hsiu', 'Kitty', 'Marianela', 'Margret', 'Marine', 'Casie', 'Kymberly', 'Julieann', 'Bennie', 'Nelly', 'Dotty', 'Katelyn', 'Sasha', 'Stephenie', 'Rochell', 'Joette', 'Wan', 'Alpha', 'Nakita', 'Kathaleen', 'Stefanie', 'Althea', 'Emmett', 'Junita' ]


const generateDescription = (productArray) => {
  const descriptions = ['Perfect for individuals OR families, this product , a ' + productArray[0] + ', is an absolute bargain at £' + productArray[1] + '. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.',
    "A 2-dipole antenna designed for the Digital Audio Broadcast (DAB) band. Good power rating, combined with excellent electrical performance and mechanical strength making it suitable for severe conditions. A rugged omni-directional series featuring upright and inverted models with and without null fill and electrical tilt. Colinear and non-colinear designs available.",
    "Multiple options for inbuilding applications including omnidirectional and directional antennas. Some with field selectable horizontal beamwidths. High performance omni-directional antennas with reflector screens installed to create directional antennas. Upright and inverted models with and without null fill and electrical tilt in a variety of horizontal beamwidths.",
    "A linear array of dipole elements with phasing harness mounted on an aluminium boom. “Cardiod” shaped radiation pattern with high F/B ratio. Typically used in PMR/Trunked Radio and Broadcast applications. A wide selection of V-Pol, H-Pol and X-Pol single, dual and tri-band panels with fixed and variable electrical tilt options with horizontal beamwidths 18° up to 260°.",
    "Designed specifically to be used as a repeater donor antenna. Offers high gain while providing high sidelobe suppression at 90° and in the entire back hemisphere. Panel antennas modified to decrease the space between the reflector plate & mounting pipe in order to create the smallest diameter possible for three-antenna arrays typically used in flag pole type conncealment configurations.",
    "A circularly polarized UHF antenna designed to radiate downward, in the direction of the mounting mast. Used to provide maximum in-building penetration. Antenna in which all elements, both active and parasitic, are in one plane. May be used for directional beam control by varying the relative phase of each element.",
    "For BTS and automobile applications. Standard yagi antennas with all elements enclosed in a weather resistant, fiberglass shroud offering consistent, reliable performance in all weather conditions.", "VHF antennas with integrated mount designed to attach to the top of a mast. The active element is a folded monopole. Elements are user-tuned to achieve best performance at the operating frequency. 3-Sector base station antennas concealed inside compact cyclindrical shrouds offering maximum RF performance in the smallest diameter possible. Typically deployed as lamp posts, telephone poles, flagpoles and roof-top vents.",
    "One of the best performing antennas on the market, Amphenol’s log periodic antennas feature quick roll-off in the horizontal plane. Horizontal beamwidths available from 40°-102° with a variety of gain options. Multi-element highly directional antennas. Light, but strong construction for easy deployment. Available for medium duty with 150 W or heavy duty with 300 W."
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

const generateSingleReview = (productName) => {
  const reviews = [ "This " + productName + " is amazing. I didn't follow the normal instruction though and I think it works better. " + productName + " is absolutely amazing stuff.",
  "Bought the same size as the one it was replacing but m/lg is smaller than it used to be.",
  "Great fit and solid product, bravo " + productName,
  "great price, great fit, great brand. purchased one for my husband who then had me purchase again for a co-worker for secret santa.",
  "Not expected as what it is on the picture..",
  "This is a good attempt at a difficult balance - small kids wrist, lots of learning opportunities - how do they fit so much in the space available?" ,
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
