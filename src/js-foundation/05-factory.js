
/*
// dependencia de terceros sin factory function or patron adaptador
const {v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ({ name, birthdate }) => {
    
    return {
        id: uuidv4(),
        name, //esta syntaxis solo se aplica si se usa el mismo nombre de variable
        cumple: birthdate,
        //age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAge(birthdate)
    }
}

const obj = { name: 'John Doe', birthdate:'1985-01-22'};
const John = buildPerson(obj);

console.log(John);
*/

/*
// --- Patron Adaptador ---
//const { getUUID } = require('../plugins/get-id.plugin');
//const { getAge } = require('../plugins/get-age.plugin');
const { getUUID, getAge } = require('../plugins');

const buildPerson = ({ name, birthdate }) => {
    
    return {
        id: getUUID(),
        name, //esta syntaxis solo se aplica si se usa el mismo nombre de variable
        cumple: birthdate,
        age: getAge(birthdate)
    }
}

const obj = { name: 'John Doe', birthdate:'1985-01-22'};
const John = buildPerson(obj);

console.log(John);
*/

// Factory function
const buildMakePerson = ({ getUUID, getAge}) => {

    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name, //esta syntaxis solo se aplica si se usa el mismo nombre de variable
            cumple: birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson,
}