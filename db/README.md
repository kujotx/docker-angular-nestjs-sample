# Continuous Integration and Delivery for Database

## Summary

This directory contains a db-migrate database application for automatically executing SQL files in a SQL Server database.

## Quick Start

- Install Docker Desktop
- Run the docker-compose file to create and run the db service.

```bash
docker-compose up --build --force-recreate --quiet-pull db
```

- Install the db-migrate CLI globally

```bash
npm install -g db-migrate
```

- Create a database called AdoptAHighway in your SQL instance.
- Create a copy of the .env file and edit the port to match your local instance.
- Execute the following NPM task to create a sample table

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

- Migration names must begin with a 14 digit timestamp and hyphenated name. There is a regular expression that fails when this is not properly created. Use the `db-migrate create` command to ensure proper migration creation of the JavaScript and SQL files.