'use strict'
let router= require('express').Router();
const lotFunc = require('../process/lot_master');
router.get('/test',lotFunc.test);
router.post('/save', lotFunc.saveLot);
router.post('/edit/:id', lotFunc.editLots);
router.get('/getAll/:id', lotFunc.getAllLots);
router.get('/getOne/:id', lotFunc.getOneLot);
module.exports = router;