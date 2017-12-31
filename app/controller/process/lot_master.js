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
            lotsData.material0 = req.body.material0;
            lotsData.material1 = req.body.material1;
            lotsData.material2 = req.body.material2;
            lotsData.material3 = req.body.material3;
            lotsData.material4 = req.body.material4;
            lotsData.material5 = req.body.material5;
            lotsData.material6 = req.body.material6;
            lotsData.material7 = req.body.material7;
            lotsData.material8 = req.body.material8;
            lotsData.material9 = req.body.material9;
            lotsData.material10 = req.body.material10;
            lotsData.material11 = req.body.material11;
            lotsData.material12 = req.body.material12;
            lotsData.material13 = req.body.material13;
            lotsData.material14 = req.body.material14;
            lotsData.material15 = req.body.material15;
            lotsData.material16 = req.body.material16;
            lotsData.material17 = req.body.material17;
            lotsData.material18 = req.body.material18;
            lotsData.material19 = req.body.material19;
            lotsData.material20 = req.body.material20;
            lotsData.material21 = req.body.material21;
            lotsData.material22 = req.body.material22;
            lotsData.material23 = req.body.material23;
            lotsData.material24 = req.body.material24;
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
        lotsData.material0 = req.body.material0 || lotsData.material0;
        lotsData.material1 = req.body.material1 || lotsData.material1;
        lotsData.material2 = req.body.material2 || lotsData.material2;
        lotsData.material3 = req.body.material3 || lotsData.material3;
        lotsData.material4 = req.body.material4 || lotsData.material4;
        lotsData.material5 = req.body.material5 || lotsData.material5;
        lotsData.material6 = req.body.material6 || lotsData.material6;
        lotsData.material7 = req.body.material7 || lotsData.material7;
        lotsData.material8 = req.body.material8 || lotsData.material8;
        lotsData.material9 = req.body.material9 || lotsData.material9;
        lotsData.material10 = req.body.material10 || lotsData.material10;
        lotsData.material11 = req.body.material11 || lotsData.material11;
        lotsData.material12 = req.body.material12 || lotsData.material12;
        lotsData.material13 = req.body.material13 || lotsData.material13;
        lotsData.material14 = req.body.material14 || lotsData.material14;
        lotsData.material15 = req.body.material15 || lotsData.material15;
        lotsData.material16 = req.body.material16 || lotsData.material16;
        lotsData.material17 = req.body.material17 || lotsData.material17;
        lotsData.material18 = req.body.material18 || lotsData.material18;
        lotsData.material19 = req.body.material19 || lotsData.material19;
        lotsData.material20 = req.body.material20 || lotsData.material20;
        lotsData.material21 = req.body.material21 || lotsData.material21;
        lotsData.material22 = req.body.material22 || lotsData.material22;
        lotsData.material23 = req.body.material23 || lotsData.material23;
        lotsData.material24 = req.body.material24 || lotsData.material24;
        lotsData.lot_qty = req.body.lot_qty;
        await lotsData.save();
        res.status(200).send({msg: 'Data Updation Success', data: lotsData});
    },
    getAllLots: async(req, res)=>{
        try{
            let lots=await Lot.find({indu_id:req.params.id}).populate('indu_id material0 material1 material2 material3 material4 material5 material6 material7 material8 material9 material10 material11 material12 material13 material14 material15 material16 material17 material18 material19 material20 material21 material22 material23 material24');
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
            let lot=await Lot.findOne({_id:req.params.id}).populate('indu_id material0 material1 material2 material3 material4 material5 material6 material7 material8 material9 material10 material11 material12 material13 material14 material15 material16 material17 material18 material19 material20 material21 material22 material23 material24');
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