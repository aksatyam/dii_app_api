'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let materialChk = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    product_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    materials: [
        {
            material_id : { type: mongoose.Schema.ObjectId, ref:'Material_master' },
            quantity: { type: Number, default: 0 }
        }
    ]
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('MaterialChk', materialChk, 'materialChk');