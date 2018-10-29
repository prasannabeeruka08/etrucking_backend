const express = require('express');
const router = express.Router();
const Truck = require('../modals/truck')


//reterving data
router.get('/trucks', (req, res, next)=>{
    Truck.find(function(err,driver_details){
         res.json(driver_details);
    })
})

//add contact
router.post('/truck',(req, res, next)=>{
    let newTruck = new Truck({
        driver_name : req.body.driver_name,
        driver_id : req.body.driver_id,
        tt : req.body.tt,
        status : req.body.status
    });
    newTruck.save((err,Driver)=>{
        if(err){
            res.json({msg: 'failed to add contact : '});
        }else{
             res.json({msg: 'contact added successfully'});
        }
    })
})

//delete contact
router.delete('/truck/:id',(req, res, next)=>{
    Truck.remove({_id: req.params.id}, function (err, result){
           if(err){
                res.json(err);
           }else{
               res.json({msg:'Success'});
           }
       })
})

module.exports = router;
