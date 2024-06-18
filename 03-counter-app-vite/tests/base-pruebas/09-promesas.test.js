import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', async () => {
        const id = 1

        const heroe = await getHeroeByIdAsync(id)

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    })
    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', async () => {
        const id = 1

        const error = await getHeroeByIdAsync(id)

        expect(error).toBeTruthy()

    })
})