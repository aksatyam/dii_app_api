'use strict'
const mongoose = require('mongoose');
const Material_available = mongoose.model('Material_available_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveMaterialAvailable: async(req, res)=>{
        try{
            if(!req.body)
                throw validation.errorFormat('empty_field', 'Data not present', 400);
            let Material_avail = await Material_available.findOne({ $and:[{indu_id:req.body.indu_id},{material_master_id:req.body.material_master_id}]});
            if(Material_avail)
                throw validation.errorFormat('duplicate', 'Material already Exist', 409);
            let materialAvailData=new Material_available();
            materialAvailData.indu_id = req.body.indu_id;
            materialAvailData.material_master_id = req.body.material_master_id;
            materialAvailData.available_quantity = req.body.available_quantity;
            materialAvailData.updated_quantity = req.body.available_quantity;
            await materialAvailData.save();
            res.status(200).send({msg: 'done', data: materialAvailData});
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
    editMaterialAvailable: async(req, res)=>{
        let materialAvailData=await Material_available.findOne({_id: req.body.id});
        if(!materialAvailData)
        throw validation.errorFormat('Not Found', 'Data Not Found For Entered Material!', 404);
        materialAvailData.indu_id = req.params.id;
        materialAvailData.material_master_id = req.body.material_master_id;
        materialAvailData.available_quantity = req.body.available_quantity ||  materialAvailData.available_quantity;
        materialAvailData.updated_quantity = req.body.updated_quantity || materialAvailData.updated_quantity;
        await materialAvailData.save();
        res.status(200).send({msg: 'Data Updation Success', data: materialAvailData});
    },
    getAllMaterialAvailable: async(req, res)=>{
        try{
            let materialAvailData=await Material_available.find({indu_id:req.params.id}).populate('indu_id material_master_id');
            if(!materialAvailData)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data', data:materialAvailData});
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
    getOneMaterialAvailable: async(req, res)=>{
        try{
            let materialAvailData=await Material_available.findOne({_id:req.params.id}).populate('indu_id material_master_id');
            if(!materialAvailData)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data', data:materialAvailData});
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