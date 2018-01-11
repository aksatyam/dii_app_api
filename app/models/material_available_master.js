'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let material_available = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    material_master_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    available_quantity:{type: String, trim:true, default:0},
    updated_quantity:{type: String, trim:true, default:0}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Material_available_master', material_available, 'material_available_master');