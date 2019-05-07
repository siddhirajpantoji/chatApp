var crypto = require('crypto');
const jwt = require('jsonwebtoken');

var SECRET_KEY = "sidd@1234&^767";

var generateToken = (data) => {
    var token = jwt.sign({
        data
    }, SECRET_KEY, {
        expiresIn: 3600
    })
    return token;
}

var verifyToken = (encData) => {
    console.log(encData)
    var data;
    try {
        data = jwt.verify(encData, SECRET_KEY);
    } catch (err) {
        console.error("Token Verification failed ", err)
    }
    console.log(data);
    return data;
}

var encryptData = (data) => {
    var mykey = crypto.createCipher('aes-128-cbc', SECRET_KEY);
    var mystr = mykey.update(JSON.stringify(data), 'utf8', 'hex');
    mystr += mykey.final('hex');
    return mystr;
}
var decryptData = (data) => {
    var mykey = crypto.createDecipher('aes-128-cbc', SECRET_KEY);
    var mystr = mykey.update(data, 'hex', 'utf8');
    mystr += mykey.final('utf8');
    mystr = JSON.parse(mystr);
    return mystr;
}

var hashData = (data) => {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}
module.exports = {
    generateToken,
    verifyToken,
    encryptData,
    decryptData,
    hashData
}