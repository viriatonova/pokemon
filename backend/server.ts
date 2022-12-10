import express, { Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path';
import { ROUTER } from './api/router';
import { routeDefaultMiddleware } from './api/middlewares';
import { 
    SERVER, PORT, corsOptions,
    STATIC_DIR
} from './api/settings'

const APP = express();

APP.use(cors<Request>(corsOptions))
APP.use(bodyParser.json())
APP.use('/api/v1', ROUTER)
APP.use('/static', express.static(path.join(__dirname, STATIC_DIR)))

APP.all('*', routeDefaultMiddleware);


APP.listen(PORT, () => {
    console.log(`[server]: running at http://${SERVER}:${PORT}/api/v1`);
});
