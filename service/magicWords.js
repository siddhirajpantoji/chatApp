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

var insertIntoMagicTable = (word_info , callback )=>{
    magicDao.insertIntoMagicTable( word_info , (err,data)=>{
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

var checkIfMagicWordExists = ( magic_word , callback)=>{
    magicDao.countWords(magic_word, (err,data)=>{
        if( err){
            callback( {
                status: 500, 
                message :"Unable to get Magic word Count ",
                err:err.stack
            })
        }
        else{
            exists = (data.count != 0);
            callback( null, exists);
        }
    })
}

var dropMagicWordTable  = (callback)=>{
    magicDao.dropMagicTable((err,data)=>{
        if( err ){
            callback( {
                status: 500, 
                message :"Unable to get Magic word Count ",
                err:err.stack
            })
        }
        else{
            callback( null, "Table Dropped ")
        }
    })
}
module.exports = {
    createMagicWordsTable , insertIntoMagicTable , deleteFromMagicTable , getAllWords, checkIfMagicWordExists, dropMagicWordTable
}