const express = require('express');
const router = express.Router();
var userController = require('../controllers/userController')
const healthController = require('../controllers/healthcheck')
//console.log("In Unsecured Routes ")
//console.log(console.log( userController.validate.signUp ));

router.post('/login', userController.validate.login, userController.login);
router.post('/signUp', userController.validate.signUp, userController.signUp);
router.get('/healthcheck',  healthController.healthCheck);
module.exports  = router;   