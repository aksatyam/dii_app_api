'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    user_type_id:{type: mongoose.Schema.ObjectId, ref:'User_type'},
    user_name:{type: String, required: true, trim: true},
    user_email:{type: String, required: true, trim: true},
    user_contact:{type: String, required: true, trim: true},
    user_password:{type: String, required: true, trim: true},
    user_access_token:{type: String, trim: true},
    user_device_id:{type: String, trim:true},
    user_is_active:{type: Boolean, default: false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('User_master', user, 'user_master');