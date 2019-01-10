const express = require('express');
const router = express.Router();
const dispatch = require('../modals/dispatch')

router.post('/newdispatch',(req, res, next)=>{
    
    console.log(req.body.custId);
    
    let newDispatch = new dispatch({
        customer_id : req.body.custId,
        customer_name : req.body.custName,
        job_id : req.body.jobId,
        job_name : req.body.jobName,
        job_location : req.body.jobLoc,
        job_type : req.body.jobType,
        status : req.body.status,
        value : req.body.value
    });
    newDispatch.save((err,Driver)=>{
        if(err){
            res.json({msg: 'fail'});
        }else{
             res.json({msg: 'success'});
        }
    })
})

//reterving data
router.get('/dispatch', (req, res, next)=>{
    dispatch.find(function(err,driver_details){
         res.json(driver_details);
    })
})
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

module.exports = router;