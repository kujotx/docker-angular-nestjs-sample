var sqlcmd = require('sqlcmd-runner');
var path = require('path');
var dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

sqlcmd({
    inputFiles: ['./mssql/setup.sql'],
    server: process.env.DB_HOST | {
        name: process.env.DB_HOST,
        instance: 'default',
        port: Number(process.env.DB_PORT) 
    },
    database: 'master',
});