
// require('./js-foundation/01-template');
//console.log(emailTemplate);

//const templateExports = require('./js-foundation/01-template');
//console.log(templateExports.emailTemplate);

//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//console.log(emailTemplate);

/*
const{getUserById} = require('./js-foundation/03-callbacks');

const id = 2;

getUserById( id, function( error, usuarito ) {
    if (error){
        throw new Error( error );
    }

    console.log({usuarito});
});
*/

/*
// funcion de flecha -- arrow functions --
const{getUserById} = require('./js-foundation/04-arrows');

const id = 1;

getUserById( id, (error, usuarito) => 
    {
        if ( error ){
            throw new Error( error );
        }
        console.log({usuarito});
    }
);
*/

/*
//--- Patron Adaptador --
require('./js-foundation/05-factory')
*/

/*
// Factory function
const { getUUID, getAge } = require('./plugins');
const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson( {getUUID, getAge} );
const obj = { name: 'John Doe', birthdate:'1985-01-22'};

const john = makePerson( obj );

console.log({ john });
*/


// Promises
//const getPokemonById = require('./js-foundation/06-promises');

/*
// Example 1:
getPokemonById( 1, ( pokemon ) => {
    console.log({ pokemon });
});
*/

/*
// Example 2:
//const info = getPokemonById(2);
//console.log( info );

getPokemonById(1)
    .then( ( pokemon ) => console.log({ pokemon }) )
    .catch( ( err ) => { console.log( 'Intente de nuevo' ) })
    .finally( () => { console.log( 'Finalmente' ) });
*/

// Node Logger - Winston
const { buildLogger } = require('./plugins');
const logger = buildLogger('app.js');
logger.log( 'Hola Mundo' );
logger.error( 'Esto es algo malo' ); 

// nuevo comentario