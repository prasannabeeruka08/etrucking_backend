const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    customer_name :{
        type:String,
        require:true
    },
    customer_id :{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    Zip:{
        type:Number,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    notes:{
        type:String,
        require:true
    },
    created_by:{
        type:String,
        require:true
    },
    created_date:{
        type:Date,
        require:true
    },
    updated_by:{
        type:String,
        require:true
    },
    updated_date:{
        type:String,
        require:true
    }
});

 module.exports = mongoose.model('customer', CustomerSchema);

