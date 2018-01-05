'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schedule = new Schema({
    indu_id:{type: mongoose.Schema.ObjectId, ref:'Industry_master'},
    product_id:{type: mongoose.Schema.ObjectId, ref:'Material_master'},
    stage0:{type: mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage0_perUnitTime:{type: String, trim: true},
    stage1:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage1_perUnitTime:{type: String, trim: true},
    stage2:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage2_perUnitTime:{type: String, trim: true},
    stage3:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage3_perUnitTime:{type: String, trim: true},
    stage4:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage4_perUnitTime:{type: String, trim: true},
    stage5:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage5_perUnitTime:{type: String, trim: true},
    stage6:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage6_perUnitTime:{type: String, trim: true},
    stage7:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage7_perUnitTime:{type: String, trim: true},
    stage8:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage8_perUnitTime:{type: String, trim: true},
    stage9:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage9_perUnitTime:{type: String, trim: true},
    stage10:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage10_perUnitTime:{type: String, trim: true},
    stage11:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage11_perUnitTime:{type: String, trim: true},
    stage12:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage12_perUnitTime:{type: String, trim: true},
    stage13:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage13_perUnitTime:{type: String, trim: true},
    stage14:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage14_perUnitTime:{type: String, trim: true},
    stage15:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage15_perUnitTime:{type: String, trim: true},
    stage16:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage16_perUnitTime:{type: String, trim: true},
    stage17:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage17_perUnitTime:{type: String, trim: true},
    stage18:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage18_perUnitTime:{type: String, trim: true},
    stage19:{type : mongoose.Schema.ObjectId, ref:'Stage_Equipment_master'},
    stage19_perUnitTime:{type: String, trim: true},
    schedule_date:{type:String, trim:true}
},{
    timestamps: true,
    versionKey: false
});

module.exports=mongoose.model('Schedule_master', schedule, 'schedule_master');