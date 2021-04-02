import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoadSegmentModule } from './roadsegments/roadsegments.module';

@Module({
    imports: [RoadSegmentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
