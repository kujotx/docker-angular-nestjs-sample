# Angular And Nest.JS Docker Containers

## Summary

This repository provides a mono-repository containing an Angular base-web and a Nest.JS base REST API. Each application is containerized using Docker Compose.

## Quick Start

With Docker installed, run `docker-compose up --build` to launch both applications. The web is served on the host machine's port 3000, and the API over port 3100 by default. web and api source is under the /apps directory. Each app is configured to run on port 80 by default.

## Next Steps

- Debugging inside Docker is not currently configured. We will need to configure multiple ports for Node to watch. The web could be 9229, and the api could be 9230.
- Configure the apps to debug on the host machine. Right now, each app is configured for port 80.
