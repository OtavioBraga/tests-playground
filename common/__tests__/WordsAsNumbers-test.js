/** global describe, it */
const WordsAsNumbers = require('../WordsAsNumbers')

describe('Multiple tests', () => {

    it('return the sum of the word biscoito', () => {
        const sum = WordsAsNumbers.calculateWordsValue('biscoito')

        expect(sum).toBe(92)
    })

    it('return the sum of the words biscoito and bolacha', () => {
        const wordsSum = WordsAsNumbers.calculateWordsValue(['biscoito', 'bolacha'])

        expect(wordsSum).toEqual([92, 42]);
    })

    it('throws a error if no word os list is supplied', () => {
        expect(() => {
            WordsAsNumbers.calculateWordsValue()
        }).toThrow('The param must be a word or a list of words');
    })
})