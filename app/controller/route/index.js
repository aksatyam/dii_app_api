'use strict';
let router = require('express').Router();
const userRoute = require('./user');
const industryRoute = require('./industry_master');
const userMasterRoute = require('./user_master');
const userTypeRoute = require('./user_type');
const equipRoute = require('./equipment_master');
const materialRoute = require('./material_master');
const stageEquipRoute = require('./stage_equipment_master');
const shiftRoute = require('./shift_master');
const shiftHourlyRoute = require('./shift_hourly_master');
const lotMasterRoute = require('./lot_master');
const superAdminRoute = require('./super_admin');
const industryCatRoute = require('./industry_category');
const industryCatListRoute = require('./industry_category_list');
const materialChkRoute = require('./materialChk');
const scheduleMasterRoute = require('./schedule_master');
const materialAvailableRoute = require('./material_available_master');
router.use('/user', userRoute);
router.use('/industry', industryRoute);
router.use('/user_master', userMasterRoute);
router.use('/user_type', userTypeRoute);
router.use('/equip_master', equipRoute);
router.use('/material', materialRoute);
router.use('/stageEquipment', stageEquipRoute);
router.use('/shift', shiftRoute);
router.use('/shiftHourly', shiftHourlyRoute);
router.use('/lot', lotMasterRoute);
router.use('/superadmin', superAdminRoute);
router.use('/industryCategory', industryCatRoute);
router.use('/industryCategoryList', industryCatListRoute);
router.use('/materialChk', materialChkRoute);
router.use('/schedule',scheduleMasterRoute);
router.use('/materialAvailable',materialAvailableRoute);
module.exports= router;