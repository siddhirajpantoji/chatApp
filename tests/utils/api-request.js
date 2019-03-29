var request = require('request');

var hitApi = (url , method , body , callback)=>{
    request({
        method:method,
        uri:url,
        json:body
    }, (error,response,body)=>{
        console.log("Respone ka status "+response.statusCode);
        body.statusCode = response.statusCode;
        callback( error, body);
    })
}
module.exports = {
    hitApi
}