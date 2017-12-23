'use strict'
let router= require('express').Router();
const materialFunc = require('../process/material_master');
router.get('/test',materialFunc.test);
router.post('/save', materialFunc.saveMaterial);
router.post('/editOne/:id', materialFunc.editMaterialOne);
router.get('/getAll/:id', materialFunc.getAllMaterial);
router.get('/getOne/:id', materialFunc.getOneMaterial);
module.exports = router;