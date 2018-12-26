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
router.post('/newjob',(req, res, next)=>{
    let newJobs = new Jobs({
        customer_id : req.body.customer_id,
        customer_name : req.body.customer_name,
        job_id : req.body.job_id,
        job_name : req.body.job_name,
        start_date : req.body.start_date,
        job_location : req.body.job_location,
        job_type : req.body.job_type,
        weekday : req.body.weekday,
        weekend : req.body.weekend,
        load : req.body.load,
        ton : req.body.ton,
        notes: req.body.notes,
        status : req.body.status
    });
    console.log("req body   ---  "+req.body.job_id);
    console.log(newJobs);
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
    console.log("request for /custjobs"+req.body.customer_id)

    Jobs.find({ customer_id: req.body.customer_id }, function (err, result) {
    if(err){
        console.log("error for /custjobs"+result)
        res.json(err);
   }else{
        console.log("response body for /custjobs"+result)
        res.json(result);
   }
    })
})

//get jobs of a customer
router.post('/jobdetails',(req, res, next)=>{
    console.log("request for /jobdetails"+req.body.job_id)

    Jobs.find({ job_id: req.body.job_id }, function (err, result) {
    if(err){
        console.log("error for /jobdetails"+result)
        res.json(err);
   }else{
        console.log("response body for /jobdetails"+result)
        res.json(result);
   }
    })
})

module.exports = router;
