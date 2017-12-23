'use strict'
let router= require('express').Router();
const userTypeFun = require('./../process/user_type');

router.get('/test', userTypeFun.test);
router.post('/save', userTypeFun.userTypeSave);
router.get('/getOne/:indu_id',userTypeFun.userTypeGet);

module.exports = router;