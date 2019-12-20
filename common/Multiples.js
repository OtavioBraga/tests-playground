const getNumbers = max => [...Array(max).keys()]

const sumResults = results => results
    .filter(number => typeof number === 'number')
    .reduce((a,b) => a + b, 0)

const isMultipleOfAny = (number, operands) => !!operands.find(operand => number % operand === 0)

const isMultipleOfAll = (number, operands) => !operands.find(operand => number % operand !== 0)

const getMultiples = ({numbers, orOperands, andOperands}) => {

    if (!Array.isArray(numbers)) {
        throw new Error('numbers must be a array of numbers')
    }

    if (Array.isArray(andOperands) && andOperands.includes(0)) {
        throw new Error('andOperands can`t includes zeros')
    }

    if (Array.isArray(orOperands) && orOperands.includes(0)) {
        throw new Error('orOperands can`t includes zeros')
    }

    if (!Array.isArray(andOperands)) {
        throw new Error('andOperands must be a array')
    }

    if (!Array.isArray(orOperands)) {
        throw new Error('orOperands must be a array')
    }

    const results = numbers.map(number => {
        const orOperandsResult = orOperands.length > 0 ? isMultipleOfAny(number, orOperands) : true

        const andOperandsResult = andOperands.length > 0 ? isMultipleOfAll(number, andOperands) : true

        if (orOperandsResult && andOperandsResult) {
            return number
        }

        return false
    })

    return {
        results,
        sum: sumResults(results)
    }
  
}


module.exports = {
    getMultiples,
    getNumbers,
    sumResults,
    isMultipleOfAny,
    isMultipleOfAll
}