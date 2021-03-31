import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'sa',
                password: 'P@55w0rd!',
                database: 'AdoptAHighway',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
    },
];
