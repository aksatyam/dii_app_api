'use strict'
const mongoose = require('mongoose');
const ShiftHourly = mongoose.model('Shift_hourly_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveShiftHourly: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let shifthourly = await ShiftHourly.findOne({ $and:[{indu_id:req.body.indu_id},{shift_hourly_start:req.body.start_time},{shift_hourly_end:req.body.end_time}]});
            if(shifthourly)
            throw validation.errorFormat('duplicate', 'Shift Hourly already Exist', 409);
            let shiftHourlyData= new ShiftHourly();
            shiftHourlyData.indu_id = req.body.indu_id;
            shiftHourlyData.shift_hourly_start = req.body.start_time;
            shiftHourlyData.shift_hourly_end = req.body.end_time;
            shiftHourlyData.shift_details = req.body.details || 'NA';
            await shiftHourlyData.save();
            res.status(200).send({msg: 'done', data: shiftHourlyData});
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
    editShiftHourly: async(req, res)=>{
        let shifthourly=await ShiftHourly.findOne({_id: req.params.id});
        if(!shifthourly)
        throw validation.errorFormat('Not Found', 'Data Not Found For Entered Shift', 404);
        shifthourly.indu_id = req.body.indu_id || shifthourly.indu_id;
        shifthourly.shift_hourly_start = req.body.start_time || shifthourly.shift_hourly_start;
        shifthourly.shift_hourly_end = req.body.end_time || shifthourly.shift_hourly_end;
        shifthourly.shift_details = req.body.details || shifthourly.shift_details;
        await shifthourly.save();
        res.status(200).send({msg: 'Data Updation Success', data: shifthourly});
    },
    getAllShiftHourly: async(req, res)=>{
        try{
            let shifthourly= ShiftHourly.find({indu_id:req.params.id});
            if(!shifthourly)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Shift Hourly Data For Industry',data:shifthourly});
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
    getOneShiftHourly: async(req, res)=>{
        try{
            let shifthourly= ShiftHourly.findOne({_id:req.params.id});
            if(!shifthourly)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Shift Data For Industry',data:shifthourly});
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