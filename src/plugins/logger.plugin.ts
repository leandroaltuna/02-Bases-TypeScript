
//const winston = require('winston');
import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

// export just to be tested in logger.plugin.test.ts
export const logger = winston.createLogger({
// const logger = winston.createLogger({
    level: 'info',
    //format: winston.format.json(),
    //defaultMeta: { service: 'user-service' },
    format: combine(
        timestamp(),
        json(),
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));


//module.exports = function buildLogger( service ) {
export const buildLogger = ( service: string ) => {

    return {
        log: ( message: string ) => {
            logger.log( 'info', { message, service } );
        },
        error: ( message: string ) => {
            logger.error( 'error', { message, service } );
        }
    }
}