import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string', () =>{

    test('getSaludo debe retornar Igor',()=>{
        const name = 'Igor'
        const message = getSaludo(name)
        expect(message).toBe('Hola '+name)
    })
})