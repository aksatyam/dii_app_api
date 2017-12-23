'use strict'
const mongoose = require('mongoose');
const Industry = mongoose.model('Industry_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveIndustry: async (req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat('empty_field', 'Data not present', 400);
            let industry = await Industry.findOne({$or: [{indu_email: req.body.email}, {indu_contact:req.body.contact}]});
            if(industry){
                if(industry.indu_contact == req.body.contact)
                    throw validation.errorFormat('duplicate', 'contact number already exist', 409);
                if(industry.indu_email == req.body.email)
                    throw validation.errorFormat('duplicate', 'email already exist', 409);
                
                }
                let industryData;
                if(validation.phoneValidation(req.body.contact))
                    if(validation.emailValidation(req.body.email)){
                        console.log('Inside');
                        industryData= new Industry();
                    }
                industryData.indu_category=req.body.indu_category;
                industryData.indu_sub_category=req.body.indu_sub_category;                
                industryData.indu_name = req.body.name;
                industryData.indu_type = req.body.type;
                industryData.indu_email = req.body.email;
                industryData.indu_contact = req.body.contact;
                industryData.indu_address = req.body.address;
                industryData.indu_city = req.body.city;
                industryData.indu_state = req.body.state;
                industryData.indu_pin = req.body.pin;
                industryData.indu_country = req.body.country;
                industryData.indu_owner = req.body.owner;
                industryData.indu_staff_count = req.body.staff_count;
                industryData.indu_logo = req.body.logo || '';
                industryData.indu_website = req.body.website || '';
                industryData.indu_description = req.body.description;
                industryData.indu_estd_year = req.body.estd_year;
                industryData.indu_is_active= req.body.is_active || false;
                await industryData.save();
                res.status(200).send({msg: 'done', data: industryData});
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
    getAllIndustry: async(req,res)=>{
        try{
            let industry=await Industry.find({indu_category:req.params.indu_category,indu_sub_category:req.params.indu_sub_category});
            if(!industry){
                throw validation.errorFormat('Not Found','No Data Available for Industry',404)
            }
            res.status(200).send({msg:'All Industry Data',data:industry});
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
    getOneIndustry: async(req,res)=>{
        try
        {
            let industry=await Industry.findOne({_id: req.params.indus_id});
            if(!industry){
                throw validation.errorFormat('Not Found', 'Data Not Found Of Industry', 404);
            }
            res.status(200).send({msg:'Data Found Of Industry',data:industry});
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
    updateIndustry: async(req,res)=>{
        let industry=await Industry.findOne({_id: req.params.id});
        if(!industry){
            throw validation.errorFormat('Not Found', 'Data Not Found Of Industry', 404);
        }
        industry.indu_name = req.body.name || industry.indu_name;
        industry.indu_type = req.body.type || industry.indu_type;
        industry.indu_city = req.body.city || industry.indu_city;
        industry.indu_state = req.body.state || industry.indu_state;
        industry.indu_pin = req.body.pin || industry.indu_pin;
        industry.indu_country = req.body.country || industry.indu_country;
        industry.indu_owner = req.body.owner || industry.indu_owner;
        industry.indu_staff_count = req.body.staff_count || industry.indu_staff_count;
        industry.indu_description = req.body.description || industry.indu_description;
        await industry.save();
        res.status(200).send({msg: 'Data Updation Success', data: industry});
    },
    updatePhoneOrEmail: async(req,res)=>{
        try{
            let industry=await Industry.findOne({_id: req.params.indus_id});
            if(!industry)
                throw validation.errorFormat('Not Found', 'Invalid Industry Id', 404);
            let data;
            if(req.params.type=='101'){
                data = await Industry.find({indu_contact: req.params.data});
                if(data.length)  
                    throw validation.errorFormat('duplicate', 'contact already exist', 403);
                if(validation.phoneValidation(req.params.data)){
                    industry.indu_contact = req.params.data;
                    await industry.save();
                    res.status(200).send({msg: 'done', data: data});
                }
            }
            else if(req.params.type=='102'){
                data = await Industry.find({indu_email: req.params.data});
                if(data.length)
                    throw validation.errorFormat('duplicate', 'email already exist', 403);
                if(validation.emailValidation(req.params.data)){
                    industry.indu_email = req.params.data;
                    await industry.save();
                    res.status(200).send({msg: 'done', data: data});
                }
            }

        }
        catch(err){
            let error;
            if(!err.code || !err.status || !err.message) {
                error = validation.validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    },

    uploadImage: async(req, res)=>{
        try{
            let industry = await Industry.find({_id: req.params.id});
            if(!industry)
                throw validation.errorFormat('Not Found', 'Invalid Industry Id', 404);
            industry.indu_logo = req.body.url || industry.indu_logo;
            await industry.save();
            res.status(200).send({msg: 'done', data: industry});
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
    
    deleteIndustry: async(req, res)=>{
        try{
            let industry = await Industry.find({_id: req.params.id});
            if(!industry)
                throw validation.errorFormat('Not Found','Invalid Industry Id',404);
            await Industry.deleteOne({_id:ObjectId(req.params.id)});
                res.status(200).send({msg:'done',data:industry});
    
        }
        catch(err){

        }

    }
}
