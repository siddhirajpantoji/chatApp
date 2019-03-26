
var userDao = require('../daoLayer/userDao');
var cryptoUtils = require('../utils/cryptoUtils')

var checkIfuserExists = (username, callback) => {
    userDao.userExists(username, (err, data) => {
        if (err) {
            result = {
                status: 500,
                message: "User Not Found ",
                err: err
            }
            callback(result)
        }
        else {
            // Check count over here and return count only
            console.log(data)
            exists = (data.count != 0);
            console.log(exists);
            callback(null, exists)
        }
    })
}
var login = (userdata, callback) => {
    userdata.password = cryptoUtils.hashData(userdata.password);
    userDao.userLogin(userdata, (err, user) => {
        if (err) {
            result = {
                status: 401,
                message: "User Not Verified ",
                err: err
            }
            return callback(result)
        }
        else {
            if( !user){
                return callback({
                    status:401,
                    message:"User Not Verified "
                })
            }
            user.password = undefined
            user.token = undefined
            var tokenData = cryptoUtils.encryptData(user);
            token = cryptoUtils.generateToken(tokenData);
            callback(null, { token })
        }
    })
}

var createUserTable = (callback) => {
    userDao.createUserTable((err,data) => {
        if (err) {
            result = {
                status: 500,
                message: "Unable to Create table ",
                err: err
            }
            callback(result);
        }
        else {
            callback(null, "Table Created ");
        }
    })
}
var signUp = (userData, callback) => {
    userData.password = cryptoUtils.hashData(userData.password);
    userDao.createUser(userData, (err, data) => {
        if( err){
            result = {
                status: 500,
                message: "User Not Created  ",
                err: err
            }
            callback(result)
        }
        else{
            data.token = undefined
            data.password = undefined
            callback( null, data);
        }
    })
}
var updateUser =( userData, callback) =>{
     userDao.updateUser( userData , (err,data)=>{
        if( err){
            result = {
                status: 500,
                message: "User Not Upadted   ",
                err: err
            }
            callback(result)
        }
        else{
            data.token = undefined
            data.password = undefined
            callback( null, data);
        }
     })
}
module.exports = {
    checkIfuserExists, login, createUserTable, signUp , updateUser
}