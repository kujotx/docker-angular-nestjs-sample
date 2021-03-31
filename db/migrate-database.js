//Database Configuration
require('dotenv').config({ path: require('path').join(__dirname, '../.env')});

module.exports = {
    dev: {
        appName: `${process.env.appName}-DB`,
        server: "127.0.0.1", 
        database: "AdoptAHighway",
        enableArithAbort: true,
        authentication: {
            type: 'default',
            options: {
                userName: 'sa',
                password: 'P@55w0rd!',
            }
        },
        driver: 'mssql',
        port: 5434,
        options: {
            enableArithAbort: true,
            fallbackToDefaultDb: true,
            port: 5434
        }        
    }
};
