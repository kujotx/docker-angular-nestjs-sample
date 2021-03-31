import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { RoadSegmentModule } from './roadsegments/roadsegments.module';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

@Module({
    imports: [RoadSegmentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
