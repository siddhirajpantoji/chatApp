const express = require('express');
const router = express.Router();
var userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const loginValidtor = require('../validators/loginValidator');
const healthController = require('../controllers/healthcheck');
const signupValidator = require('../validators/signUpValidator');
//console.log("In Unsecured Routes ")
//console.log(console.log( userController.validate.signUp ));

router.post('/login', loginValidtor.POST, loginController.login);

router.post('/signUp', signupValidator.POST, userController.signUp);
router.get('/healthcheck',  healthController.healthCheck);
module.exports  = router;   