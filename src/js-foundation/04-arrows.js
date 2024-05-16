
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

//arrow function que contiene mas de una linea de codigo
const getUserById = (id, callback) => {

    // arrow function que solo retorna un valor o solo requiere una linea de codigo.
    const usuario = users.find( (usuario) => usuario.id == id );

    // IF reducido
    ( usuario )
    ? callback(null, usuario)
    : callback(`User not found with id: ${id}`);

};

module.exports = {
    getUserById
};