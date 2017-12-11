'use strict'
let router= require('express').Router();
const superAdminFun = require('./../process/super_admin');

router.get('/test', superAdminFun.test);
router.post('/save', superAdminFun.saveAdmin);
module.exports = router;