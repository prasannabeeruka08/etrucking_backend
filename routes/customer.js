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
        customer_name : req.body.customer_name,
        customer_id : req.body.customer_id,
        address : req.body.address,
        city : req.body.city,
        zip : req.body.zip,
        email : req.body.email,
        phone : req.body.phone,
        status : req.body.status,
        notes : req.body.notes,
        created_by : req.body.created_by,
        created_date : req.body.created_date,
        updated_by : req.body.updated_by,
        updated_date : req.body.updated_date
    });
    newCustomer.save((err,Customer)=>{
        if(err){
            res.json({msg: 'failed to add contact : '});
        }else{
             res.json({msg: 'contact added successfully'});
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