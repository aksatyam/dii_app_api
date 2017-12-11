'use strict'
let router= require('express').Router();
const userFun = require('./../process/super_admin');

router.get('/test', userFun.test);
module.exports = router;