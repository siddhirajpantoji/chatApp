
var express = require('express');
const expressValidator = require('express-validator');
const bodyparser= require('body-parser');
const winston = require('winston_wrapper');
var logger = winston.getLogger('app-file');
const openRoutes = require('./routers/unsecuredRoutes');
const authMiddleware = require('./controllers/authMiddleWare');
const securedRoutes = require('./routers/securedRoutes');
const ddlRoutes = require('./routers/DDLRouter');
const responseUtils = require('./utils/responseUtils');
// Step 1 is Sign up , Login and Securing API with routers. Socket programming is next step 

let app = new express();
// For Parsing only json body requests and reponse 
app.use(bodyparser.json());
app.use(expressValidator());
app.use(winston.expressMiddleware);
logger.info('Entered App File ');
app.use('/open',openRoutes);
app.use('/api',authMiddleware.validate(),authMiddleware.authMiddleware, securedRoutes);
app.use('/createTable', ddlRoutes);

// For any other Resource URL Sending 404 
app.use('*',(req, res, next) => {
    //console.error('Resource Not Found');
    const error = new Error('Resource not found!');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    // Global Exception handler 
   // console.error('Exception occured in Global ', error);
    // res.status(error.status || 500);
    // res.json({
    //     error: {
    //         message: error.message
    //     }
    // });
    var result = {
        status : error.status || 500,
        message : error.message,
        err:error
    };
    responseUtils.send(result,null,req,res);
    //utils.Error500(req, res, error);
});

module.exports = app;


