'use strict'
let router= require('express').Router();
const industryCatListFun = require('./../process/industry_category_list');
router.get('/test', industryCatListFun.test);
router.post('/save',industryCatListFun.saveCategoryList);
router.post('/update',industryCatListFun.updateCategoryList);
router.get('/getAll/:indu_cat_id', industryCatListFun.getAllCategoryList);
module.exports = router;