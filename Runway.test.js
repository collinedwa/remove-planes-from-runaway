const Runway = require('./Runway')
const Plane = require('./Plane')

describe('plane tests', () => {
    test('can properly construct plane', () => {
        newPlane = new Plane(737, 'commercial');
        expect(newPlane.model).toBe(737);
        expect(newPlane.type).toBe('commercial');

        expect(() => {new Plane()}).toThrow();
    })
    test('plane serial increments', () => {
        secondPlane = new Plane(737, 'commercial');
        expect(secondPlane.serial).toBe(2);
    })
})

describe('runway tests', () => {
    test('verify max capacity', () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    })

    test('can initialize new Runway', () => {
        newRunway = new Runway('Bogus Runway');

        expect(() => {new Runway()}).toThrow();
    })

    test('can add planes', () => {
        newRunway.add(new Plane(737, 'commercial'));
    })

    test('cannot add planes at max capacity', () => {
        for(let i = 0; i < 100; i++){
            newRunway.add(new Plane(737, "commercial"));
        }

        console.log(Runway.planes.length)
        expect(() => {newRunway.add(new Plane(737, 'commercial'))}).toThrow();
        
        newRunway.removeAll();
    })

    test('can remove planes', () => {
        newPlane = new Plane(737, 'commercial');
        newRunway.add(newPlane);
        newRunway.remove(newPlane);
    })

    test('cannot remove plane if runway is empty', () => {
        expect(() => {newRunway.remove(newPlane)}).toThrow();
    })
})