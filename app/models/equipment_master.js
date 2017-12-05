'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let equipment = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    equip_name:{type : String, required: true, trim: true},
    equip_desc:{type : String, required: true, trim : true}
},{
    timestamps: true,
    versionKey: false
})
module.exports=mongoose.model('Equipment_master', equipment, 'equipment_master');