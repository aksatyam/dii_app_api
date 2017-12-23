'use strict'
let router= require('express').Router();
const equipFunc = require('../process/equipment_master');
router.get('/test',equipFunc.test);
router.post('/save',equipFunc.saveEquipment);
router.post('/editOne/:id',equipFunc.editEquipmentOne);
router.get('/getAllEquip/:id',equipFunc.getEqipmentOne);
module.exports = router;