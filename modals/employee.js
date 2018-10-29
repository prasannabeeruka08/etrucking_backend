const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    driver_id :{
        type:String,
        require:true
    },
    driver_name:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    tt:{
        type:String,
        require:true
    }
});

 module.exports = mongoose.model('emp', EmployeeSchema);

