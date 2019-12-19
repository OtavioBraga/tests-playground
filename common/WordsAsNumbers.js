const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')


const alphabetWithValues = alphabet.reduce((acc, val, index) => {
	acc[val] = ++index
  return acc
}, {})

const calculateSingleWordValue = word => {
    return word
      .replace(/[^a-zA-Z]/g, '')
      .split('')
      .reduce((acc, letter) => acc + alphabetWithValues[letter], 0)
}

const calculateWordsValue = words => {
  if (Array.isArray(words)) {
    return words.map(word => calculateSingleWordValue(word))
  } else if (typeof words === 'string') {
    return calculateSingleWordValue(words)
  }

  throw new Error('The param must be a word or a list of words')
}

module.exports = {
  calculateWordsValue,
  calculateSingleWordValue
}