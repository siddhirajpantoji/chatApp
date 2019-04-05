const { body, validationResult, header } = require('express-validator/check')
const magicWordsService = require('../service/magicWords');
const messages = require('../utils/messages').MAGIC_WORD

var createMagicTable = (req,res)=>{
    magicWordsService.createMagicWordsTable((err,data)=>{
        if( err ){
            res.status(err.status).json(err);
        }
        else{
            res.status(200).json(data);
        }
    })
}

var createMagicEntry = (req,res)=>{
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    var word_info = {
        magic_word : req.magic_word,
        user_id  : req.user_id
    }
    magicWordsService.insertIntoMagicTable( word_info, (err,data)=>{
        if( err ){
            res.status(err.status).json(err);
        }
        else{
            res.status(200).json(data);
        }
    })
}

var deleteMagicWord = (req,res)=>{
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
        //return  responseHandler.ERRORGeneric(req,res,400,errors.array())
    }
    var word_info = {
        magic_word : req.magic_word,
        user_id  : req.user_id
    }
    magicWordsService.deleteFromMagicTable( word_info.magic_word, (err,data)=>{
        if( err ){
            res.status(err.status).json(err);
        }
        else{
            res.status(200).json(data);
        }
    })
}
var getAllWords = (req,res)=>{
    magicWordsService.getAllWords((err,data)=>{
        if( err ){
            res.status(err.status).json(err);
        }
        else{
            res.status(200).json(data);
        }
    })
}
var dropMagicWords = (req,res)=>{
    magicWordsService.dropMagicTable((err,data)=>{
        if( err ){
            res.status(err.status).json(err);
        }
        else{
            res.status(200).json(data);
        }
    })
}
module.exports = {
    createMagicTable , createMagicEntry, deleteMagicWord , getAllWords , dropMagicWords
}