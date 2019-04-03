var router  = require('express').Router();

var userController = require('../controllers/userController');
router.route("/users").get(userController.createUserTable);
router.route("/magic-words").get(userController.createUserTable);


module.exports =  router