'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schedule = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    product_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    stages:[
        {
            stage_id : { type: mongoose.Schema.ObjectId, ref:'Stage_Equipment_master' },
            perUnitTime: { type: Number, default: 0 }
        }
    ],
    schedule_date:{type:String, trim:true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Schedule_master', schedule, 'schedule_master');