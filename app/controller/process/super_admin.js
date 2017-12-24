'use strict'
const mongoose = require('mongoose');
const SuperAdmin = mongoose.model('Super_admin');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveAdmin: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let superAdmin=await SuperAdmin.findOne({$or: [{user_email: req.body.email}, {user_contact:req.body.contact}]});
            if(superAdmin){
                if(superAdmin.user_contact==req.body.contact)
                    throw validation.errorFormat('duplicate', 'contact number already exist', 409);
                if(superAdmin.user_email == req.body.email)
                    throw validation.errorFormat('duplicate', 'email already exist', 409);
            }
            let superAdminData;
            if(validation.phoneValidation(req.body.contact))
                if(validation.emailValidation(req.body.email)){
                    superAdminData= new SuperAdmin();
            }
            superAdminData.user_uuid = req.body.UID;
            superAdminData.user_name = req.body.name;
            superAdminData.user_contact = req.body.contact;
            superAdminData.user_email = req.body.email;
            superAdminData.user_password = req.body.password;
            superAdminData.user_deviceId = req.body.deviceId
            await superAdminData.save();
            res.status(200).send({msg: 'done', data: superAdminData});
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
    getsuperAdminInfo: async(req,res)=>{
        try{
            let superadmin=await SuperAdmin.findOne({$and: [{user_uuid: req.body.UID}, {user_password:req.body.password}]});
            if(!superadmin){
                throw validation.errorFormat('invalid','Inavlid UserID or Password',409);
            }
            res.status(200).send({msg:'done', data:superadmin});
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