const express = require('express');
const router = express.Router();
const Driver = require('../modals/driverdetails')


//reterving data
router.get('/drivers', (req, res, next)=>{
    Driver.find(function(err,driver_details){
         res.json(driver_details);
    })
})

//add contact
router.post('/driver',(req, res, next)=>{
    let newDriver = new Driver({
        driver_id : req.body.driver_id,
        driver_name : req.body.driver_name,
        tt : req.body.tt,
        status : req.body.status
    });
    newDriver.save((err,Driver)=>{
        if(err){
            res.json({msg: 'Something went wrong. Please try again.'});
        }else{
             res.json({msg: 'success'});
        }
    })
})

//delete contact
router.delete('/driver/:id',(req, res, next)=>{
    Driver.remove({_id: req.params.id}, function (err, result){
           if(err){
                res.json(err);
           }else{
               res.json({msg:'Success'});
           }
       })
})

//get driver to dispatch
router.post('/dispDrivers',(req, res, next)=>{
    console.log("request for /dispDrivers"+req.body.tt)
    Driver.find({ tt: req.body.tt}, function (err, result) {
    if(err){
        console.log("error for /dispDrivers"+result)
        res.json(err);
   }else{
        res.json(result);
   }
   
 })
})

module.exports = router;
