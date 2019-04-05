var express  = require('express');
var router  = express.Router();
// Here User All Routes Ahead of API will be present 

const userController = require('../controllers/userController');
const magicWordsController = require('../controllers/magicWords');
const magicWordValidators = require('../validators/magicWordsValidator');
// User Routes 
router.route('/user').put(userController.validate.updateUser, userController.updateUser).all((req,res)=>{
    res.status(405).json({
        message:'Method is not supported '
    });
});

// Magic Word Routes 
router.route('/magic-word').get(magicWordsController.getAllWords)
.post(magicWordValidators.POST(), magicWordsController.createMagicEntry)
.delete(magicWordValidators.DELETE(), magicWordsController.deleteMagicWord).all((req,res)=>{
    res.status(405).json({
        message:'Method is not supported '
    });
});

module.exports = router;
