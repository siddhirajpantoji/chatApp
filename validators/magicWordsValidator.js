/* eslint-disable no-console */
const { body } = require('express-validator/check');
const messages = require('../utils/messages').MAGIC_WORD;
const magicWordService = require('../service/magicWords');
function createValidations(){
    
    let validate = ()=> {
        // Check if already exists and should not be blank 
        return [
            body('magic_word').exists().withMessage(messages.MAGIC_WORD_COMPULSARY).custom(value => {
                return new Promise((resolve, reject) => {
                    console.log('magicWord  validation ');
                  magicWordService.checkIfMagicWordExists(value, (err, data) => {
                      console.log(data );
                        if (err) {
                            reject(err);
                        }
                        else {
                            if (!data) {
                                resolve();
                            }
                            else {
                                reject(value + ' '+messages.MAGIC_WORD_ALREADY_EXISTS);
                            }
                        }
                    });
                });
            })
        ];
    };
    return validate;
}

function editValidations() {
    let  validate = () =>{
        // Allow if already exists 
        return [
            body('magic_word').exists().withMessage(messages.MAGIC_WORD_COMPULSARY).custom(value => {
                return new Promise((resolve, reject) => {
                  //  console.log("magicWord  validation ")
                  magicWordService.checkIfMagicWordExists(value, (err, data) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            if (data) {
                                resolve();
                            }
                            else {
                                reject(value +' '+messages.MAGIC_WORD_DOESNOT_EXISTS);
                            }
                        }
                    });
                });
            })
        ];
    };

    return validate;
}

function deleteValidation(){
    // Allow if already Exists 
    let validate  = ()=>{
        return editValidations()();
    };
    return validate;
}
//This will be used as a factory to do the work 
module.exports = {
    'POST':createValidations(),
    'PUT' :editValidations(),
    'DELETE': deleteValidation()
};

//console.log(deleteValidation()());