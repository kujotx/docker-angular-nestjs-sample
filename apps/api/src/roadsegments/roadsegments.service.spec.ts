import { Test, TestingModule } from '@nestjs/testing';
import { RoadSegmentService } from './roadsegments.service';

describe('RoadsegmentsService', () => {
    let service: RoadSegmentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RoadSegmentService],
        }).compile();

        service = module.get<RoadSegmentService>(RoadSegmentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
