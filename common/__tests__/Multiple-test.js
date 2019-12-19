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
})