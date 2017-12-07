'use strict'
let router= require('express').Router();
const lotFunc = require('../process/lot_master');
router.get('/test',lotFunc.test);
module.exports = router;