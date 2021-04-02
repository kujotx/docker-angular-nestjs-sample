//Database Configuration
require('dotenv').config({ path: require('path').join(__dirname, '../.env')});

module.exports = {
    dev: {
        appName: `${process.env.appName}-DB`,
        server: process.env.DB_HOST, 
        database: process.env.DB_NAME,
        enableArithAbort: true,
        authentication: {
            type: 'default',
            options: {
                userName: process.env.SA_USER,
                password: process.env.SA_PASSWORD,
            }
        },
        driver: 'mssql',
        options: {
            enableArithAbort: true,
            fallbackToDefaultDb: true,
            port: Number(process.env.DB_PORT),
        }        
    }
};
