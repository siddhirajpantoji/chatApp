const healtCheckService = require('../service/heathCheckService')

const healthCheck = (req,res)=>{
    healtCheckService.healthCheck((err,data)=>{
        if( err){
            res.status(err.status).json(err)
        }
        else{
            res.status(200).json({data})
        }
    })
}
module.exports = {
    healthCheck
}