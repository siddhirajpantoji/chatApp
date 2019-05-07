// This is complete login controller which will be working on strategies that are provided 
/**
 * 1. Local Login ( UserId and Password )=> This is current implemetation 
 * 2. Facebook Login with Access Token => Future 
 * 3. Validtors will be working according to strategy that is provided 
 */
const userService = require('../service/userservice');
const { validationResult } = require('express-validator/check');
const responseUtils = require('../utils/responseUtils');

var  login = (req, res)=> {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    var loginData = {
        username: req.body.username,
        password: req.body.password
    };
    userService.login(loginData, (err, data) => {
        responseUtils.send(err, data, req, res);
    });
};

module.exports = {
    login
};