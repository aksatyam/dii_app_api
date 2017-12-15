'use strict'
let router= require('express').Router();
const industryCatFun = require('./../process/industry_category');
router.get('/test', industryCatFun.test);
router.post('/save',industryCatFun.saveCategory);
router.post('/update',industryCatFun.updateCategory);
router.get('/getAll/',industryCatFun.getAllCategory);
module.exports = router;