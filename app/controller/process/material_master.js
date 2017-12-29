'use strict'
const mongoose = require('mongoose');
const Material = mongoose.model('Material_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveMaterial: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let material = await Material.findOne({ $and:[{indu_id:req.body.indu_id},{material_name:req.body.name}]});
            if(material)
            throw validation.errorFormat('duplicate', 'Material already Exist', 409);
            let materialData = new Material();
            materialData.indu_id = req.body.indu_id;
            materialData.material_name = req.body.name;
            materialData.material_description = req.body.description;
            materialData.inspection_parem = req.body.inspection_parem;
            materialData.qulaitycheck_parem = req.body.qulaitycheck_parem;
            await materialData.save();
            res.status(200).send({msg: 'done', data: materialData});
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
    editMaterialOne: async(req,res)=>{
        let material=await Material.findOne({_id: req.params.id});
        if(!material){
            throw validation.errorFormat('Not Found', 'Data Not Found Of Industry', 404);
        }
        material.material_name = req.body.name || material.material_name;
        material.inspection_parem = req.body.material_name || material.material_name;
        material.qulaitycheck_parem = req.body.qulaitycheck_parem || material.qulaitycheck_parem;
        await material.save();
        res.status(200).send({msg: 'Data Updation Success', data: material});
    },
    getAllMaterial: async(req, res)=>{
        try{
            let material=await Material.find({indu_id:req.params.id}).populate({path: 'indu_id'});;
            if(!material){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Industry Data',data:material});
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
    getOneMaterial: async(req, res)=>{
        try{
            let material=await Material.findOne({_id:req.params.id}).populate({path: 'indu_id'});;
            if(!material){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Industry Data',data:material});
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
