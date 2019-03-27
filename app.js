
var express = require('express');
const expressValidator = require('express-validator')
const bodyparser= require('body-parser');
const openRoutes = require('./routers/unsecuredRoutes');
const authMiddleware = require('./controllers/authMiddleWare')
const userRoutes = require('./routers/userRouter')
const ddlRoutes = require('./routers/DDLRouter');
const port = process.env.PORT;
// Step 1 is Sign up , Login and Securing API with routers. Socket programming is next step 

app = new express();
// For Parsing only json body requests and reponse 
app.use(bodyparser.json())
app.use(expressValidator())

app.use("/open",openRoutes);
app.use("/api",authMiddleware.validate(),authMiddleware.authMiddleware, userRoutes);
app.use("/createTable", ddlRoutes);

module.exports = app;


