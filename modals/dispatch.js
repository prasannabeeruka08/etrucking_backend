const mongoose = require('mongoose');

const DispatchSchema = mongoose.Schema({
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
    },
    customer_id:{
        type:String,
        require:true
    },
    customer_name:{
        type:String,
        require:true
    },
    job_id:{
        type:String,
        require:true
    },
    job_name:{
        type:String,
        require:true
    },
    job_location:{
        type:String,
        require:true
    },
    job_type:{
        type:String,
        require:true
    },
    value:{
        type:Object,
        require:true
    }
});

 module.exports = mongoose.model('dispatch', DispatchSchema);

