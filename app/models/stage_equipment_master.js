'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stageEquipment = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    material_master_id:{type: Schema.Types.ObjectId, ref:'material_master'},
    equipment_master_id:{type : Schema.Types.ObjectId, ref:'equipment_master'},
    stage_name:{type:String, require: true, trim:true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Stage_Equipment_master', stageEquipment, 'stage_equipment_master');