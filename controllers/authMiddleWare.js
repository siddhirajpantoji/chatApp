const {  validationResult, header} = require('express-validator/check')
const messages = require('../utils/messages').USER_MESSAGES
const cryptoUtils = require('../utils/cryptoUtils');
var validate = ()=>{
    return [
        header('Authorization').exists().withMessage(messages.AUTH_INFO_MISSING).custom(value=>{
            return new Promise((resolve, reject )=>{
                // Check here if the user exists or not 
                console.log(value)
                var bearerTokenArr = value.split(" ");
                var token = bearerTokenArr[1];
                if( token ){
                    // Decypt Token first and then put it into JWT Verify 
                    var raw  = cryptoUtils.verifyToken(token);
                    if( !raw){
                        reject(messages.USER_NOT_AUTHORISED)
                    }
                    var decrypetd = cryptoUtils.decryptData(raw.data);
                    if( decrypetd ){
                        resolve();
                    }
                    else{
                        reject(messages.USER_NOT_AUTHORISED)
                    }
                }
                else{
                    reject(messages.AUTH_INFO_MISSING)
                }
            })
        })
    ]
}

var authMiddleware= (req,res,next)=>{
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(403).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    next();
}

module.exports = {
    authMiddleware, validate
}