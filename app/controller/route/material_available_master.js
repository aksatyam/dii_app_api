'use strict'
let router= require('express').Router();
const materialAvailFunc = require('../process/material_available_master');
router.get('/test',materialAvailFunc.test);
router.post('/save',materialAvailFunc.saveMaterialAvailable);
router.post('/edit/:id',materialAvailFunc.editMaterialAvailable);
router.get('/getAll/:id',materialAvailFunc.getAllMaterialAvailable);
router.get('/getOne/:id',materialAvailFunc.getOneMaterialAvailable);
module.exports = router;