const MESSAGES  = {
    OK :'Everything looks good ',
    ERR_500: 'Something went wrong . Please try again ',
    ERR_400 : 'Page not Found ',
    ERR_401 :'Not Autuenticated ',
    ERR_403 :'Not Authorised ', 
    METHOD_NOT_SUPPORTED : 'Method is not supported  '
};

const USER_MESSAGES = {
    IS_REQ : 'is required ',
    IS_MISSING: ' is missing ',
    USERNAME_COMPULSARY:' Username '+ this.IS_REQ,
    PASSWORD_COMPULSARY:' Password '+ this.IS_REQ,
    USERNAME_MUST_BE_EMAIL: 'Username must be Email Id ',
    USERNAME_IN_USE :' Username in Use . Please use another email id ',
    PASSWORD_LENGTH :'Password must be 5+ characters long ',
    PASSWORD_NUMBER_REQ: ' Password must contain numbers ',
    COMMON_PASSWORD: 'Password  must not be common words ',
    CONFIRM_PASSWORD: 'Confirm Password Doesnot match ',
    FIRST_NAME_REQ: 'First Name required ',
    LAST_NAME_REQ: 'First Name required ',
    CONFIRM_PASSWORD_REQ : 'Confirm password is Compulsary ',
    AUTH_INFO_MISSING : 'Authentication info is missing ',
    USER_NOT_AUTHORISED : 'Authentication info invalid '
};

const MAGIC_WORD = {
    MAGIC_WORD_COMPULSARY : 'Magic Words is compulsary '  ,
    MAGIC_WORD_ALREADY_EXISTS : 'Magic Word already exists ',
    MAGIC_WORD_DOESNOT_EXISTS : 'Magic Word doesnot  exists '
};
module.exports = {MESSAGES, USER_MESSAGES, MAGIC_WORD};