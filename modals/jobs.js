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
    job_type:{
        type:String,
        require:true
    },
    notes:{
        type:String,
        require:true
    },
    weekday:{
        type:Object,
        require:true
    },
    weekend:{
        type:Object,
        require:true 
    },
    load:{
        type:Object,
        require:true 
    },
    ton:{
        type:Object,
        require:true
    },
    notes:{
        type:String,
        require:false
    },
    start_date:{
        type:String,
        require:true
    }
});

 module.exports = mongoose.model('jobs', ContactSchema);

