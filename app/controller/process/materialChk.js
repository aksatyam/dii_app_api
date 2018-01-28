'use strict'
const mongoose = require('mongoose');
const MaterialChk = mongoose.model('MaterialChk');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports={
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveProduct: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let product=await MaterialChk.findOne({ $and:[{indu_id:req.body.indu_id},{product_id:req.body.product_id}]});
            if(product)
            throw validation.errorFormat('duplicate', 'Product already Exist', 409);
            let productData=new MaterialChk();
            productData.indu_id = req.body.indu_id;
            productData.product_id = req.body.product_id;
            productData.materials = req.body.materials;
            await productData.save();
            res.status(200).send({msg: 'done', data: productData});
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
    editProduct: async(req,res)=>{
        let product=await MaterialChk.findOne({_id: req.body.id});
        if(!product){
            throw validation.errorFormat('Not Found', 'Data Not Found Of Product', 404);
        }
        product.product_id = req.body.product_id || product.product_id;
        productData.materials = req.body.materials || productData.materials;
        await product.save();
        res.status(200).send({msg: 'Data Updation Success', data: productData});
        
    },
    getAllProduct: async(req,res)=>{
        try{
            let product=await MaterialChk.find({indu_id:req.params.id}).populate('indu_id product_id materials.material_id');
            if(!product){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            }
            res.status(200).send({msg:'All Product Data',data:product});
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
    getOneProduct: async(req, res)=>{
        try{
            let product=await MaterialChk.findOne({_id:req.params.id}).populate('indu_id product_id materials.material_id');
            if(!product)
            throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Product Data',data:product});
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
    getOneProductInfo: async(req, res)=>{
        try{
            let product=await MaterialChk.findOne({product_id:req.params.id}).populate('indu_id product_id materials.material_id');
            if(!product)
                throw validation.errorFormat('Not Found','No Data Available for Industry',404);
            res.status(200).send({msg:'All Product Data',data:product});
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