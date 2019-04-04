const { body, validationResult, header } = require('express-validator/check')
const messages = require('../utils/messages').MAGIC_WORD
const magicWordService = require('../service/magicWords')
function createValidations(){

    return validate = ()=> {
        // Check if already exists and should not be blank 
        return [
            body('magic_words').exists().withMessage(messages.MAGIC_WORD_COMPULSARY).custom(value => {
                return new Promise((resolve, reject) => {
                  //  console.log("magicWord  validation ")
                  magicWordService.checkIfMagicWordExists(value, (err, data) => {
                        if (err) {
                            reject(err)
                        }
                        else {
                            if (!data) {
                                resolve();
                            }
                            else {
                                reject(messages.MAGIC_WORD_ALREADY_EXISTS);
                            }
                        }
                    })
                })
            })
        ]
    }
}

function editValidations() {
    return validate = () =>{
        // Allow if already exists 
        return [
            body('magic_words').exists().withMessage(messages.MAGIC_WORD_COMPULSARY).custom(value => {
                return new Promise((resolve, reject) => {
                  //  console.log("magicWord  validation ")
                  magicWordService.checkIfMagicWordExists(value, (err, data) => {
                        if (err) {
                            reject(err)
                        }
                        else {
                            if (data) {
                                resolve();
                            }
                            else {
                                reject(messages.MAGIC_WORD_DOESNOT_EXISTS);
                            }
                        }
                    })
                })
            })
        ]
    }
}

function deleteValidation(){
    // Allow if already Exists 
    return validate = ()=>{
        return editValidations()();
    }
}
module.exports = {
    createValidations, editValidations, deleteValidation
}

//console.log(deleteValidation()());