import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RoadSegmentEntity } from './entities/roadsegment.entity';

@Injectable()
export class RoadSegmentService {
    constructor(
        @Inject('ROADSEGMENT_REPOSITORY')
        private photoRepository: Repository<RoadSegmentEntity>,
    ) {}

    async findAll(): Promise<RoadSegmentEntity[]> {
        return this.photoRepository.find();
    }
}
