const { body } = require('express-validator/check');
const messages = require('../utils/messages').USER_MESSAGES;
const userService = require('../service/userservice');
const validateSignUpAPI = () => {
    return [
        body('username').exists().withMessage(messages.USERNAME_COMPULSARY).isEmail().withMessage(messages.USERNAME_MUST_BE_EMAIL).
            custom(value => {
                return new Promise((resolve, reject) => {
                    //console.log('username validation ');
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
    ];
};
module.exports = {
    POST: validateSignUpAPI
};