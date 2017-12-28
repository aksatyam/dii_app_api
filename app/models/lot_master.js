'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lot = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    lot_name:{type: String, required: true, trim: true},
    material0:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    material1:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material2:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material3:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material4:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material5:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material6:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material7:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material8:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material9:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material10:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material11:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material12:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material13:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material14:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material15:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material16:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material17:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material18:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material19:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material20:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material21:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material22:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material23:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    material24:{type : mongoose.Schema.ObjectId, ref:'Material_master'},
    lot_qty:{type: String, required: true, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Lot_master', lot, 'lot_master');