

/* 
// Example 1:
const getPokemonById = ( id, callback ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    /*
    //--- Promesas (simple) ---
    fetch( url ).then(( response ) => {
        //console.log( response );

        response.json().then( (pokemon) => {
            //console.log(pokemon.name);
            callback( pokemon.name );
        });
    });
    

    //--- Promesas en cadena ---
    fetch( url )
        .then( ( resp ) => resp.json() )
        .then( ( pokemon ) => {
            callback( pokemon.name );
        });
}
*/

/*
// Example 2:
const getPokemonById = ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    //--- Promesas en cadena ---
    return fetch( url )
        .then( ( resp ) => resp.json() )
        .then( ( pokemon ) => pokemon.name )
        //.then( () => { throw new Error('Pokemon no existe') }) ;
}
*/

/*
// Example 3:
// Async - Await. 
// Async: Convierte una funcion regular en una function promise. Await: condigo bloqueante
const getPokemonById = async( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const resp = await fetch( url );
    const pokemon = await resp.json();

    return pokemon.name;
}
*/

// Example 4:
// Patron adaptador - FetchAPI
const { httpClient } = require('../plugins');

const getPokemonById = async( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await httpClient.get( url );

    return pokemon.name;
}

module.exports = getPokemonById;