
describe('Test perteneciente a <DemoTest/>', () => {

    test('Esta prueba no debe de fallar', () => {

        // 1. Arrange - Inicialización
        const message1 = 'Hola Mundo'

        // 2. Act - Estímulo
        const message2 = message1.trim()

        //3. Assert - Observar el comportamiento
        expect(message1).toBe(message2)

    }
    )
})