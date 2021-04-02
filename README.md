# TxDOT Adopt-A-Highway

## Summary

This is the TxDOT Adopt-A-Highway applications.

## Quick Start for development

- Execute setup.ps1 to report missing dependencies that you will need to manually install
- Execute build.ps1 to create a database, migrate and provide data for local development

## Explanation

`setup.ps1` will report missing dependencies that are needed for Adopt-A-Highway to run successfully.

The following are required:

Node LTS Latest, to provide Node.JS and NPM

The following NPM packages are required globally:

- *db-migrate* to provide database script execution support for CI\CD
- *db-migrate-mssql* to provide MS SQL Server support for migrations
- *@angular/cli* to provide Angular CLI for the web
- *@nestjs/cli* to provide NEST JS CLI for the api
- *typeorm* to provide data mapping CLI for the api
