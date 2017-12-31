'use strict'
const mongoose = require('mongoose');
const MaterialChk = mongoose.model('MaterialChk');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    }
}