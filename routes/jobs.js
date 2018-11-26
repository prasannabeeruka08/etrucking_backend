const express = require('express');
const router = express.Router();
const Jobs = require('../modals/jobs')


//reterving data
router.get('/jobs', (req, res, next)=>{
    Jobs.find(function(err,driver_details){
         res.json(driver_details);
    })
})

//add contact
router.post('/job',(req, res, next)=>{
    let newJobs = new Jobs({
        customer_id : req.body.customer_id,
        customer_name : req.body.customer_name,
        job_name : req.body.job_name,
        job_location : req.body.job_location,
        start_date : req.body.start_date,
        status : req.body.status
    });
    newJobs.save((err,Driver)=>{
        if(err){
            res.json({msg: 'fail'});
        }else{
             res.json({msg: 'success'});
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

//get jobs of a customer
router.post('/custjobs',(req, res, next)=>{
    console.log(req.body.customer_id)

    Jobs.find({ customer_id: req.body.customer_id }, function (err, result) {
    if(err){
        console.log(result)
        res.json(err);
   }else{
        console.log(result)
        res.json(result);
   }
    })
})

module.exports = router;
