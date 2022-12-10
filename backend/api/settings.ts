import * as dotenv from 'dotenv'
import cors from 'cors'
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

/**
 * Environment Variables
 */
 export const SERVER = process.env.SERVER_HOST;
 export const PORT = process.env.SERVER_PORT;
 export const DB_USER = process.env.POSTGRES_USER
 export const DB_PASSWORD = process.env.POSTGRES_PASSWORD
 export const DB_HOST = process.env.DB_HOST
 export const DB = process.env.POSTGRES_DB
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