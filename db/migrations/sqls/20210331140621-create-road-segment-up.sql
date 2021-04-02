CREATE TABLE dbo.RoadSegments (
    Id UNIQUEIDENTIFIER DEFAULT(newsequentialid()) PRIMARY KEY,
    RouteName NVARCHAR(255) NOT NULL,
    SegmentStatus NVARCHAR(255) NOT NULL,
    RoadSegmentLength SMALLINT NOT NULL DEFAULT(2),
    District NVARCHAR(255) NOT NULL,
    County NVARCHAR(255) NOT NULL,
    [Location] NVARCHAR(255) NOT NULL,
    MaintenanceOffice NVARCHAR(255) NOT NULL,
    MaintenanceOfficeNumber NVARCHAR(255) NOT NULL,  
    FromToDescription NVARCHAR(255) NOT NULL,
    GroupName NVARCHAR(255) NOT NULL
);