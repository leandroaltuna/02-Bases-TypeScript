// const axios = require('axios');
import axios from "axios";

export const httpClientPlugin = {

  get: async( url: string) => {
    const { data } = await axios.get( url );
    return data;
    // const resp = await fetch( url );
    // return await resp.json();     
  },

  post: async(url: string, body: any) => {
    throw new Error('Not implement');
  },
  put: async(url: string, body:any) => {
    throw new Error('Not implement');
  },
  delete: async(url: string) => {
    throw new Error('Not implement');
  },

};


/* module.exports = {
  http: httpClientPlugin,
}; */

