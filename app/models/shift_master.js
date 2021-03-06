'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shift = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    shift_name:{type: String, required:true, trim:true},
    shift_time:{ type : String, required: true, trim: true },
    shift_start:{type : String, required:true, trim:true},
    shift_end:{type: String, required:true, trim:true},
    shift_desc:{ type: String, trim: true }
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Shift_master', shift, 'shift_master');