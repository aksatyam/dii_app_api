'use strict'
const mongoose = require('mongoose');
const Shift = mongoose.model('Shift_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveShift: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let lot = await Shift.findOne({ $and:[{indu_id:req.body.indu_id},{shift_time:req.body.shift_time}]});
            if(lot)
            throw validation.errorFormat('duplicate', 'Shift already Exist', 409);
            let shiftData = new Shift();
            shiftData.indu_id = req.body.indu_id;
            shiftData.shift_time = req.body.shift_time;
            shiftData.shift_desc = req.body.shift_desc || 'NA';
            await shiftData.save();
            res.status(200).send({msg: 'done', data: shiftData});
        }
        catch(err){
            let error;
            if(!err.code || !err.status || !err.message) {
                error = validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    },
    editShift: async(req, res)=>{
        
    }
}