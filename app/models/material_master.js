'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let material = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    material_name:{type: String, required: true, trim: true},
    material_description:{type:String,trim:true},
    parameters: [
        {
            parem_name : { type: String, trim:true },
            parem_qty: { type: Number, default: 0 }
        }
    ]
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Material_master', material, 'material_master');