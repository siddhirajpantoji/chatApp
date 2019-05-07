const db = require('./db');
const queries = require('./queries').QUERIES;
var logger = require('winston_wrapper').getLogger('user-dao');
var userExists = (username, callback) => {
    db.query(queries.USER.USER_EXISTS, [username], (err, data) => {
        if (err) {
<<<<<<< HEAD
            logger.error('Query :' + queries.USER.USER_EXISTS + '::Result::' + JSON.stringify(data.rows[0]));
            callback(err);
        }
        else {

=======
            callback(err)
        } else {
            console.log(data.rows);
>>>>>>> 1e7526f7b2acbb5f336c8e456f90971638b90cc5
            callback(null, data.rows[0]);
        }
    });
};

var createUserTable = (callback) => {
    db.query(queries.USER.CREATE, (err, data) => {
        if (err) {
<<<<<<< HEAD
            callback(err);
        }
        else {
=======
            callback(err)
        } else {
>>>>>>> 1e7526f7b2acbb5f336c8e456f90971638b90cc5
            //console.log(data.rows);
            logger.error('Query :' + queries.USER.CREATE + '::Result::' + JSON.stringify(data.rows));
            callback(null, data.rows);
        }
    });
};

var createUser = (userData, callback) => {
    db.query(queries.USER.INSERT_USER, [userData.username, userData.password, userData.first_name, userData.last_name], (err, data) => {
        if (err) {
<<<<<<< HEAD
            //console.log(err.stack);
            callback(err);
        }
        else {
            logger.error('Query :' + queries.USER.INSERT_USER + '::Result::' + JSON.stringify(data.rows[0]));
            callback(null, data.rows[0]);
=======
            console.log(err.stack)
            callback(err)
        } else {
            callback(null, data.rows[0])
>>>>>>> 1e7526f7b2acbb5f336c8e456f90971638b90cc5
        }
    });
};

var updateLastLogin = (userData, callback) => {
    db.query(queries.USER.UPDATE_LAST_LOGIN, [userData.token, userData.username], (err, data) => {
        if (err) {
            callback(err);
        }
        else {
            logger.error('Query :' + queries.USER.UPDATE_LAST_LOGIN + '::Result::' + JSON.stringify(data.rows));
            callback(null, data.rows);
        }
    });
};

var userLogin = (userData, callback) => {
    db.query(queries.USER.LOGIN, [userData.username, userData.password], (err, data) => {
        if (err) {
            callback(err);
        }
        else {
            logger.error('Query :' + queries.USER.LOGIN + '::Result::' + JSON.stringify(data.rows[0]));
            callback(null, data.rows[0]);
        }
    });
};

var updateUser = (userData, callback) => {
    db.query(queries.USER.UPDATE_DETAILS, [userData.first_name, userData.last_name, userData.username], (err, data) => {
        if (err) {

            callback(err);
        }
        else {
            logger.error('Query :' + queries.USER.UPDATE_DETAILS + '::Result::' + JSON.stringify(data.rows[0]));
            callback(null, data.rows[0]);
        }
    });
};
module.exports = {
    userExists, createUser, createUserTable, updateLastLogin, userLogin, updateUser
};
