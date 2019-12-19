const HappyNumber = require('./common/HappyNumber')
const Multiples = require('./common/Multiples')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleHappyNumber = () => {
    rl.question('Informe um número para ser testado', answer => {
        const isHappyNumber = HappyNumber.isHappyNumber(parseInt(answer))
    
        if (isHappyNumber) {
            console.log('Este é um número feliz')
        } else {
            console.log('Este não é um número feliz')
        }

        rl.close();
    });
}

const handleMultiples = async () => {
    const size = await requestAnswer('Quantos múltiplos você deseja calcular? \n')

    const numbers = Multiples.getNumbers(parseInt(size))

    const orOperands = await requestAnswerUntilCancel(
        'Informe um número para utilizar como operador OU',
        'Deseja adicionar mais um número?'
    )

    const andOperands = await requestAnswerUntilCancel(
        'Informe um número para utilizar como operador AND',
        'Deseja adicionar mais um número?'
    )

    const { results, sum } = Multiples.getMultiples({
        numbers,
        orOperands,
        andOperands
    })

    console.log(results.filter(number => number !== false), sum)
    
    rl.close()
}

const requestAnswer = (question) => {
    return new Promise((resolve) => {
        rl.question(question, answer =>  {
            resolve(answer)
        });
    })
}

const requestAnswerUntilCancel = (question, secondQuestion) => {
    return new Promise(async resolve => {
        let keepAsking = true;

        let answers = []

        while (keepAsking) {
            const answer = await requestAnswer(`${question} \n`)

            const parsedAnswer = parseInt(answer)
            
            parsedAnswer && answers.push(parsedAnswer)
            
            const answerAddMore = await requestAnswer(`${secondQuestion} [S|N] \n`)
    
            if (answerAddMore.toLowerCase() === 'n') keepAsking = false
        }

        resolve(answers)
    })
}

const modules = {
    1: handleHappyNumber,
    2: handleMultiples,
}

rl.question(`
    Qual módulo voce deseja usar?

        1 - Numeros felizes

        2 - Calculo de múltiplos

`, answer =>  {
    if (!Object.keys(modules).includes(answer)) {
        rl.write('Opção inválida \n')
        rl.close()
    } else {
        modules[answer]()
    }
});
