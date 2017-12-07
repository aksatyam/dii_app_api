'use strict'
let router= require('express').Router();
const stageEquipFunc = require('../process/stage_equipment_master');
router.get('/test',stageEquipFunc.test);
module.exports = router;