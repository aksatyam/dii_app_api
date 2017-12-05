'use strict'
let router= require('express').Router();
const userFun = require('./../process/user');

router.get('/test', userFun.test);

module.exports = router;