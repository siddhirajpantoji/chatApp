const magicDao = require('../daoLayer/magicWords');

var createMagicWordsTable = (callback)=>{
    magicDao.createMagicTable((err,data)=>{
        if( err){
            callback({
                status:500,
                message : "Unable to Create Magic words table ",
                err : err.stack 
            })
        }
        else{
            callback( null , "table Created ")
        }
    })
}

var insertIntoMagicTable = (magic_word , callback )=>{
    magicDao.insertIntoMagicTable( magic_word , (err,data)=>{
        if( err ){
            callback({
                status:500,
                message : "Unable to insert into  Magic words table ",
                err : err.stack 
            })
        }
        else{
            callback( null , data)
        }
    })
}

var  deleteFromMagicTable = (magic_word, callback)=>{
    magicDao.deleteFromMagicTable( magic_word , (err, data)=>{
        if( err ){
            callback({
                status:500,
                message : "Unable to delete  Magic words table ",
                err : err.stack 
            })
        }
        else{
            callback( null , data)
        }
    })
}
var getAllWords = (callback)=>{
    magicDao.getAllWords((err,data)=>{
        if( err ){
            callback({
                status:500,
                message : "Unable to delete  Magic words table ",
                err : err.stack 
            })
        }
        else{
            callback( null , data)
        }
    })
}

module.exports = {
    createMagicWordsTable , insertIntoMagicTable , deleteFromMagicTable , getAllWords
}