'use strict'
const mongoose = require('mongoose');
const ScheduleTranscation = mongoose.model('Schedule_transaction_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveScheduleTrans: async(req,res)=>{
        res.status(200).send({msg:'All Schedule Transaction Data',data:req});
    },
    editScheduleTransaction: async(req, res)=>{

    },
    getAllScheduleTransaction: async(req,res)=>{
        try{
            let scheduleTrans=await ScheduleTranscation.find({indu_id:req.params.id}).populate('indu_id product_id');
            if(!scheduleTrans){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Schedule Transaction Data',data:scheduleTrans});
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
    getOneScheduleTransaction: async(req,res)=>{
        try{
            let scheduleTrans=await ScheduleTranscation.find({_id:req.params.id}).populate('indu_id product_id');
            if(!scheduleTrans){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Schedule Transaction Data',data:scheduleTrans});
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