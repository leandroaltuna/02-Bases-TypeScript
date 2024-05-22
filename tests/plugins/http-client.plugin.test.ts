import { httpClientPlugin } from "../../src/plugins/http-client.plugin";


describe('plugins/http-client.plugin.test.ts', () => {
    
    test('httpClientPlugin should return a string', async () => {

        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect( data ).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            // completed: expect.any(Boolean),
            completed: false
        });

    });

    test('httpClientPlugin should have POST, PUT and Delete methods', () => {
    
        const data = httpClientPlugin;

        // console.log( data );

        expect( typeof data.post ).toBe('function');
        expect( typeof data.put ).toBe('function');
        expect( typeof data.delete ).toBe('function');

    });

});