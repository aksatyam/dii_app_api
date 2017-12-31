'use strict'
let router= require('express').Router();
const materialChkFunc = require('../process/materialChk');
router.get('/test',materialChkFunc.test);
module.exports = router;