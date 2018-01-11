'use strict'
let router= require('express').Router();
const scheduleTransFunc= require('../process/schedule_transcation_master');
router.get('/test',scheduleTransFunc.test);
module.exports = router;