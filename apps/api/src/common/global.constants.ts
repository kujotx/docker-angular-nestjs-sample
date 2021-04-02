import * as dotenv from 'dotenv';
import * as path from 'path';

const envFile = path.resolve(__dirname, '../../../../.env');
dotenv.config({ path: envFile });

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
            apiPort: Number(process.env.API_PORT || 3100),
            dbHost: process.env.DB_HOST || 'localhost',
            dbPort: Number(process.env.DB_PORT || 1433),
            dbName: process.env.DB_NAME || 'AdoptHighway',
            dbUser: process.env.DB_USER || 'txdotuser',
            dbPassword: process.env.DB_PASSWORD || 'password',
            saUser: process.env.SA_USER || 'sa',
            saPassword: process.env.SA_PASSWORD || 'password',
        };
    }
}
