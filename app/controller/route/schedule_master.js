'use strict'
let router= require('express').Router();
const scheduleFunc = require('../process/schedule_master');
router.get('/test',scheduleFunc.test);
module.exports = router;