import dotenv from 'dotenv';
import path from 'path';

//Configuration
dotenv.config({ path: path.join(__dirname, '../../../.env') });

interface Environment {
    apiTitle: string;
    apiDescription: string;
    apiPort: number;
    dbHost: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    saUser: string;
    saPassword: string;
}

export default class GlobalConstants {
    public environment: Environment;
    static environment: Environment;

    constructor() {
        this.environment = {
            apiTitle: process.env.API_TITLE || 'NO API TITLE PROVIDED',
            apiDescription:
                process.env.API_DESCRIPTION || 'NO API DESCRIPTION CONFIGURED',
            apiPort: Number(process.env.API_PORT),
            dbHost: process.env.DB_HOST,
            dbPort: Number(process.env.DB_PORT),
            dbName: process.env.DB_NAME,
            dbUser: process.env.DB_USER,
            dbPassword: process.env.DB_PASSWORD,
            saUser: process.env.SA_USER,
            saPassword: process.env.SA_PASSWORD,
        };
    }
}
