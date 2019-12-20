/** global describe, it */
const Multiples = require('../Multiples')

describe('Multiple tests', () => {
    it('return the correct sum for multiples of 3 OR 5 under 1000 ', () => {
        const numbers = Multiples.getNumbers(1000)

        const { sum } = Multiples.getMultiples({
            numbers,
            andOperands: [],
            orOperands: [3, 5]
        })

        expect(sum).toBe(233168)
    })

    it('return the correct sum for multiples of 3 AND 5 under 1000 ', () => {
        const numbers = Multiples.getNumbers(1000)

        const { sum } = Multiples.getMultiples({
            numbers,
            andOperands: [3, 5],
            orOperands: []
        })

        expect(sum).toBe(33165)
    })

    it('return the correct sum for multiples of 3 OR 5 AND 7 under 1000 ', () => {
        const numbers = Multiples.getNumbers(1000)

        const { sum } = Multiples.getMultiples({
            numbers,
            orOperands: [3, 5],
            andOperands: [7]
        })

        expect(sum).toBe(33173)
    })

    it('throws a error if orOperands includes a zero', () => {
        const numbers = Multiples.getNumbers(1000)

        expect(() => {
            const { sum } = Multiples.getMultiples({
                numbers,
                andOperands: [],
                orOperands: [1,2,3,0],
            })
        }).toThrow('orOperands can`t includes zeros')
    })

    it('throws a error if andOperands includes a zero ', () => {
        const numbers = Multiples.getNumbers(1000)

        expect(() => {
            const { sum } = Multiples.getMultiples({
                numbers,
                andOperands: [1,2,3,0],
                orOperands: []
            })
        }).toThrow('andOperands can`t includes zeros')
    })

    it('throws a error if numbers is not an array', () => {
        const numbers = 'i`m string'

        expect(() => {
            const { sum } = Multiples.getMultiples({
                numbers,
                andOperands: [1,2,3],
                orOperands: []
            })
        }).toThrow('numbers must be a array of numbers')
    })

    it('sum the array of results correctly', () => {
        const results = [0, 25, false, 25, false, 30, false]

        const sum = Multiples.sumResults(results)

        expect(sum).toBe(80)
    })

    it('sum the array of results correctly even if a position is true instead of false', () => {
        const results = [0, 25, true, 25, false, 30, false]

        const sum = Multiples.sumResults(results)

        expect(sum).toBe(80)
    })

    it('generates a array of numbers correctly', () => {
        const expectedArray = [0,1,2,3,4]

        expect(
            Multiples.getNumbers(5)
        ).toEqual(expectedArray)
    })

    it('returns true if 7 is multiple of 5, 14 or 7', () => {
        expect(
            Multiples.isMultipleOfAny(7, [5, 14, 7])
        ).toBeTruthy()
    })

    it('returns true if the 300 is multiple of 50, 25 and 75', () => {
        expect(
            Multiples.isMultipleOfAll(300, [50, 25, 75])
        ).toBeTruthy()
    })

    it('returns false if 300 isn`t multiple of 50, 25 and 76', () => {
        expect(
            Multiples.isMultipleOfAll(300, [50, 25, 76])
        ).toBeFalsy()
    })

    it('returns false if 7 isn`t multiple of 5, 16 or 8', () => {
        expect(
            Multiples.isMultipleOfAny(7, [5, 16, 8])
        ).toBeFalsy()
    })

})