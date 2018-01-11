'use strict'
const mongoose = require('mongoose');
const ScheduleTranscation = mongoose.model('Schedule_transaction_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    }
}