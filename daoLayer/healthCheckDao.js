/**
 * This file acts as healthcheck wil return the current timestamp from DB so ensure that application is up and running 
 */

const db = require('./db');
const queries = require('./queries').QUERIES;
var logger = require('winston_wrapper').getLogger('health-check');
var healthcheck = (callback) =>{
    db.query(queries.HEALTH_CHECK.GET_DATE,(err,data)=>{
        if(err){
            callback(err);
        }
        else{
            logger.error('Query :'+queries.HEALTH_CHECK+'::Result::'+JSON.stringify(data.rows[0]));
            callback( null, data.rows[0]);
        }
    });
};

module.exports = {
    healthcheck
};