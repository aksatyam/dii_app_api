'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shiftHour = new Schema({
    indu_id:{ type: Schema.Types.ObjectId, ref:'industry_master' },
    shift_master_id:{ type : Schema.Types.ObjectId, ref:'shift_master' },
    shift_hourly_start:{ type: String, required: true, trim: true},
    shift_hourly_end:{ type: String, required: true, trim: true},
    shift_details:{ type: String, required: true, trim: true }
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Shift_hourly_master', shiftHour, 'shift_hourly_master');