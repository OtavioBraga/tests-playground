const calculateSquares = value => value
    .toString()
    .split('')
    .map(digit => Math.pow(digit, 2))

const sumSquares = squares => squares.reduce((a,b) => a + b, 0)

const calculateHappyNumber = (value, iterations) => {
    const squares = calculateSquares(value)

    const squaresSum = sumSquares(squares) 

    if (iterations.includes(squaresSum)) return false

    if (squaresSum === 1) return true

    iterations.push(squaresSum)

    return calculateHappyNumber(squaresSum, iterations)
}

const isHappyNumber = value => {

    if (typeof value !== 'number') {
        throw new Error('The initial value must be a number')
    }

    const iterations = []

    return calculateHappyNumber(value, iterations)
}

module.exports = {
    isHappyNumber,
    calculateSquares,
    sumSquares,
    calculateHappyNumber,
}