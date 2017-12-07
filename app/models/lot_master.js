'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lot = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    lot_name:{type: String, required: true, trim: true},
    matrial_1:{type: Schema.Types.ObjectId, ref:'material_master'},
    matrial_2:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_3:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_4:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_5:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_6:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_7:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_8:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_9:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_10:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_11:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_12:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_13:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_14:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_15:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_16:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_17:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_18:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_19:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_20:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_21:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_22:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_23:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_24:{type : Schema.Types.ObjectId, ref:'material_master'},
    matrial_25:{type : Schema.Types.ObjectId, ref:'material_master'},
    lot_qty:{type: String, required: true, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Lot_master', lot, 'lot_master');