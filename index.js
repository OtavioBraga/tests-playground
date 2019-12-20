const HappyNumber = require('./common/HappyNumber')
const Multiples = require('./common/Multiples')
const WordsAsNumbers = require('./common/WordsAsNumbers')

const CliHelper = require('./common/CliHelpers')

const handleHappyNumber = async () => {
    answer = await CliHelper.requestAnswer(`
        Informe um número para ser testado
    `)

    const isHappyNumber = HappyNumber.isHappyNumber(parseInt(answer))

    CliHelper.write(`${answer} ${isHappyNumber ? 'é' : 'não é'} um número feliz! \n`)

    CliHelper.close();
}

const handleMultiples = async () => {
    const size = await CliHelper.requestAnswer('Quantos múltiplos você deseja calcular?')

    const numbers = Multiples.getNumbers(parseInt(size))

    const orOperands = await CliHelper.requestAnswerUntilCancel(
        'Informe um número para utilizar como operador OU',
        'Deseja adicionar mais um número?'
    )

    const andOperands = await CliHelper.requestAnswerUntilCancel(
        'Informe um número para utilizar como operador AND',
        'Deseja adicionar mais um número?'
    )

    const { results, sum } = Multiples.getMultiples({
        numbers,
        orOperands,
        andOperands
    })

    console.log(results.filter(number => number !== false), sum)
    
    CliHelper.close()
}

const handleWordsAsNumbers = async () => {
    const word = await CliHelper.requestAnswer(`
        Digite uma palavra
        (Espaços, numeros e caracteres especiais serão ignorados)
    `)
    
    const wordValue = WordsAsNumbers.calculateWordsValue(word)

    const isHappyNumber = HappyNumber.isHappyNumber(wordValue)
    
    const isMultiple = Multiples.isMultipleOfAny(wordValue, [3, 5])

    CliHelper.write(`
        O valor da palavra '${word}':

        - ${isHappyNumber ? 'É' : 'Não é'} um número feliz;
        - ${isMultiple ? 'É' : 'Não é'} múltiplo de 3 ou 5.

        Valor da palavra: ${wordValue}

    `)

    CliHelper.close()
}

const start = async () => {
    const actions = {
        1: handleHappyNumber,
        2: handleMultiples,
        3: handleWordsAsNumbers,
    }

    const question = `
        Qual módulo voce deseja usar?
        
        1 - Numeros felizes

        2 - Calculo de múltiplos

        3 - Calculo de valor de uma palavra \n
    `

    const answer = await CliHelper.requestAnswer(`${question}`)

    if (!Object.keys(actions).includes(answer)) {
        CliHelper.write('Opção inválida \n')
        CliHelper.close()
    } else {
        actions[answer]()
    }
    
}

module.exports = {
    handleHappyNumber,
    handleMultiples,
    handleWordsAsNumbers,
    start,
}