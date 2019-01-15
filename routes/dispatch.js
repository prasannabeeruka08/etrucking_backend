const express = require('express');
const router = express.Router();
const dispatch = require('../modals/dispatch')

router.post('/newdispatch',(req, res, next)=>{
    
    console.log(req.body.value);
    
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

//get waiting dispatch info 
router.post('/dispatchW',(req, res, next)=>{
    console.log("request for /dispatchW"+req.body.job_id)
    dispatch.find({ job_id: req.body.job_id,status : "wait" }, function (err, result) {
    if(err){
        console.log("error for /custjobs"+result)
        res.json(err);
   }else{
        console.log("response body for /custjobs"+result)
        
        dispatch.remove({job_id: req.body.job_id,status : "wait" }, function (err, results){
            if(err){
                 res.json(err);
            }
        })
        res.json(result);
   }
    })
})




module.exports = router;