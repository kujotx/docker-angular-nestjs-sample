import { Connection } from 'typeorm';
import { RoadSegmentEntity } from './entities/roadsegment.entity';

export const roadSegmentProviders = [
    {
        provide: 'ROADSEGMENT_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(RoadSegmentEntity),
        inject: ['DATABASE_CONNECTION'],
    },
];
