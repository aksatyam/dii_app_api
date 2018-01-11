'use strict'
let router= require('express').Router();
const materialAvailFunc = require('../process/material_available_master');
router.get('/test',materialAvailFunc.test);
module.exports = router;