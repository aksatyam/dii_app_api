'use strict';
let mongoose = require('mongoose');
require('colors');
module.exports = (app)=>{
    console.log('db set');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://username:password@ds127506.mlab.com:27506/demodb', {
        // ashish-root@root
        useMongoClient: true
    });
    mongoose.connection.on('connected', ()=> {
        console.log('Mongoose default connection open to '.green );
    });

    mongoose.connection.once('open',()=> {
        console.log('Connected to mongodb!'.green);
    });

     mongoose.connection.on('error', (err)=> {
        console.error('Mongoose default connection error: ' + err,''.red);
    });

     mongoose.connection.on('disconnected', ()=> {
        console.log('Mongoose default connection disconnected',''.red);
    });

    process.on('SIGINT',  ()=> {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination',''.red);
            process.exit(0);
        });
    });
}
