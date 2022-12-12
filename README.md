# Pokemon Capture 

## Content

1. [Dependencies](#dependencies)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Tests](#tests)

<br/>

## Dependencies

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/reference/)
- [Docker-compose](https://docs.docker.com/compose/)

<br/>

## Setup

- Using the project default configs:
    - run: `docker-compose up` in root project folder

<br/>

- If you plane to use custom environments varibles:
    - Create a `.env` file in the root folder and add the following env vars:
        - `SERVER_HOST=<api_host>`
        - `SERVER_PORT=<api_port>`
        - `POSTGRES_USER=<db_user>`
        - `POSTGRES_PASSWORD=<db_password>`
        - `POSTGRES_DB=<database>`
    - On the frontend environment file: `frontend > app > environments > environment.ts` 
        - setup change APIURL: `http://<SERVER_HOST>:<SERVER_PORT>/api/v1` 
    - On backend:
        - install `dotenv` npm package: `npm install dotenv`
        - set the following code in to the file: `backend > api > settings.ts`

            ```typescript
            import dotenv from 'dotenv'
            import path from 'path';

            dotenv.config({path: path.join(__dirname, '../../.env') });
            ```
<br/>

## Usage

The database application only suport the following list of pokemons images:

- psyduck | pikachu | charmander | cyndaquil | dragonite | eevee | emboar | fennekin | grotle | grpwlithe | ivysaur | jolten

If you do a `post request` to create a pokemon out side of the list the image field in frontend will broke 

<br/>

## Tests

Before run the tests it's needed up the application.

To run the automation tests go to tests folder:

- run: `npm install`
- run: `npm test`



