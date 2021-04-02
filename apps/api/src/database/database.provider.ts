import GlobalConstants from 'src/common/global.constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            const globalConstants = new GlobalConstants();
            return await createConnection({
                type: 'mssql',
                host: globalConstants.environment.dbHost,
                port: globalConstants.environment.dbPort,
                username: globalConstants.environment.dbUser,
                password: globalConstants.environment.dbPassword,
                database: globalConstants.environment.dbName,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                options: {
                    enableArithAbort: true,
                },
            });
        },
    },
];
