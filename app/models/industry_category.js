'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let industryCategory = new Schema({
    indu_cat_name: {type: String, required: true, trim: true},
    indu_cat_desc:{type: String, trim:true},
    indu_cat_is_active:{type: Boolean, default:false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Industry_category', industryCategory, 'industry_category');