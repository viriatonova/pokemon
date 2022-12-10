// import * as dotenv from 'dotenv'
import cors from 'cors'
import 'reflect-metadata'
import { DataSource } from "typeorm"
import {Pokemon} from '../pokemon/Entity'


/**
 * Environment Variables
 */
 export const SERVER = process.env.SERVER;
 export const PORT = process.env.PORT;
 export const DB_USER = process.env.DB_USER
 export const DB_PASSWORD = process.env.DB_PASSWORD
 export const DB_HOST = process.env.DB_HOST
 export const DB = process.env.DB
 export const STATIC_DIR = '/public/image/'

 /**
 * Cors Settings
 */
const whitelist = [
    'http://0.0.0.0:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000', 
    'http://0.0.0.0:4200',
    'http://localhost:4200',
    'http://127.0.0.1:4200'
];

export const corsOptions: cors.CorsOptions = {
    origin: whitelist
}

/**
 * DB Connection
 */
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    synchronize: true,
    logging: true,
    entities: [Pokemon],
    subscribers: [],
    migrations: [],
})
