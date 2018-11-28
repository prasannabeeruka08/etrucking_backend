const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema({
    truck_number :{
        type:String,
        require:true
    },
    truck_type:{
        type:String,
        require:true
    },
    days_on_field:{
        type:String,
        require:true
    },
    milage:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
});

 module.exports = mongoose.model('trucks', TruckSchema);

