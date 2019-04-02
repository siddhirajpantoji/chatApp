/**
 * This file acts as healthcheck wil return the current timestamp from DB so ensure that application is up and running 
 */

const db = require('./db');
const queries = require('./queries').QUERIES;

var healthcheck = (callback) =>{
    db.query(queries.HEALTH_CHECK.GET_DATE,(err,data)=>{
        if(err){
            callback(err)
        }
        else{
            callback( null, data.rows[0]);
        }
    })
}

module.exports = {
    healthcheck
}