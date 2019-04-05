/* eslint-disable no-console */
const { body, validationResult } = require('express-validator/check');
const userService = require('../service/userservice');
const messages = require('../utils/messages').USER_MESSAGES;
/**
 * This is for Validation Apis and for fields , messages associated with it 
 * @param {*} method 
 */
const validate = {
    'login':
        [
            body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL),
            body('password').exists().withMessage(messages.PASSWORD_COMPULSARY)
        ]
    ,
    'signUp':
        [
            body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL).
                custom(value => {
                    return new Promise((resolve, reject) => {
                        console.log('username validation ');
                        userService.checkIfuserExists(value, (err, data) => {
                            if (err) {
                                reject(err);
                            }
                            else {
                                if (!data) {
                                    resolve();
                                }
                                else {
                                    reject(messages.USERNAME_IN_USE);
                                }
                            }
                        });
                    });
                }),
            body('password').exists().withMessage(messages.PASSWORD_COMPULSARY).not().isIn(['123', 'god', 'password']).withMessage(messages.COMMON_PASSWORD)
                .isLength({ min: 5 }).withMessage(messages.PASSWORD_LENGTH).matches(/\d/).withMessage(messages.PASSWORD_NUMBER_REQ),
            body('first_name').exists().withMessage(messages.FIRST_NAME_REQ),
            body('last_name').exists().withMessage(messages.LAST_NAME_REQ),
            body('passwordConfirmation').exists().withMessage(messages.CONFIRM_PASSWORD_REQ).custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password confirmation does not match password');
                } else {
                    return true;
                }
            })
        ]
    ,
    'updateUser':
        [
            body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL),
            body('first_name').exists().withMessage(messages.FIRST_NAME_REQ),
            body('last_name').exists().withMessage(messages.LAST_NAME_REQ),
        ],
    'updatePassword':
        [
            body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL),
            body('password').exists().withMessage(messages.PASSWORD_COMPULSARY).not().isIn(['123', 'god', 'password']).withMessage(messages.COMMON_PASSWORD)
                .isLength({ min: 5 }).withMessage(messages.PASSWORD_LENGTH).matches(/\d/).withMessage(messages.PASSWORD_NUMBER_REQ),
            body('passwordConfirmation').exists().withMessage(messages.CONFIRM_PASSWORD_REQ).custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password confirmation does not match password');
                } else {
                    return true;
                }
            })
        ]
};



var createUserTable = (req, res) => {
    userService.createUserTable((err, data) => {
        sendResponse(err, data, req, res);
    });
};

function sendResponse(err, data, req, res) {
    if (err) {
        res.status(err.status).json(err);
    }
    else {
        res.status(200).json(data);
    }
}

function login(req, res) {
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
        sendResponse(err, data, req, res);
    });
}

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
        sendResponse(err, data, req, res);
    });
}

var updateUser = (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    var userUpdateData = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    userService.updateUser(userUpdateData, (err, data)=>{
        sendResponse(err,data,req,res);
    });
};
module.exports = {
    createUserTable, login, signUp, validate , updateUser
};