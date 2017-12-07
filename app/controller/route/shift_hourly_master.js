'use strict'
let router= require('express').Router();
const shiftHourlyFunc = require('../process/shift_hourly_master');
router.get('/test',shiftHourlyFunc.test);
module.exports = router;