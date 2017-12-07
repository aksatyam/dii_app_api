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
            let shift = await Shift.findOne({ $and:[{indu_id:req.body.indu_id},{shift_time:req.body.shift_time}]});
            if(shift)
            throw validation.errorFormat('duplicate', 'Shift already Exist', 409);
            let shiftData = new Shift();
            shiftData.indu_id = req.body.indu_id;
            shiftData.shift_time = req.body.shift_time;
            shiftData.shift_start = req.body.start_time;
            shiftData.shift_end = req.body.end_time;
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
        let shift=await Shift.findOne({_id: req.params.id});
        if(!shift)
        throw validation.errorFormat('Not Found', 'Data Not Found For Entered Shift', 404);
        shift.indu_id = req.body.indu_id || shift.indu_id;
        shift.shift_time = req.body.shift_time || shift.shift_time;
        shift.shift_start = req.body.start_time || shift.shift_start;
        shift.shift_end = req.body.end_time || shift.shift_end;
        shift.shift_desc = req.body.shift_desc || shift.shift_desc;
        await shift.save();
        res.status(200).send({msg: 'Data Updation Success', data: shift});
    },
    gettAllShift: async(req, res)=>{
        try{
            let shift= Shift.find({indu_id:req.params.indu_id});
            if(!shift)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Shift Data For Industry',data:shift});
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
    getOneShift: async(req, res)=>{
        try{
            let shift= Shift.findOne({_id:req.params.id});
            if(!shift)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Shift Data For Industry',data:shift});
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
    }
}