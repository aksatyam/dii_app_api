'use strict'
const mongoose = require('mongoose');
const Lot = mongoose.model('Lot_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveLot: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let lots= await Lot.findOne({ $and:[{indu_id:req.body.indu_id},{lot_name:req.body.lot_name}]});
            if(lots)
            throw validation.errorFormat('duplicate', 'Lots already Exist', 409);
            let lotsData=new Lot();
            lotsData.indu_id = req.body.indu_id;
            lotsData.lot_name = req.body.lot_name;
            lotsData.material_1 = req.body.material_1;
            lotsData.material_2 = req.body.material_2 || '';
            lotsData.material_3 = req.body.material_3 || '';
            lotsData.material_4 = req.body.material_4 || '';
            lotsData.material_5 = req.body.material_5 || '';
            lotsData.material_6 = req.body.material_6 || '';
            lotsData.material_7 = req.body.material_7 || '';
            lotsData.material_8 = req.body.material_8 || '';
            lotsData.material_9 = req.body.material_9 || '';
            lotsData.material_10 = req.body.material_10 || '';
            lotsData.material_11 = req.body.material_11 || '';
            lotsData.material_12 = req.body.material_12 || '';
            lotsData.material_13 = req.body.material_13 || '';
            lotsData.material_14 = req.body.material_14 || '';
            lotsData.material_15 = req.body.material_15 || '';
            lotsData.material_16 = req.body.material_16 || '';
            lotsData.material_17 = req.body.material_17 || '';
            lotsData.material_18 = req.body.material_18 || '';
            lotsData.material_19 = req.body.material_19 || '';
            lotsData.material_20 = req.body.material_20 || '';
            lotsData.material_21 = req.body.material_21 || '';
            lotsData.material_22 = req.body.material_22 || '';
            lotsData.material_23 = req.body.material_23 || '';
            lotsData.material_24 = req.body.material_24 || '';
            lotsData.material_25 = req.body.material_25 || '';
            lotsData.lot_qty = req.body.lot_qty;
            await lotsData.save();
            res.status(200).send({msg: 'done', data: lotsData});
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
    editLots: async(req, res)=>{
        let lotsData=await Lot.findOne({_id: req.params.id});
        if(!lotsData)
        throw validation.errorFormat('Not Found', 'Data Not Found For Entered Lot', 404);
        lotsData.indu_id = req.body.indu_id;
        lotsData.lot_name = req.body.lot_name;
        lotsData.material_1 = req.body.material_1 || lotsData.material_1;
        lotsData.material_2 = req.body.material_2 || lotsData.material_2;
        lotsData.material_3 = req.body.material_3 || lotsData.material_3;
        lotsData.material_4 = req.body.material_4 || lotsData.material_4;
        lotsData.material_5 = req.body.material_5 || lotsData.material_5;
        lotsData.material_6 = req.body.material_6 || lotsData.material_6;
        lotsData.material_7 = req.body.material_7 || lotsData.material_7;
        lotsData.material_8 = req.body.material_8 || lotsData.material_8;
        lotsData.material_9 = req.body.material_9 || lotsData.material_9;
        lotsData.material_10 = req.body.material_10 || lotsData.material_10;
        lotsData.material_11 = req.body.material_11 || lotsData.material_11;
        lotsData.material_12 = req.body.material_12 || lotsData.material_12;
        lotsData.material_13 = req.body.material_13 || lotsData.material_13;
        lotsData.material_14 = req.body.material_14 || lotsData.material_14;
        lotsData.material_15 = req.body.material_15 || lotsData.material_15;
        lotsData.material_16 = req.body.material_16 || lotsData.material_16;
        lotsData.material_17 = req.body.material_17 || lotsData.material_17;
        lotsData.material_18 = req.body.material_18 || lotsData.material_18;
        lotsData.material_19 = req.body.material_19 || lotsData.material_19;
        lotsData.material_20 = req.body.material_20 || lotsData.material_20;
        lotsData.material_21 = req.body.material_21 || lotsData.material_21;
        lotsData.material_22 = req.body.material_22 || lotsData.material_22;
        lotsData.material_23 = req.body.material_23 || lotsData.material_23;
        lotsData.material_24 = req.body.material_24 || lotsData.material_24;
        lotsData.material_25 = req.body.material_25 || lotsData.material_25;
        lotsData.lot_qty = req.body.lot_qty;
        await lotsData.save();
        res.status(200).send({msg: 'Data Updation Success', data: lotsData});
    },
    getAllLots: async(req, res)=>{
        try{
            let lots= Lot.find({indu_id:req.params.id});
            if(!lots)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data',data:lots});
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
    getOneLot: async(req, res)=>{
        try{
            let lot= Lot.findOne({_id:req.params.id});
            if(!lot)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Industry Data',data:lot});
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