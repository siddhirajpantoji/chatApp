/* eslint-disable no-console */
const {  validationResult, header} = require('express-validator/check');
const messages = require('../utils/messages').USER_MESSAGES;
const cryptoUtils = require('../utils/cryptoUtils');
var validate = ()=>{
    return [
        header('Authorization').exists().withMessage(messages.AUTH_INFO_MISSING).custom((value, {req}) =>{
            return new Promise((resolve, reject )=>{
                // Check here if the user exists or not 
                
                var bearerTokenArr = value.split(' ');
                var token = bearerTokenArr[1];
                if( token ){
                    // Decypt Token first and then put it into JWT Verify 
                    var raw  = cryptoUtils.verifyToken(token);
                    if( !raw){
                        reject(messages.USER_NOT_AUTHORISED);
                    }
                    var decrypetd = cryptoUtils.decryptData(raw.data);
                    if( decrypetd ){
                        req.user_id = decrypetd.user_id;
                        resolve();
                    }
                    else{
                        reject(messages.USER_NOT_AUTHORISED);
                    }
                }
                else{
                    reject(messages.AUTH_INFO_MISSING);
                }
            });
        })
    ];
};

var authMiddleware= (req,res,next)=>{
    var errors = validationResult(req);
    console.log( req.user_id);
    if(!errors.isEmpty()){
        return res.status(401).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    next();
};

module.exports = {
    authMiddleware, validate
};