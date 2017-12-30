'use strict'
const mongoose = require('mongoose');
const StageEquipment = mongoose.model('Stage_Equipment_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveStageEquipment: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let stageEquipment = await StageEquipment.findOne({ $and:[{indu_id:req.body.indu_id},{stage_name:req.body.stage_name}]});
            if(stageEquipment)
            throw validation.errorFormat('duplicate', 'Stage already Exists', 409);
            let stageEquipData = new StageEquipment();
            stageEquipData.indu_id = req.body.indu_id;
            stageEquipData.material_master_id = req.body.material_master_id;
            stageEquipData.equipment_master_id = req.body.equipment_master_id;
            stageEquipData.stage_name = req.body.stage_name;
            stageEquipData.description = req.body.description;
            await stageEquipData.save();
            res.status(200).send({msg: 'done', data: stageEquipData});
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
    ediitStageEquipment: async(req, res)=>{
        let stageEquipment = await StageEquipment.findOne({_id: req.params.id});
        if(!stageEquipment)
        throw validation.errorFormat('Not Found', 'Data Not Found for Stage Equipment', 404);
        stageEquipment.indu_id = req.body.indu_id || stageEquipment.indu_id;
        stageEquipment.material_master_id = req.body.material_master_id || stageEquipment.material_master_id;
        stageEquipment.equipment_master_id = req.body.equipment_master_id || stageEquipment.equipment_master_id;
        stageEquipment.stage_name = req.body.stage_name || stageEquipment.stage_name;
        await stageEquipment.save();
        res.status(200).send({msg: 'Data Updation Success', data: material});
    },
    getAllStageEquipment: async(req, res)=>{
        try{
            let stageEquipment = await StageEquipment.find({indu_id:req.params.id}).populate('indu_id material_master_id equipment_master_id');;
            if(!stageEquipment)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data',data:stageEquipment});
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
    getOneStageEquipment: async(req, res)=>{
        try{
            let stageEquipment = await StageEquipment.findOne({_id:req.params.id}).populate('indu_id material_master_id equipment_master_id');
            if(!stageEquipment)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data',data:stageEquipment});
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