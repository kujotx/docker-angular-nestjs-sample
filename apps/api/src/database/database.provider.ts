import GlobalConstants from 'src/common/global.constants';
import constants from 'src/common/global.constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'mssql',
                host: GlobalConstants.environment.dbHost,
                port: GlobalConstants.environment.dbPort,
                username: GlobalConstants.environment.dbUser,
                password: GlobalConstants.environment.dbPassword,
                database: GlobalConstants.environment.dbName,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                options: {
                    enableArithAbort: true,
                },
            }),
    },
];
