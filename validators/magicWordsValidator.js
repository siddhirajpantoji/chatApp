const { body, validationResult, header } = require('express-validator/check')
const messages = require('../utils/messages').MAGIC_WORD

function createValidations(){

    return validate = ()=> {
        // Check if already exists and should not be blank 
        return [
            body('magic_words').exists().withMessage(messages.MAGIC_WORD_COMPULSARY).custom(value => {
                return new Promise((resolve, reject) => {
                    console.log("username validation ")
                    userService.checkIfuserExists(value, (err, data) => {
                        if (err) {
                            reject(err)
                        }
                        else {
                            if (!data) {
                                resolve();
                            }
                            else {
                                reject(messages.USERNAME_IN_USE);
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

        ]
    }
}

function deleteValidation(){
    // Allow if already Exists 
    return validate = ()=>{
        return [

        ]
    }
}
module.exports = {
    createValidations, editValidations, deleteValidation
}