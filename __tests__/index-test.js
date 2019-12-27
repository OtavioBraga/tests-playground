/** global describe, it */
const CliHelpers = require('../common/CliHelpers')

const Index = require('../index')


describe('Tests for index', () => {
    const requestAnswerSpy = jest.spyOn(CliHelpers, 'requestAnswer')

    const requestAnswerUntilCancelSpy = jest.spyOn(CliHelpers, 'requestAnswerUntilCancel')

    const writeSpy = jest.spyOn(CliHelpers, 'write')

    const closeSpy = jest.spyOn(CliHelpers, 'close')

    const getActionSpy = jest.spyOn(Index, 'getAction')

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('execute handleMultiples correctly', async () => { 
        requestAnswerSpy.mockResolvedValueOnce('500')

        requestAnswerUntilCancelSpy.mockResolvedValueOnce(['5', '7'])
        
        requestAnswerUntilCancelSpy.mockResolvedValueOnce(['8'])

        await Index.handleMultiples()

        const [[firstCallParam]] = writeSpy.mock.calls

        expect(firstCallParam).toMatch(/Múltiplos: 0,40,56,80,112,120,160,168,200,224,240,280,320,336,360,392,400,440,448,480/)

        expect(firstCallParam).toMatch(/Soma: 4856/)

        expect(requestAnswerSpy).toBeCalledTimes(1)

        expect(requestAnswerUntilCancelSpy).toBeCalledTimes(2)

        expect(closeSpy).toBeCalledTimes(1)
    })

    it('execute handleWordsAsNumbers correctly', async () => { 
        requestAnswerSpy.mockResolvedValueOnce('batata')

        await Index.handleWordsAsNumbers()

        const [[firstCallParam]] = writeSpy.mock.calls

        expect(requestAnswerSpy).toBeCalledTimes(1)

        expect(writeSpy).toBeCalledTimes(1)

        expect(closeSpy).toBeCalledTimes(1)
        
        expect(firstCallParam).toMatch(/O valor da palavra 'batata'/)

        expect(firstCallParam).toMatch(/Não é um número feliz/)
    
        expect(firstCallParam).toMatch(/É múltiplo de 3 ou 5/)

        expect(firstCallParam).toMatch(/Valor da palavra: 45/)
    })

    it('execute handleHappyNumber correctly', async () => { 
       requestAnswerSpy.mockResolvedValueOnce('8')

        await Index.handleHappyNumber()

        expect(writeSpy).toBeCalledWith('8 não é um número feliz! \n')

        expect(requestAnswerSpy).toBeCalledTimes(1)

        expect(closeSpy).toBeCalledTimes(1)
        

    })

    it('Calls write and close if the option is invalid', async () => { 
       requestAnswerSpy.mockResolvedValueOnce('4')

        await Index.start()

        expect(requestAnswerSpy).toBeCalledTimes(1)

        expect(closeSpy).toBeCalledTimes(1)

        expect(writeSpy).toBeCalledTimes(1)

        expect(writeSpy).toBeCalledWith('Opção inválida \n')
    })

    // it('Calls getAction if the option is valid', async () => {
    //     const action = '1'

    //     requestAnswerSpy.mockResolvedValueOnce(action)

    //     requestAnswerSpy.mockResolvedValueOnce('7')

    //     getActionSpy.mockReturnValueOnce(jest.fn())

    //     await Index.start()
    
    //     expect(requestAnswerSpy).toBeCalledTimes(2)

    //     expect(getActionSpy).toBeCalledTimes(1)

    //     expect(getActionSpy).toBeCalledWith(action)
    // })
})