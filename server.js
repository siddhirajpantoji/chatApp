// First App that loads 
require('dotenv').config();
port = process.env.PORT;
var app = require('./app')

var server  = app.listen(port, (err)=>{
    if(err){
        console.error("Unable to start setup in port "+ port, err)
    }
    else{
        console.log("Server started at ", port);
    }
})
//console.log(server)
// server.close(()=>{
//     console.log("Server Closed ")
// })