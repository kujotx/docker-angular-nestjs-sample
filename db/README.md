# Continuous Integration and Delivery for Database

## Summary

This directory contains a db-migrate database application for automatically executing SQL files in a SQL Server database.

## Quick Start

- Go to the project root directory.
- Run the setup.ps1 script to install Docker Desktop, Node, db-migrate-mssql and db-migrate. 
- Run the build.ps1 script to create all of the containers and run the db.

```powershell
> .\setup.ps1
Machine configured

> .\build.ps1

```

```bash
npm run migrate:up
```

## Explanation

This example uses Docker to run Microsoft SQL Server 2019 latest container. We need to create an initial database manually.

The migration was creating using [db-migrate's create command](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/#create) from a command prompt:

```bash
db-migrate create 20210331090500-create-road-segment --sql-file true --config .\migrate-database.js
```

## Next Steps

## Important

- Migration names must begin with a 14 digit timestamp and hyphenated name. There is a regular expression that fails when this is not properly created. 
- Use the `db-migrate create` command to ensure proper migration creation of the JavaScript and SQL files.
