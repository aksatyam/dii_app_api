'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let industryCategoryList = new Schema({
    indu_cat_id:{type: Schema.Types.ObjectId, ref:'industry_category', required: true},
    indu_cat_list_name: {type: String, trim: true},
    indu_cat_list_desc:{type: String, trim:true},
    indu_cat__list_is_active:{type: Boolean, default:false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Industry_category_list', industryCategoryList, 'industry_category_list');