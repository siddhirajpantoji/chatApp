const { body , validationResult, header} = require('express-validator/check')
const messages = require('../utils/messages').USER_MESSAGES
const cryptoUtils = require('../utils/cryptoUtils');
var validate = ()=>{
    return [
        header('Authorisation').exists().withMessage(messages.AUTH_INFO_MISSING).custom(value=>{
            return new Promise((resolve, reject )=>{
                // Check here if the user exists or not 
                var bearerTokenArr = value.split(" ");
                var token = bearerTokenArr[1];
                if( token ){
                    // Decypt Token first and then put it into JWT Verify 
                    var decrypetd = cryptoUtils.decryptData(token);
                    var raw  = cryptoUtils.verifyToken(decrypetd);
                    if( raw ){
                        resolve();
                    }
                    else{
                        reject(USER_MESSAGES.USER_NOT_AUTHORISED)
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