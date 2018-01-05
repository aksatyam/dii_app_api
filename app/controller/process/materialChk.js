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
            productData.material0 = req.body.material0;
            productData.material0_qty = req.body.material0_qty;
            productData.material1 = req.body.material1;
            productData.material1_qty = req.body.material1_qty;
            productData.material2 = req.body.material2;
            productData.material2_qty = req.body.material2_qty;
            productData.material3 = req.body.material3;
            productData.material3_qty = req.body.material3_qty;
            productData.material4 = req.body.material4;
            productData.material4_qty = req.body.material4_qty;
            productData.material5 = req.body.material5;
            productData.material5_qty = req.body.material5_qty;
            productData.material6 = req.body.material6;
            productData.material6_qty = req.body.material6_qty;
            productData.material7 = req.body.material7;
            productData.material7_qty = req.body.material7_qty;
            productData.material8 = req.body.material8;
            productData.material8_qty = req.body.material8_qty;
            productData.material9 = req.body.material9;
            productData.material9_qty = req.body.material9_qty;
            productData.material10 = req.body.material10;
            productData.material10_qty = req.body.material10_qty;
            productData.material11 = req.body.material11;
            productData.material11_qty = req.body.material11_qty;
            productData.material12 = req.body.material12;
            productData.material12_qty = req.body.material12_qty;
            productData.material13 = req.body.material13;
            productData.material13_qty = req.body.material13_qty;
            productData.material14 = req.body.material14;
            productData.material14_qty = req.body.material14_qty;
            productData.material15 = req.body.material15;
            productData.material15_qty = req.body.material15_qty;
            productData.material16 = req.body.material16;
            productData.material16_qty = req.body.material16_qty;
            productData.material17 = req.body.material17;
            productData.material17_qty = req.body.material17_qty;
            productData.material18 = req.body.material18;
            productData.material18_qty = req.body.material18_qty;
            productData.material19 = req.body.material19;
            productData.material19_qty = req.body.material19_qty;
            productData.material20 = req.body.material20;
            productData.material20_qty = req.body.material20_qty;
            productData.material21 = req.body.material21;
            productData.material21_qty = req.body.material21_qty;
            productData.material22 = req.body.material22;
            productData.material22_qty = req.body.material22_qty;
            productData.material23 = req.body.material23;
            productData.material23_qty = req.body.material23_qty;
            productData.material24 = req.body.material24;
            productData.material24_qty = req.body.material24_qty;
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
        let product=await MaterialChk.findOne({_id: req.params.id});
        if(!product){
            throw validation.errorFormat('Not Found', 'Data Not Found Of Product', 404);
        }
        product.product_id = req.body.product_id || product.product_id;
        product.material0 = req.body.material0 || product.material0;
        product.material0_qty = req.body.material0_qty || product.material0_qty;
        product.material1 = req.body.material1 || product.material1;
        product.material1_qty = req.body.material1_qty || product.material1_qty;
        product.material2 = req.body.material2 || product.material2;
        product.material2_qty = req.body.material2_qty || product.material2_qty;
        product.material3 = req.body.material3 || product.material3;
        product.material3_qty = req.body.material3_qty || product.material3_qty;
        product.material4 = req.body.material4 || product.material4;
        product.material4_qty = req.body.material4_qty || product.material4_qty;
        product.material5 = req.body.material5 || product.material5;
        product.material5_qty = req.body.material5_qty || product.material5_qty;
        product.material6 = req.body.material6 || product.material6;
        product.material6_qty = req.body.material6_qty || product.material6_qty;
        product.material7 = req.body.material7 || product.material7;
        product.material7_qty = req.body.material7_qty || product.material7_qty;
        product.material8 = req.body.material8 || product.material8;
        product.material8_qty = req.body.material8_qty || product.material8_qty;
        product.material9 = req.body.material9 || product.material9;
        product.material9_qty = req.body.material9_qty || product.material9_qty;
        product.material10 = req.body.material10 || product.material10;
        product.material10_qty = req.body.material10_qty || product.material10_qty;
        product.material11 = req.body.material11 || product.material11;
        product.material11_qty = req.body.material11_qty || product.material11_qty;
        product.material12 = req.body.material12 || product.material12;
        product.material12_qty = req.body.material12_qty || product.material12_qty;
        product.material13 = req.body.material13 || product.material13;
        product.material13_qty = req.body.material13_qty || product.material13_qty;
        product.material14 = req.body.material14 || product.material14;
        product.material14_qty = req.body.material14_qty || product.material14_qty;
        product.material15 = req.body.material15 || product.material15;
        product.material15_qty = req.body.material15_qty || product.material15_qty;
        product.material16 = req.body.material16 || product.material16;
        product.material16_qty = req.body.material16_qty || product.material16_qty;
        product.material17 = req.body.material17 || product.material17;
        product.material17_qty = req.body.material17_qty || product.material17_qty;
        product.material18 = req.body.material18 || product.material18;
        product.material18_qty = req.body.material18_qty || product.material18_qty;
        product.material19 = req.body.material19 || product.material19;
        product.material19_qty = req.body.material19_qty || product.material19_qty;
        product.material20 = req.body.material20 || product.material20;
        product.material20_qty = req.body.material20_qty || product.material20_qty;
        product.material21 = req.body.material21 || product.material21;
        product.material21_qty = req.body.material21_qty || product.material21_qty;
        product.material22 = req.body.material22 || product.material22;
        product.material22_qty = req.body.material22_qty || product.material22_qty;
        product.material23 = req.body.material23 || product.material23;
        product.material23_qty = req.body.material23_qty || product.material23_qty;
        product.material24 = req.body.material24 || product.material24;
        product.material24_qty = req.body.material24_qty || product.material24_qty;
        await product.save();
        res.status(200).send({msg: 'Data Updation Success', data: product});
        
    },
    getAllProduct: async(req,res)=>{
        try{
            let product=await MaterialChk.find({indu_id:req.params.id}).populate('indu_id product_id material0 material1 material2 material3 material4 material5 material6 material7 material8 material9 material10 material11 material12 material13 material14 material15 material16 material17 material18 material19 material20 material21 material22 material23 material24');
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
            let product=await MaterialChk.findOne({_id:req.params.id}).populate('indu_id product_id material0 material1 material2 material3 material4 material5 material6 material7 material8 material9 material10 material11 material12 material13 material14 material15 material16 material17 material18 material19 material20 material21 material22 material23 material24');
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