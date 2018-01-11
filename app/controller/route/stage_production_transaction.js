'use strict'
let router= require('express').Router();
const stageTransFunc = require('../process/stage_production_transaction');
router.get('/test',stageTransFunc.test);
module.exports = router;