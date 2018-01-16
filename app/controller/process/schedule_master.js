'use strict'
const mongoose = require('mongoose');
const Schedule = mongoose.model('Schedule_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveSchedule: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let schedule=await Schedule.findOne({ $and:[{indu_id:req.body.indu_id},{product_id:req.body.product_id}]});
            if(schedule)
            throw validation.errorFormat('duplicate', 'Product already Exist', 409);
            let scheduleData=new Schedule();
            scheduleData.indu_id = req.body.indu_id;
            scheduleData.product_id = req.body.product_id;
            scheduleData.stages = req.body.stages;
            await scheduleData.save();
            res.status(200).send({msg: 'done', data: scheduleData});
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
    editSchedule: async(req,res)=>{
        let schedule=await Schedule.findOne({_id: req.params.id});
        if(!schedule){
            throw validation.errorFormat('Not Found', 'Data Not Found Of Product', 404);
        }
        schedule.product_id = req.body.product_id || schedule.product_id;
        scheduleData.stages = req.body.stages || scheduleData.stages;
        await schedule.save();
        res.status(200).send({msg: 'Data Updation Success', data: schedule});   
    },
    getAllSchedule: async(req,res)=>{
        try{
            let schedule=await Schedule.find({indu_id:req.params.id}).populate('indu_id product_id stages.stage_id');
            if(!schedule){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Schedule Data',data:schedule});
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
    getOneSchedule: async(req, res)=>{
        try{
            let schedule=await Schedule.findOne({_id:req.params.id}).populate('indu_id product_id stages.stage_id');
            if(!schedule)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Product Data',data:schedule});
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