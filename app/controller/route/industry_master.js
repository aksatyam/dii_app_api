'use strict'
let router= require('express').Router();
const industryFun = require('./../process/industry_master');
router.get('/industry_test', industryFun.test);
router.post('/industry_save',industryFun.saveIndustry);
router.get('/industry_getall/:indu_category/:indu_sub_category',industryFun.getAllIndustry);
router.get('/industry_getone/:indus_id',industryFun.getOneIndustry);
router.post('/industry_update/:id', industryFun.updateIndustry);
router.get('/industry_email_phone_update/:type/:id/:data', industryFun.updatePhoneOrEmail);
router.post('/industry_image/:id', industryFun.uploadImage);
router.get('/industry_delete/:id',industryFun.deleteIndustry);
module.exports = router;