
// Axios
const axios = require('axios');


const httpClientPlugin = {

    /*
    // Fetch
    get: async( url ) => {
        const resp = await fetch( url );
        return await resp.json();
    },

    post: async( url, body ) => {},
    put: async( url, body ) => {},
    delete: async( url ) => {},
    */

    // Axios
    get: async( url ) => {
        const { data } = await axios.get( url );
        //console.log( data );
        return data;
    },

};

module.exports = {
    httpClient: httpClientPlugin,
}