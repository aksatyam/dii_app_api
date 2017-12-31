'use strict'
const mongoose = require('mongoose');
const Equipment = mongoose.model('Equipment_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveEquipment: async(req,res)=>{
        try{
            if(!req.body)
                throw validation.errorFormat('empty_field', 'Data not present', 400);
            let equipment = await Equipment.findOne({$and: [{indu_id:req.body.indu_id},{equip_name:req.body.equip_name}]});
            if(equipment)
                throw validation.errorFormat('duplicate', 'Equipment Already Exists', 409); 
                let equipmentData = new Equipment();
                equipmentData.indu_id = req.body.indu_id;
                equipmentData.equip_name = req.body.equip_name;
                equipmentData.equip_desc = req.body.description;
                await equipmentData.save();
                res.status(200).send({msg: 'done', data: equipmentData});
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
    getEqipmentOne: async(req,res)=>{
        try{
            let equipment=await Equipment.find({indu_id:req.params.id}).populate({path: 'indu_id'});
            if(!equipment){
                throw validation.errorFormat('Not Found', 'Data Not Found Of Industry', 404);
            }
            res.status(200).send({msg:'Data Found For Industry',data:equipment});
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
    editEquipmentOne: async(req,res)=>{
        try{
            if(!req.body)
                throw validation.errorFormat('empty_field', 'Data not present', 400);
            let equipment=await Equipment.findOne({_id: req.params.id});
            if(!equipment)
                throw validation.errorFormat('Not Found', 'Data Not Found For Equipment', 404);
            equipment.equip_name = req.body.equip_name || equipment.equip_name;
            equipment.equip_desc = req.body.description || equipment.equip_desc;
            await equipment.save();
            res.status(200).send({msg: 'Data Updation Success', data: equipment});
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