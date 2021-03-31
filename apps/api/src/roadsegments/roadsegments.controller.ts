import { Controller, Get } from '@nestjs/common';
import { RoadSegmentService } from './roadsegments.service';

@Controller('roadsegments')
export class RoadsegmentsController {
    constructor(private readonly roadsegmentsService: RoadSegmentService) {}

    @Get()
    findAll() {
        return this.roadsegmentsService.findAll();
    }
}
