var nonKeyWords = ['the', 'and', 'with', 'has', 'had', 'his', 'hers', 'its', 'is', 'this', 'that', 'also',
'just', 'who', 'where', 'while', 'when', 'why', 'well', 'have', 'been', 'not', 'out', 'from', 'but', 'for', 'you',
'will', 'was', 'their', 'than', 'which', 'were', 'one', 'are', 'all', 'she', 'them', 'say', 'says', 'them', 'how',
'because', 'other', 'see', 'can', 'no', 'us', 'may', 'could', 'theres', 'him', 'her', 'lot', 'hes',
'shes', 'only', 'these']

module.exports = {

  removeUnwantedStrings: (keywordString) => {
    keywordString = keywordString.replace(/[<>]/g, '')
    nonKeyWords.forEach((word) => {
      var re = new RegExp(word, 'g')
      keywordString = keywordString.replace(re, '').trim()
    })
    return keywordString.replace(/\s{2,}/g, ' ')
  },

  toCookieString (obj, sep) {
    return Object.keys(obj).map((key) => {
      return key.toString() + '=' + obj[key].toString()
    }).join(sep)
  },

  fromCookieString (str, sep) {
    return str.split(sep).reduce((acc, curr) => {
      const arr = curr.split('=')
      acc[arr[0]] = arr[1]
      return acc
    }, {})
  }

}
