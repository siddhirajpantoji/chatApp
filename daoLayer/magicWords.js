const db = require('./db');
const queries = require('./queries').QUERIES;

var createMagicTable  = (callback)=>{
    db.query(queries.MAGIC_WORDS.CREATE, (err,data)=>{
        if( err){
            return callback( err)
        }
        else{
            return callback( null,data);
        }
    })  
}

var insertIntoMagicTable =  (magic_word,callback ) => {
    db.query(queries.MAGIC_WORDS.INSERT, [magic_word], (err,data)=>{
        if( err){
            callback(err)
        } 
        else {
            callback( null, data.rows[0]);
        }
    })
}

var dropMagicTable  = ( callback)=>{
    db.query(queries.MAGIC_WORDS.DROP, (err,data)=>{
        if( err ){
            callback(err)
        }
        else{
            callback( null , data)
        }
    })
}
var deleteFromMagicTable = (magic_word , callback) =>{
    db.query(queries.MAGIC_WORDS.DELETE, (err,data)=>{
        if( err ){
            callback(err)
        }
        else{
            callback( null , data.rows[0]);
        }
    })
}

var getAllWords = (callback)=>{
    db.query(queries.MAGIC_WORDS.SELECT_ALL_BY_STATUS, (err,data)=>{
        if( err ){
            callback(err)
        }
        else{
            callback( null , data.rows);
        }
    })
}
module.exports = {
    createMagicTable , insertIntoMagicTable , dropMagicTable, deleteFromMagicTable , getAllWords
}