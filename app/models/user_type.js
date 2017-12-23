'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userType = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master', required: true},
    user_type:{type: String, required: true, trim: true},
    user_type_description:{type: String, trim: true},
    user_is_active:{type: Boolean, default: false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('User_type', userType, 'user_type');