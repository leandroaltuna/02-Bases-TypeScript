
import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contain Flash, Superman', () => {

        // expect( characters ).toContain('Flash');
        // expect( characters ).toContain('Superman');

        expect( characters ).toEqual(expect.arrayContaining([ 'Flash', 'Superman' ]));

    });

    test('First character should be Flash and second Superman', () => {

        // const[ Flash, Superman ] = characters;

        // expect( Flash ).toBe('Flash');
        // expect( Superman ).toBe('Superman');

       expect( characters[0] ).toBe( 'Flash' );
       expect( characters[1] ).toBe( 'Superman' );

    });

});