import dotenv from 'dotenv';
import path from 'path';

//Configuration
dotenv.config({ path: path.join(__dirname, '../../../.env')});

export default {
    apiTitle: process.env.API_TITLE || 'NO API TITLE PROVIDED',
    apiDescription:
        process.env.API_DESCRIPTION || 'NO API DESCRIPTION CONFIGURED',
    apiPort: process.env.API_PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    saUser: process.env.SA_USER,
    saPassword: process.env.SA_PASSWORD,
};
