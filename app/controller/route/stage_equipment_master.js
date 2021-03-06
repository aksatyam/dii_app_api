'use strict'
let router= require('express').Router();
const stageEquipFunc = require('../process/stage_equipment_master');
router.get('/test',stageEquipFunc.test);
router.post('/save',stageEquipFunc.saveStageEquipment);
router.post('/editOne',stageEquipFunc.ediitStageEquipment);
router.get('/getAll/:id',stageEquipFunc.getAllStageEquipment);
router.get('/getOne/:id',stageEquipFunc.getOneStageEquipment);
module.exports = router;