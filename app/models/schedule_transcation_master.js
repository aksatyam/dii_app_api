'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schedule_transaction = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    product_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    quantity: { type: String, trim: true},
    fromDate: { type: Number, trim: true},
    toDate:{type: Number, trim: true} 
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Schedule_transaction_master', schedule_transaction, 'schedule_transaction_master');