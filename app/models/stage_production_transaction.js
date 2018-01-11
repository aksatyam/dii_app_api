'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stageProduction = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    product_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    stage_id:{type: mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    time_duration: { type: String, trim: true},
    entery_date: { type: String, trim: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Stage_production_transaction', stageProduction, 'Stage_production_transaction');