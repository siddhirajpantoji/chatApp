var router  = require('express').Router();

var userController = require('../controllers/userController');
var magicWordController = require('../controllers/magicWords');

router.route('/users').get(userController.createUserTable);
router.route('/magic-words').get(magicWordController.createMagicTable);

module.exports =  router;