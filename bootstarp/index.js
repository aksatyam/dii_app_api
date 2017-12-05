'use strict'
require('dotenv').config();
let express=require('express');
let app=express();
let config = require('../config')(app);

module.exports=()=>{
    app.listen(8100,()=> console.log('App started'));
}