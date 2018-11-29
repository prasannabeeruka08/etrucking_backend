const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    customer_name :{
        type:String,
        require:true
    },
    customer_id :{
        type:String,
        require:true
    },
    job_id:{
        type:String,
        require:true
    },
    job_location:{
        type:String,
        require:true
    },
    job_name:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    start_date:{
        type:String,
        require:true
    }
});

 module.exports = mongoose.model('jobs', ContactSchema);

