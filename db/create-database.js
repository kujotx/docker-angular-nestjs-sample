//Database Configuration
require('dotenv').config({ path: require('path').join(__dirname, '../.env')});

module.exports = {
    dev: {
        server: "localhost", 
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
            fallbackToDefaultDb: true,
            port: 5434
        }        
    }
};
