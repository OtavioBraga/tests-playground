/** global describe, it */
const HappyNumber = require('../HappyNumber')

describe('isHappyNumber tests', () => {
    it('returns true for a happy number (7)', () => {
        const result = HappyNumber.isHappyNumber(7)

        expect(result).toBe(true)
    })

    it('returns false for a non happy number (8)', () => {
        const result = HappyNumber.isHappyNumber(8)

        expect(result).toBe(false)
    })

    it('throws a error if no param is supplied', () => {
        expect(() => {
            HappyNumber.isHappyNumber()
        }).toThrow('The initial value must be a number')
    })

    it('calculates the squares of each digit of a number correctly', () => {
        const squares = HappyNumber.calculateSquares(42)
        
        const expectedSquares = [16, 4]

        expect(squares).toEqual(expectedSquares)
    })

    it('calculates the sum of squares of a number correctly', () => {
        const squares = HappyNumber.calculateSquares(42)

        const squaresSum = HappyNumber.sumSquares(squares)
        
        const expectedSquaresSum = 20

        expect(squaresSum).toEqual(expectedSquaresSum)
    })
})