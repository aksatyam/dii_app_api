'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lot = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    lot_name:{type: String, required: true, trim: true},
    material0:{type: Schema.Types.ObjectId, ref:'material_master'},
    material1:{type : Schema.Types.ObjectId, ref:'material_master'},
    material2:{type : Schema.Types.ObjectId, ref:'material_master'},
    material3:{type : Schema.Types.ObjectId, ref:'material_master'},
    material4:{type : Schema.Types.ObjectId, ref:'material_master'},
    material5:{type : Schema.Types.ObjectId, ref:'material_master'},
    material6:{type : Schema.Types.ObjectId, ref:'material_master'},
    material7:{type : Schema.Types.ObjectId, ref:'material_master'},
    material8:{type : Schema.Types.ObjectId, ref:'material_master'},
    material9:{type : Schema.Types.ObjectId, ref:'material_master'},
    material10:{type : Schema.Types.ObjectId, ref:'material_master'},
    material11:{type : Schema.Types.ObjectId, ref:'material_master'},
    material12:{type : Schema.Types.ObjectId, ref:'material_master'},
    material13:{type : Schema.Types.ObjectId, ref:'material_master'},
    material14:{type : Schema.Types.ObjectId, ref:'material_master'},
    material15:{type : Schema.Types.ObjectId, ref:'material_master'},
    material16:{type : Schema.Types.ObjectId, ref:'material_master'},
    material17:{type : Schema.Types.ObjectId, ref:'material_master'},
    material18:{type : Schema.Types.ObjectId, ref:'material_master'},
    material19:{type : Schema.Types.ObjectId, ref:'material_master'},
    material20:{type : Schema.Types.ObjectId, ref:'material_master'},
    material21:{type : Schema.Types.ObjectId, ref:'material_master'},
    material22:{type : Schema.Types.ObjectId, ref:'material_master'},
    material23:{type : Schema.Types.ObjectId, ref:'material_master'},
    material24:{type : Schema.Types.ObjectId, ref:'material_master'},
    lot_qty:{type: String, required: true, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Lot_master', lot, 'lot_master');