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
            scheduleData.stage0 = req.body.stage0;
            scheduleData.stage0_perUnitTime = req.body.stage0_perUnitTime;
            scheduleData.stage1 = req.body.stage1;
            scheduleData.stage1_perUnitTime = req.body.stage1_perUnitTime;
            scheduleData.stage2 = req.body.stage2;
            scheduleData.stage2_perUnitTime = req.body.stage2_perUnitTime;
            scheduleData.stage3 = req.body.stage3;
            scheduleData.stage3_perUnitTime = req.body.stage3_perUnitTime;
            scheduleData.stage4 = req.body.stage4;
            scheduleData.stage4_perUnitTime = req.body.stage4_perUnitTime;
            scheduleData.stage5 = req.body.stage5;
            scheduleData.stage5_perUnitTime = req.body.stage5_perUnitTime;
            scheduleData.stage6 = req.body.stage6;
            scheduleData.stage6_perUnitTime = req.body.stage6_perUnitTime;
            scheduleData.stage7 = req.body.stage7;
            scheduleData.stage7_perUnitTime = req.body.stage7_perUnitTime;
            scheduleData.stage8 = req.body.stage8;
            scheduleData.stage8_perUnitTime = req.body.stage8_perUnitTime;
            scheduleData.stage9 = req.body.stage9;
            scheduleData.stage9_perUnitTime = req.body.stage9_perUnitTime;
            scheduleData.stage10 = req.body.stage10;
            scheduleData.stage10_perUnitTime = req.body.stage10_perUnitTime;
            scheduleData.stage11 = req.body.stage11;
            scheduleData.stage11_perUnitTime = req.body.stage11_perUnitTime;
            scheduleData.stage12 = req.body.stage12;
            scheduleData.stage12_perUnitTime = req.body.stage12_perUnitTime;
            scheduleData.stage13 = req.body.stage13;
            scheduleData.stage13_perUnitTime = req.body.stage13_perUnitTime;
            scheduleData.stage14 = req.body.stage14;
            scheduleData.stage14_perUnitTime = req.body.stage14_perUnitTime;
            scheduleData.stage15 = req.body.stage15;
            scheduleData.stage15_perUnitTime = req.body.stage15_perUnitTime;
            scheduleData.stage16 = req.body.stage16;
            scheduleData.stage16_perUnitTime = req.body.stage16_perUnitTime;
            scheduleData.stage17 = req.body.stage17;
            scheduleData.stage17_perUnitTime = req.body.stage17_perUnitTime;
            scheduleData.stage18 = req.body.stage18;
            scheduleData.stage18_perUnitTime = req.body.stage18_perUnitTime;
            scheduleData.stage19 = req.body.stage19;
            scheduleData.stage19_perUnitTime = req.body.stage19_perUnitTime;
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
        schedule.stage0 = req.body.stage0 || schedule.stage0;
        schedule.stage0_perUnitTime = req.body.stage0_perUnitTime || schedule.stage0_perUnitTime;
        schedule.stage1 = req.body.stage1 || schedule.stage1;
        schedule.stage1_perUnitTime = req.body.stage1_perUnitTime || schedule.stage1_perUnitTime;
        schedule.stage2 = req.body.stage2 || schedule.stage2;
        schedule.stage2_perUnitTime = req.body.stage2_perUnitTime || schedule.stage2_perUnitTime;
        schedule.stage3 = req.body.stage3 || schedule.stage3;
        schedule.stage3_perUnitTime = req.body.stage3_perUnitTime || schedule.stage3_perUnitTime;
        schedule.stage4 = req.body.stage4 || schedule.stage4;
        schedule.stage4_perUnitTime = req.body.stage4_perUnitTime || schedule.stage4_perUnitTime;
        schedule.stage5 = req.body.stage5 || schedule.stage5;
        schedule.stage5_perUnitTime = req.body.stage5_perUnitTime || schedule.stage5_perUnitTime;
        schedule.stage6 = req.body.stage6 || schedule.stage6;
        schedule.stage6_perUnitTime = req.body.stage6_perUnitTime || schedule.stage6_perUnitTime;
        schedule.stage7 = req.body.stage7 || schedule.stage7;
        schedule.stage7_perUnitTime = req.body.stage7_perUnitTime || schedule.stage7_perUnitTime;
        schedule.stage8 = req.body.stage8 || schedule.stage8;
        schedule.stage8_perUnitTime = req.body.stage8_perUnitTime || schedule.stage8_perUnitTime;
        schedule.stage9 = req.body.stage9 || schedule.stage9;
        schedule.stage9_perUnitTime = req.body.stage9_perUnitTime || schedule.stage9_perUnitTime;
        schedule.stage10 = req.body.stage10 || schedule.stage10;
        schedule.stage10_perUnitTime = req.body.stage10_perUnitTime || schedule.stage10_perUnitTime;
        schedule.stage11 = req.body.stage11 || schedule.stage11;
        schedule.stage11_perUnitTime = req.body.stage11_perUnitTime || schedule.stage11_perUnitTime;
        schedule.stage12 = req.body.stage12 || schedule.stage12;
        schedule.stage12_perUnitTime = req.body.stage12_perUnitTime || schedule.stage12_perUnitTime;
        schedule.stage13 = req.body.stage13 || schedule.stage13;
        schedule.stage13_perUnitTime = req.body.stage13_perUnitTime || schedule.stage13_perUnitTime;
        schedule.stage14 = req.body.stage14 || schedule.stage14;
        schedule.stage14_perUnitTime = req.body.stage14_perUnitTime || schedule.stage14_perUnitTime;
        schedule.stage15 = req.body.stage15 || schedule.stage15;
        schedule.stage15_perUnitTime = req.body.stage15_perUnitTime || schedule.stage15_perUnitTime;
        schedule.stage16 = req.body.stage16 || schedule.stage16;
        schedule.stage16_perUnitTime = req.body.stage16_perUnitTime || schedule.stage16_perUnitTime;
        schedule.stage17 = req.body.stage17 || schedule.stage17;
        schedule.stage17_perUnitTime = req.body.stage17_perUnitTime || schedule.stage17_perUnitTime;
        schedule.stage18 = req.body.stage18 || schedule.stage18;
        schedule.stage18_perUnitTime = req.body.stage18_perUnitTime || schedule.stage18_perUnitTime;
        schedule.stage19 = req.body.stage19 || schedule.stage19;
        schedule.stage19_perUnitTime = req.body.stage19_perUnitTime || schedule.stage19_perUnitTime;
        await schedule.save();
        res.status(200).send({msg: 'Data Updation Success', data: schedule});   
    },
    getAllSchedule: async(req,res)=>{
        try{
            let schedule=await Schedule.find({indu_id:req.params.id}).populate('indu_id product_id stage0 stage1 stage2 stage3 stage4 stage5 stage6 stage7 stage8 stage9 stage10 stage11 stage12 stage13 stage14 stage15 stage16 stage17 stage18 stage19 stage20');
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
            let schedule=await Schedule.findOne({indu_id:req.params.id}).populate('indu_id product_id stage0 stage1 stage2 stage3 stage4 stage5 stage6 stage7 stage8 stage9 stage10 stage11 stage12 stage13 stage14 stage15 stage16 stage17 stage18 stage19 stage20');
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