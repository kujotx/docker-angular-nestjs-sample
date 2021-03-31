import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoadsegmentsModule } from './roadsegments/roadsegments.module';

@Module({
  imports: [RoadsegmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
