
const heatlthCheckDao = require('../daoLayer/healthCheckDao');

var healthCheck = (callback)=>{
    heatlthCheckDao.healthcheck((err,data)=>{
        if( err){
            result = {
                status : 500,
                message : "DB Not Reachable ",
                err:err
            }
            callback(result);
        }
        else{
            
            callback( null, data);
        }
    })
}
module.exports = {
    healthCheck
}