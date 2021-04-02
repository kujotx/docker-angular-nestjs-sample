import constants from 'src/common/constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'mssql',
                host: constants.dbHost,
                port: constants.dbPort,
                username: constants.dbUser,
                password: constants.dbPassword,
                database: 'AdoptAHighway',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                options: {
                    enableArithAbort: true,
                },
            }),
    },
];
