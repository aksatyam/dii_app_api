'use strict'
const mongoose = require('mongoose');
const IndustryCategory = mongoose.model('Industry_category');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
//Done coding
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveCategory: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let industryCategory = await IndustryCategory.findOne({indu_cat_name:req.body.category_name});
            if(industryCategory)
            throw validation.errorFormat('duplicate', 'Category Already Exists', 409);
            let induCatData = new IndustryCategory();
            induCatData.indu_cat_name = req.body.category_name;
            induCatData.indu_cat_desc = req.body.description;
            await induCatData.save();
            res.status(200).send({msg: 'done', data: induCatData});
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
    updateCategory: async(req, res)=>{
        let industryCategory=await IndustryCategory.findOne({_id: req.params.id});
        if(!industryCategory){
            throw validation.errorFormat('Not Found', 'Data Not Found', 404);
        }
        industryCategory.indu_cat_name = req.body.category_name || industryCategory.indu_cat_name;
        industryCategory.indu_cat_desc = req.body.description || industryCategory.indu_cat_desc;
        await industryCategory.save();
        res.status(200).send({msg: 'Data Updation Success', data: industryCategory});
    },
    getAllCategory: async(req, res)=>{
        try{
            let industryCat=await IndustryCategory.find({});
            if(!industryCat){
                throw validation.errorFormat('Not Found','No Data Found',404)
            }
            res.status(200).send({msg:'All Category List',data:industryCat});
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
