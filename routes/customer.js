const express = require('express');
const router = express.Router();
const Customer = require('../modals/customer.js')


//reterving data
router.get('/customers', (req, res, next)=>{
    Customer.find(function(err,employee){
         res.json(employee);
    })
})

//add contact
router.post('/customer',(req, res, next)=>{
    let newCustomer = new Customer({
        customer_id : req.body.customer_id,
        customer_name : req.body.customer_name,
        customer_location : req.body.customer_location,
        status : req.body.status
    });
    newCustomer.save((err,Customer)=>{
        if(err){
            res.json({msg: 'fail'});
        }else{
             res.json({msg: 'success'});
        }
    })
})

//delete contact
router.delete('/customer/:id',(req, res, next)=>{
    Customer.remove({_id: req.params.id}, function (err, result){
           if(err){
                res.json(err);
           }else{
               res.json({msg:'Success'});
           }
       })
})

module.exports = router;
