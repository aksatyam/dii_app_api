'use strict'
const mongoose = require('mongoose');
const User = mongoose.model('User_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    userLogin: async(req, res)=>{
        try{
            let user=await User.findOne({$and: [{user_email: req.body.userEmail}, {user_password:req.body.userPassword}]}).populate({path: 'user_type_id'});
            if(!user){
                throw validation.errorFormat('Not Found', 'User Not Exists', 404);
            }
            res.status(200).send({msg:'Data Found for User',data:user});
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
    userSave: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400)
            let user=await User.findOne({$or: [{user_email: req.body.email}, {user_contact:req.body.contact}]});
            if(user){
                if(user.user_contact==req.body.contact)
                    throw validation.errorFormat('duplicate', 'contact number already exist', 409);
                if(user.user_email == req.body.email)
                    throw validation.errorFormat('duplicate', 'email already exist', 409);
            }
            let userData;
            if(validation.phoneValidation(req.body.contact))
                if(validation.emailValidation(req.body.email)){
                    console.log('Inside');
                    userData= new User();
                }
                userData.indu_id = req.body.indu_id;
                userData.user_type_id = req.body.type_id;
                userData.user_name = req.body.name;
                userData.user_contact = req.body.contact;
                userData.user_email = req.body.email;
                userData.user_password = req.body.password;
                userData.user_device_id = req.body.deviceId || '';
                await userData.save();
                res.status(200).send({msg: 'done', data: userData});

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
    getAllUser: async(req,res)=>{
        try{
            let user=await User.find({indu_id:req.params.id}).populate({path: 'user_type_id'});
            if(!user){
                throw validation.errorFormat('Not Found','No Data Available for User',404);
            }
            res.status(200).send({msg:'All User Data',data:user});
        }
        catch(err){
            console.log('error: ', err);
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
    editOneUser: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let user=await User.findOne({_id:req.body.id});
            if(user){
                if(user.user_contact==req.body.contact)
                    throw validation.errorFormat('duplicate', 'contact number already exist', 409);
                if(user.user_email == req.body.email)
                    throw validation.errorFormat('duplicate', 'email already exist', 409);
                if(validation.phoneValidation(req.body.contact))
                    if(validation.emailValidation(req.body.email)){
                        console.log('Inside');
                    }
                user.indu_id = req.body.indu_id || user.indu_id;
                user.user_type_id = req.body.type_id || user.user_type_id;
                user.user_name = req.body.name || user.user_name;
                user.user_contact = req.body.contact || user.user_contact;
                user.user_email = req.body.email || user.user_email;
                user.user_password = req.body.password || user.user_password;
                user.user_device_id = req.body.deviceId || user.user_device_id;
                await user.save();
                res.status(200).send({msg: 'done', data: user});
            }
            throw validation.errorFormat('Not Found','No Data Available for User',404);
            

        }
        catch(err){
            console.log('error: ', err);
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
