var express  = require('express')
var router  = express.Router();
// Here User All Routes Ahead of API will be present 
const userRouter = require('./userRouter');
const magicWordRouter = require('./magicWordsRouter')
router.route('/user', userRouter);
router.route('/magic-word').get(magicWordsController.getAllWords)
.post(magicWordValidators.POST(), magicWordsController.createMagicEntry)
.delete(magicWordValidators.DELETE(), magicWordsController.deleteMagicWord).all((req,res)=>{
    
})

module.exports = router
