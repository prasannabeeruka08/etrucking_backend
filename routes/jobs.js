const express = require('express');
const router = express.Router();
const Jobs = require('../modals/jobs')


//reterving data
router.get('/Jobs', (req, res, next)=>{
    Jobs.find(function(err,driver_details){
         res.json(driver_details);
    })
})

//add contact
router.post('/Job',(req, res, next)=>{
    let newJobs = new Jobs({
        driver_name : req.body.driver_name,
        driver_id : req.body.driver_id,
        tt : req.body.tt,
        status : req.body.status
    });
    newJobs.save((err,Driver)=>{
        if(err){
            res.json({msg: 'failed to add contact : '});
        }else{
             res.json({msg: 'contact added successfully'});
        }
    })
})

//delete contact
router.delete('/Job/:id',(req, res, next)=>{
    Jobs.remove({_id: req.params.id}, function (err, result){
           if(err){
                res.json(err);
           }else{
               res.json({msg:'Success'});
           }
       })
})

module.exports = router;
