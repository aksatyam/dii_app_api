'use strict'
const mongoose = require('mongoose');
const UserType = mongoose.model('User_type');
const Promise = require('bluebird');
const validation = require('../../helper/validation');

module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    userTypeSave: async(req,res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let userType = await UserType.findOne({ $and:[{indu_id:req.body.indu_id},{user_type:req.body.type}]});
            if(userType){
                // if(userType.user_type==req.body.type)
                throw validation.errorFormat('duplicate', 'User Type Already Exists', 409);
            }
            let userTypeData=new UserType();
            userTypeData.indu_id=req.body.indu_id;
            userTypeData.user_type=req.body.type;
            userTypeData.user_type_description=req.body.type_description;
            await userTypeData.save();
            res.status(200).send({msg: 'done', data: userTypeData});
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
    userTypeGet: async(req, res)=>{
        try{
            let userType = await UserType.find({indus_id: req.params.indus_id});
            if(!userType){
                throw validation.errorFormat('Not Found','Data Not Available for Your Industry ',404);
            }
            res.status(200).send({msg:'Data Found For Industry', data:userType});  
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

