// First App that loads 
require('dotenv').config();
let port = process.env.PORT;
var app = require('./app');
var logger = require('winston_wrapper').getLogger('app-file');
var server  = app.listen(port, (err)=>{
    if(err){
        logger.error('Unable to start Server at port '+port,err);
        //console.error('Unable to start setup in port '+ port, err);
    }
    else{
        logger.info('Server started at port'+port);
        //console.log('Server started at ', port);
    }
});
//console.log(server)
// server.close(()=>{
//     console.log("Server Closed ")
// })