'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stageEquipment = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    material_master_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    equipment_master_id:{type : mongoose.Schema.ObjectId, ref:'Equipment_master'},
    description:{type:String, trim:true},
    stage_name:{type:String, require: true, trim:true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Stage_Equipment_master', stageEquipment, 'stage_equipment_master');