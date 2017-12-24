'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lot = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    lot_name:{type: String, required: true, trim: true},
    material_1:{type: Schema.Types.ObjectId, ref:'material_master'},
    material_2:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_3:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_4:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_5:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_6:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_7:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_8:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_9:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_10:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_11:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_12:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_13:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_14:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_15:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_16:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_17:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_18:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_19:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_20:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_21:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_22:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_23:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_24:{type : Schema.Types.ObjectId, ref:'material_master'},
    material_25:{type : Schema.Types.ObjectId, ref:'material_master'},
    lot_qty:{type: String, required: true, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Lot_master', lot, 'lot_master');