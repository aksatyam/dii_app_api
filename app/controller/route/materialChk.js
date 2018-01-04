'use strict'
let router= require('express').Router();
const materialChkFunc = require('../process/materialChk');
router.get('/test',materialChkFunc.test);
router.post('/save', materialChkFunc.saveProduct);
router.post('/editProduct/:id', materialChkFunc.editProduct);
router.get('/getAllProduct/:id', materialChkFunc.getAllProduct);
router.get('/getOneProduct/:id', materialChkFunc.getOneProduct);
module.exports = router;