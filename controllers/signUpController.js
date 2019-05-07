const { validationResult } = require('express-validator/check');
const userService = require('../service/userservice');
const responseUtils = require('../utils/responseUtils');

function signUp(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    var signUpData = {
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    userService.signUp(signUpData, (err, data) => {
        responseUtils.send(err, data, req, res);
    });
}


module.exports = {
    signUp
};