"use strict";
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
// const buildMakePerson = ({ getUUID, getAge }) => {
const buildMakePerson = ({ getUUID, getAge }) => {
    // return ({ name, birthdate }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = buildPerson( obj );
// console.log(john);
// module.exports = {
//   buildMakePerson,
// }
