'use strict'
const mongoose = require('mongoose');
const ScheduleTranscation = mongoose.model('Schedule_transaction_master');
const materialChk = mongoose.model('MaterialChk');
const Material_available = mongoose.model('Material_available_master');
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
            let scheduleTrans=await ScheduleTranscation.find({ $and:[{indu_id:req.body.indu_id},{product_id:req.body.product_id}], toDate:{$gte: req.body.fromDate}});
            if(scheduleTrans.length)
                throw validation.errorFormat('duplicate', 'Product already scheduled on selected duration', 409);
            let product = await materialChk.findOne({product_id: req.body.product_id}).populate('materials.material_id');
            let checkMaterialAvailable = product.materials.filter(d=> typeof d.material_id != 'object');
            if(checkMaterialAvailable.length)
                throw validation.errorFormat('row_material_absent', 'Some raw material not present', 409);
            let metarilList = product.materials.map(d=> {return {_id: d.material_id._id, quantity: d.quantity * req.body.quantity}});
            let checkArray = metarilList.map(d=> d._id);
            let materialAvailData = await Material_available.find({material_master_id: {$in: checkArray}, updated_quantity: {$gt: 0} })
            if(materialAvailData.length < checkArray.length)
                throw validation.errorFormat('data_absent', 'some raw material quantity is not available in inventory', 409);
            metarilList = metarilList.filter(d=>{
                let mat_id= materialAvailData.find(item=> item.material_master_id.toString()== d._id.toString());
                if(d.quantity <= mat_id.updated_quantity)
                    return d;
            });
            if(metarilList.length != materialAvailData.length)
                throw validation.errorFormat('row_material_not_found', 'some material is not available', 409);
            

            let scheduleTransData=new ScheduleTranscation();
            scheduleTransData.indu_id = req.body.indu_id;
            scheduleTransData.product_id = req.body.product_id;
            scheduleTransData.quantity = req.body.quantity;
            scheduleTransData.fromDate = req.body.fromDate;
            scheduleTransData.toDate = req.body.toDate;
            await scheduleTransData.save();
            res.status(200).send({msg:'done',data:scheduleTransData});
            
            for(let item of metarilList){
                let material = await Material_available.findOne({material_master_id: item._id});
                material.updated_quantity = material.updated_quantity - item.quantity;
                material.save();
            }
        }
        catch(err){
            console.log(err);
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