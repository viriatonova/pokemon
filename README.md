# Pokemon Capture 

## Content

1. [Dependencies](#dependencies)
2. [Setup](#setup)
4. [Usage](#usage)
6. [Tests](#tests)
8. [Additional information](#additional-information)

## Dependencies

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/reference/)
- [docker-compose](https://docs.docker.com/compose/)

## Setup

- create a `.env` file in the root folder.
- Add set the following env vars to your `.env` file:
    - `SERVER_HOST=<api_host>`
    - `SERVER_PORT=<api_port>`
    - `POSTGRES_USER=<db_user>`
    - `POSTGRES_PASSWORD=<db_password>`
    - `POSTGRES_DB=<database>`
    - `DB_HOST=db_certi`

- If you plane to change the variable `DB_HOST` you will need to change `db_certi` docker container name to.

## Usage

## Tests

## Additional information

