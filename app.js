import { connect } from 'tls';

// importing modules

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

const route = require('./routes/route');
const employee = require('./routes/employee');
const customer = require('./routes/customer');

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kranthi:a12341234@ds139138.mlab.com:39138/etrucking_dev', {
  useMongoClient: true,
  connectTimeoutMS: 1000
});

//on connection 
mongoose.connection.on('connection', ()=>{
    useMongoClient: true
    console.log('connected to mongodb @ 27017' )
});

mongoose.connection.on('error', (err)=>{
    useMongoClient: true
    if(err){
        console.log('error occured '+ err )
    }  
});

//port number

const port = 3000;

//middleware - cors
app.use(cors());

//middleware - body-parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);
app.use('/internal',employee);
app.use('/customer',customer);

//testing server
app.get('/', (req, res )=> {
    res.send('testinggggg');
})

app.listen(port,()=> {
    console.log('server started at : '+port)
})