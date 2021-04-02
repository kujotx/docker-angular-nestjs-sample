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
                port: Number(process.env.DB_PORT),
                username: process.env.SA_USER,
                password: process.env.SA_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
    },
];
