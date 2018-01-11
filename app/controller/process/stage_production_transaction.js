'use strict'
const mongoose = require('mongoose');
const StageProduction = mongoose.model('Stage_production_transaction');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    }
}