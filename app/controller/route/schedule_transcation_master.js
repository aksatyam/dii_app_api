'use strict'
let router= require('express').Router();
const scheduleTransFunc= require('../process/schedule_transcation_master');
router.get('/test',scheduleTransFunc.test);
router.post('/save',scheduleTransFunc.saveScheduleTrans);
router.post('/edit',scheduleTransFunc.editScheduleTransaction);
router.get('/getAll/:id',scheduleTransFunc.getAllScheduleTransaction);
router.get('getOne/:id',scheduleTransFunc.getOneScheduleTransaction);
module.exports = router;