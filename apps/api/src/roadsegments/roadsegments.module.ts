import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RoadsegmentsController } from './roadsegments.controller';
import { roadSegmentProviders } from './roadsegments.provider';
import { RoadSegmentService } from './roadsegments.service';

@Module({
    imports: [DatabaseModule],
    providers: [...roadSegmentProviders, RoadSegmentService],
    exports: [RoadSegmentService],
    controllers: [RoadsegmentsController],
})
export class RoadSegmentModule {}
