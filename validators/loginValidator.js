const { body } = require('express-validator/check');
const messages = require('../utils/messages').USER_MESSAGES;
const validateLoginAPI = ()=>{
 return    [
        body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL),
        body('password').exists().withMessage(messages.PASSWORD_COMPULSARY)
    ];
};
module.exports = {
    POST:validateLoginAPI
};
