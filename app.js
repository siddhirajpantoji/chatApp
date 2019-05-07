
var express = require('express');
const expressValidator = require('express-validator');
const bodyparser= require('body-parser');
const openRoutes = require('./routers/unsecuredRoutes');
const authMiddleware = require('./controllers/authMiddleWare');
const securedRoutes = require('./routers/securedRoutes');
const ddlRoutes = require('./routers/DDLRouter');
// Step 1 is Sign up , Login and Securing API with routers. Socket programming is next step 

let app = new express();
// For Parsing only json body requests and reponse 
app.use(bodyparser.json());
app.use(expressValidator());

app.use('/open',openRoutes);
app.use('/api',authMiddleware.validate(),authMiddleware.authMiddleware, securedRoutes);
app.use('/createTable', ddlRoutes);

module.exports = app;


