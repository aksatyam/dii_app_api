'use strict'
const mongoose = require('mongoose');
const Schedule = mongoose.model('Schedule_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    }
}