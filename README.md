# Angular And Nest.JS Docker Containers

## Summary

This repository provides a mono-repository containing an Angular base-web and a Nest.JS base REST API. Each application is containerized using Docker Compose.

## Quick Start

- Execute setup.ps1 to install all dependencies
- Execute build.ps1 to run Docker compose

## Explanation

`setup.ps1` will install Chocolatey, followed by some needed packages for a Windows machine, then uses NPM to install needed console tools for building. This requires elevated admin rights the  first time, but not afterwards. After installing Chocolatey, the command for each dependency is tested. When the command does not return, that package is installed.

The following Chocolatey packages are installed:

Docker Desktop, to run Docker containers
Node LTS Latest, to provide Node.JS and NPM

The following NPM packages are installed globally:

db-migrate, to provide database script execution support for CI\CD
@angular/cli, to provide Angular CLI for the web
@nestjs/cli, to provide NEST JS CLI for the api

## Next Steps

- Debugging inside Docker is not currently configured. We will need to configure multiple ports for Node to watch. The web could be 9229, and the api could be 9230.
- Configure the apps to debug on the host machine. Right now, each app is configured for port 80.
