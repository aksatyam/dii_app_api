'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let industry = new Schema({
    indu_category:{type: mongoose.Schema.ObjectId, ref:'Industry_category'},
    indu_sub_category:{type: mongoose.Schema.ObjectId, ref:'Industry_category_list'},    
    indu_name: {type: String,  trim: true},
    indu_type: {type: String,  trim: true},
    indu_email:{type: String,  trim: true, unique: true},
    indu_contact:{type: String,  trim:true, unique: true},
    indu_address:{type: String,  trim: true},
    indu_city:{type: String,  trim:true},
    indu_state:{type: String,  trim: true},
    indu_pin:{type: String, trim: true},
    indu_country:{type: String, trim: true},
    indu_owner:{type: String, trim: true},
    indu_staff_count:{type: String, trim: true},
    indu_logo:{type: String, trim: true},
    indu_website:{type: String, trim: true},
    indu_description:{type: String,trim: true},
    indu_estd_year:{type: String,trim: true},
    indu_is_active:{type: Boolean, default:false}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Industry_master', industry, 'industry_master');