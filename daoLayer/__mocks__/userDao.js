var userExists = (username, callback) => {
    if (username == "pravin") {
        var data = [];
        data.push(1);
        callback(null, data);
    } else {
        callback("custom error");
    }
}

var createUserTable = (callback) => {
    db.query(queries.USER.CREATE, (err, data) => {
        if (err) {
            callback(err)
        } else {
            //console.log(data.rows);
            callback(null, data.rows);
        }
    })
}

var createUser = (userData, callback) => {
    db.query(queries.USER.INSERT_USER, [userData.username, userData.password, userData.first_name, userData.last_name], (err, data) => {
        if (err) {
            console.log(err.stack)
            callback(err)
        } else {
            callback(null, data.rows[0])
        }
    })
}

var updateLastLogin = (userData, callback) => {
    db.query(queries.USER.UPDATE_LAST_LOGIN, [userData.token, userData.username], (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data.rows)
        }
    })
}

var userLogin = (userData, callback) => {
    if (userData.username.length != 0) {
        var user;
        if (userData.username == "pravin") {
            callback(null, user)
        } else {
            user = {
                password: 'pravin',
                token: 'asldjahosdihapkjhaskldf'
            };
            callback(null, user)
        }
    } else {
        callback("custom error");
    }
}

var updateUser = (userData, callback) => {
    db.query(queries.USER.UPDATE_DETAILS, [userData.first_name, userData.last_name, userData.username], (err, data) => {
        if (err) {
            console.error(err.stack)
            callback(err)
        } else {
            callback(null, data.rows[0]);
        }
    })
}

module.exports = {
    userExists,
    createUser,
    createUserTable,
    updateLastLogin,
    userLogin,
    updateUser
}