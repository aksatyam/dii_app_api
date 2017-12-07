'use strict'
let router= require('express').Router();
const shiftFunc = require('../process/shift_master');
router.get('/test',shiftFunc.test);
module.exports = router;