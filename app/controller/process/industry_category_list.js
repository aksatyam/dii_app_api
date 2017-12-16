'use strict'
const mongoose = require('mongoose');
const IndustryCategoryList = mongoose.model('Industry_category_list');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveCategoryList: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let industryCategoryList = await IndustryCategoryList.findOne({indu_cat_list_name:req.body.category_list_name});
            if(industryCategoryList){
                throw validation.errorFormat('duplicate', 'Category Already Exists', 409);
            }
            let induCatListData = new IndustryCategoryList();
            induCatListData.indu_cat_id = req.body.indu_cat_id;
            induCatListData.indu_cat_list_name = req.body.category_list_name;
            induCatListData.indu_cat_list_desc = req.body.description;
            await induCatListData.save();
            res.status(200).send({msg: 'done', data: induCatListData});
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
    updateCategoryList: async(req, res)=>{
        let industryCategoryList=await IndustryCategoryList.findOne({_id: req.params.id});
        if(!industryCategoryList){
            throw validation.errorFormat('Not Found', 'Data Not Found', 404);
        }
        industryCategoryList.indu_cat_id = req.body.indu_cat_id || industryCategoryList.indu_cat_id;
        industryCategoryList.indu_cat_list_name = req.body.category_list_name || industryCategoryList.indu_cat_list_name;
        industryCategoryList.indu_cat_list_desc = req.body.description || industryCategoryList.indu_cat_list_desc;
        await industryCategoryList.save();
        res.status(200).send({msg: 'Data Updation Success', data: industryCategory});
    },
    getAllCategoryList: async(req,res)=>{
        try{
            let industryCategoryList=await IndustryCategoryList.find({indu_cat_id:req.params.indu_cat_id});
            if(!industryCategoryList){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404)
            }
            res.status(200).send({msg:'All Industry Category List Data',data:industryCategoryList});
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