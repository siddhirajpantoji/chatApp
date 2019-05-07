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
    callback(null, "success");
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
    if (userData.token != "" || userData.username != "") {
        var data = [];
        data.push(1);
        callback(null, data);
    } else {
        callback("custom error");
    }
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