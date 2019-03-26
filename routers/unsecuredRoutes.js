const express = require('express');
const router = express.Router();
var userController = require('../controllers/userController')
console.log("In Unsecured Routes ")
//console.log(console.log( userController.validate.signUp ));

router.post('/login', userController.validate.login, userController.login);
router.post('/signUp', userController.validate.signUp, userController.signUp);
module.exports  = router;   