'use strict'
module.exports =(app)=>{
    require('../app/models/industry_master');
    require('../app/models/user_master');
    require('../app/models/user_type');
    require('../app/models/equipment_master');
    require('../app/models/material_master');
    require('../app/models/stage_equipment_master');
    require('../app/models/shift_master');
    require('../app/models/shift_hourly_master');
    require('../app/models/lot_master');
    require('../app/models/super_admin');
    require('../app/models/industry_category');
    require('../app/models/industry_category_list');
    require('../app/models/materialChk');
    require('../app/models/schedule_master');
    console.log('Models set');
    return app;
}