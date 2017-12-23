'use strict'
let router= require('express').Router();
const shiftHourlyFunc = require('../process/shift_hourly_master');
router.get('/test',shiftHourlyFunc.test);
router.post('/save', shiftHourlyFunc.saveShiftHourly);
router.post('/edit/:id', shiftHourlyFunc.editShiftHourly);
router.get('/getAll/:id', shiftHourlyFunc.getAllShiftHourly);
router.get('/getOne/:id', shiftHourlyFunc.getOneShiftHourly);
module.exports = router;