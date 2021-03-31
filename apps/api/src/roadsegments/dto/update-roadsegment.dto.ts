import { PartialType } from '@nestjs/swagger';
import { CreateRoadsegmentDto } from './create-roadsegment.dto';

export class UpdateRoadsegmentDto extends PartialType(CreateRoadsegmentDto) {}
