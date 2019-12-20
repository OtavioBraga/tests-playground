const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestAnswer = (question) => {
    return new Promise((resolve) => {
        rl.question(`${question} \n`, answer =>  {
            resolve(answer)
        });
    })
}

const requestAnswerUntilCancel = (question, secondQuestion) => {
    return new Promise(async resolve => {
        let keepAsking = true;

        let answers = []

        while (keepAsking) {
            const answer = await requestAnswer(`${question}`)

            const parsedAnswer = parseInt(answer)
            
            parsedAnswer && answers.push(parsedAnswer)
            
            const answerAddMore = await requestAnswer(`${secondQuestion} [S|N] \n`)
    
            if (answerAddMore.toLowerCase() === 'n') keepAsking = false
        }

        resolve(answers)
    })
}

const write = message => rl.write(message)

const close = () => rl.close()

module.exports = {
    requestAnswer,
    requestAnswerUntilCancel,
    write,
    close
}