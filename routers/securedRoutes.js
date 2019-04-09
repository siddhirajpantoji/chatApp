var express  = require('express');
var router  = express.Router();
// Here User All Routes Ahead of API will be present 

const userController = require('../controllers/userController');
const magicWordsController = require('../controllers/magicWords');
const magicWordValidators = require('../validators/magicWordsValidator');
const userValidator = require('../validators/userValidator');
const messages = require('../utils/messages').MESSAGES;
// User Routes 
router.route('/user').put(userValidator.PUT, userController.updateUser).all((req,res)=>{
    res.status(405).json({
        message:messages.METHOD_NOT_SUPPORTED
    });
});

// Magic Word Routes 
router.route('/magic-word').get(magicWordsController.getAllWords)
.post(magicWordValidators.POST(), magicWordsController.createMagicEntry)
.delete(magicWordValidators.DELETE(), magicWordsController.deleteMagicWord).all((req,res)=>{
    res.status(405).json({
        message: messages.METHOD_NOT_SUPPORTED
    });
});

module.exports = router;
