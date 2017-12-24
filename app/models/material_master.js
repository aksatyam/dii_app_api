'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let material = new Schema({
    indu_id:{type: Schema.Types.ObjectId, ref:'industry_master'},
    material_name:{type: String, required: true, trim: true},
    inspection_parem:{type: String, trim:true},
    qulaitycheck_parem:{type: String, trim: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Material_master', material, 'material_master');