var userController = require('../controllers/userController')
var express  = require('express')
var router  = express.Router();
router.route('/user').post( userController.validate.signUp, userController.signUp)
        .put(userController.validate.updateUser, userController)
module.exports = router;