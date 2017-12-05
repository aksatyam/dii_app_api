'use strict'
module.exports =(app)=>{
    require('../app/models/industry_master');
    require('../app/models/user_master');
    require('../app/models/user_type');
    require('../app/models/equipment_master');
    console.log('Models set');
    return app;
}