
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

function getUserById( id, callback )
{
    const usuario = users.find( function(usuario){
                return usuario.id == id;
            });
    
    //console.log({usuario: usuario}); 
    // otra manera de llamar es:
    //console.log({usuario});

    if( !usuario ){
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, usuario);
};

//getUserById(1);

module.exports = {
    getUserById
    // otra manera de llamar es:
    //getUserById: getUserById;
};