'use strict'
const mongoose = require('mongoose');
const ScheduleTranscation = mongoose.model('Schedule_transaction_master');
const materialChk = mongoose.model('MaterialChk');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveScheduleTrans: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let scheduleTrans=await ScheduleTranscation.findOne({ $and:[{indu_id:req.body.indu_id},{product_id:req.body.product_id}]});
            if(scheduleTrans)
            throw validation.errorFormat('duplicate', 'Product already Exist', 409);
            let scheduleTransData=new ScheduleTranscation();
            scheduleTransData.indu_id = req.body.indu_id;
            scheduleTransData.product_id = req.body.product_id;
            scheduleTransData.quantity = req.body.quantity;
            scheduleTransData.fromDate = req.body.fromDate;
            scheduleTransData.toDate = req.body.toDate;
            await scheduleTransData.save();
            // let trans=await materialChk.findOne({ $and:[{indu_id:req.body.indu_id},{product_id:req.body.product_id}]});
            res.status(200).send({msg: 'done', data: scheduleTransData});
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