'use strict'
let router= require('express').Router();
const scheduleFunc = require('../process/schedule_master');
router.get('/test',scheduleFunc.test);
router.post('/save', scheduleFunc.saveSchedule);
router.post('/editSchedule/:id', scheduleFunc.editSchedule);
router.get('/getAllSchedule/:id', scheduleFunc.getAllSchedule);
router.get('/getOneSchedule/:id', scheduleFunc.getOneSchedule);
module.exports = router;