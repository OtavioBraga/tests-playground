/** global describe, it */
const HappyNumber = require('../HappyNumber')

describe('isHappyNumber tests', () => {
    it('returns true for a happy number (7)', () => {
        const result = HappyNumber.isHappyNumber(7)

        expect(result).toBe(true)
    })

    it('returns true for a happy number (8)', () => {
        const result = HappyNumber.isHappyNumber(8)

        expect(result).toBe(false)
    })

    it('throws a error if no param is supplied', () => {
        expect(() => {
            HappyNumber.isHappyNumber()
        }).toThrow('The initial value must be a number')
    })
})