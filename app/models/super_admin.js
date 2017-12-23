'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let superadmin = new Schema({
    user_uuid : { type : String, required: true, trim: true},
    user_name:{type: String, required: true, trim: true},
    user_email:{type: String, required: true, trim: true},
    user_contact:{type: String, required: true, trim: true},
    user_password:{type: String, required: true, trim: true},
    user_access_token:{type: String, trim: true},
    user_deviceId:{type : String, trim:true},
    user_is_active:{type: Boolean, default: false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Super_admin', superadmin, 'super_admin');