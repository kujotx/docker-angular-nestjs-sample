import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'RoadSegments', schema: 'dbo' })
export class RoadSegmentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    routeName: string;

    @Column()
    segmentStatus: string;

    @Column()
    roadSegmentLength: number;

    @Column()
    district: string;

    @Column()
    county: string;

    @Column()
    location: string;

    @Column()
    maintenanceOffice: string;

    @Column()
    maintenanceOfficeNumber: string;

    @Column()
    fromToDescription: string;

    @Column()
    groupName: string;
}
