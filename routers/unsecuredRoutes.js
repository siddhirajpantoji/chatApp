const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const loginValidtor = require('../validators/loginValidator');
const healthController = require('../controllers/healthcheck');
const signupValidator = require('../validators/signUpValidator');
const signUpController = require('../controllers/signUpController');
//console.log("In Unsecured Routes ")
//console.log(console.log( userController.validate.signUp ));

router.post('/login', loginValidtor.POST(), loginController.login);

router.post('/signUp', signupValidator.POST(), signUpController.signUp );
router.get('/healthcheck',  healthController.healthCheck);
module.exports  = router;   