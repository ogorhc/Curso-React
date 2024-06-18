import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ÍD', () => {
        const id = 1
        const heroe = getHeroeById(id)

        expect(heroe).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        )
    })

    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        const id = 100
        const heroe = getHeroeById(id)

        expect(heroe).toBeFalsy()

    })

    test('getHeroesByOwner debe de retornar un array de heroes por owner', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ])
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
    })

    test('getHeroesByOwner debe de retornar un array de heroes por owner', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ])
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
    })

})