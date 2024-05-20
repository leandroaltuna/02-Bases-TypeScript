/* const { getUUID } = require('../plugins/get-id.plugin');
const { getAge }  = require('../plugins/get-age.plugin');

const { http } = require('../plugins/http-client.plugin');

module.exports = {
  getAge, 
  getUUID,
  http,
} */

export { getAge } from './get-age.plugin';
export { getUUID } from './get-id.plugin';
export { httpClientPlugin as httpClient} from './http-client.plugin';
export { buildLogger } from './logger.plugin';
