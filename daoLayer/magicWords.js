const db = require('./db');
const queries = require('./queries').QUERIES;

var createMagicTable  = (callback)=>{
    db.query(queries.MAGIC_WORDS.CREATE, (err,data)=>{
        if( err){
            return callback( err);
        }
        else{
            return callback( null,data);
        }
    });  
};

var insertIntoMagicTable =  (wordInfo,callback ) => {
    db.query(queries.MAGIC_WORDS.INSERT, [wordInfo.magic_word, wordInfo.user_id ], (err,data)=>{
        if( err){
            callback(err);
        } 
        else {
            callback( null, data.rows[0]);
        }
    });
};

var dropMagicTable  = ( callback)=>{
    db.query(queries.MAGIC_WORDS.DROP, (err,data)=>{
        if( err ){
            callback(err);
        }
        else{
            callback( null , data);
        }
    });
};
var deleteFromMagicTable = (magic_word , callback) =>{
    db.query(queries.MAGIC_WORDS.DELETE,[magic_word], (err,data)=>{
        if( err ){
            callback(err);
        }
        else{
            callback( null , data.rows[0]);
        }
    });
};

var getAllWords = (callback)=>{
    db.query(queries.MAGIC_WORDS.SELECT_ALL_BY_STATUS, (err,data)=>{
        if( err ){
            callback(err);
        }
        else{
            callback( null , data.rows);
        }
    });
};

var countWords = (word, callback ) =>{
    db.query(queries.MAGIC_WORDS.MAGIC_WORD_EXISTS, [word], (err, data )=>{
        if( err){
            callback( err);
        }
        else{
            callback( null , data.rows[0]);
        }
    });
};
module.exports = {
    createMagicTable , insertIntoMagicTable , dropMagicTable, deleteFromMagicTable , getAllWords , countWords
};