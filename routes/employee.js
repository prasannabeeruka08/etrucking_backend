const express = require('express');
const router = express.Router();
const Employee = require('../modals/dispatch')


//reterving data
router.get('/employees', (req, res, next)=>{
    Employee.find(function(err,employee){
         res.json(employee);
    })
})

//add contact
router.post('/employee',(req, res, next)=>{
    let newEmployee = new Employee({
        full_name : req.body.full_name,
        street1 : req.body.street1,
        street2 : req.body.street2,
        city : req.body.city,
        zip : req.body.zip,
        email : req.body.email,
        phone : req.body.phone,
        status : req.body.status,
        created_by : req.body.created_by,
        created_date : req.body.created_date,
        updated_by : req.body.updated_by,
        updated_date : req.body.updated_date
    });
    newEmployee.save((err,employee)=>{
        if(err){
            res.json({msg: 'failed to add contact : '});
        }else{
             res.json({msg: 'contact added successfully'});
        }
    })
})

//delete contact
router.delete('/employee/:id',(req, res, next)=>{
    Employee.remove({_id: req.params.id}, function (err, result){
           if(err){
                res.json(err);
           }else{
               res.json({msg:'Success'});
           }
       })
})

module.exports = router;
