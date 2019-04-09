const { body } = require('express-validator/check');
const messages = require('../utils/messages').USER_MESSAGES;
var validateUserUpdate = () =>{
    return [
        body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL),
        body('first_name').exists().withMessage(messages.FIRST_NAME_REQ),
        body('last_name').exists().withMessage(messages.LAST_NAME_REQ),
    ];
};
var validateChangePassword = ()=>{
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
    ];
};
module.exports = {
    PUT : validateUserUpdate, 
    PATCH : validateChangePassword
};