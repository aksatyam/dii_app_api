'use strict'
let router= require('express').Router();
const shiftFunc = require('../process/shift_master');
router.get('/test', shiftFunc.test);
router.post('/save', shiftFunc.saveShift);
router.post('/edit/:id', shiftFunc.editShift);
router.get('/allshift/:indu_id', shiftFunc.gettAllShift);
router.get('/oneshift/:id', shiftFunc.getOneShift);
module.exports = router;