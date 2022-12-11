import express, { Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path';
import { ROUTER } from './api/router';
import { routeDefaultMiddleware } from './api/middlewares';
import { 
    SERVER, PORT, corsOptions, AppDataSource,
    STATIC_DIR
} from './api/settings';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

const APP = express();

APP.use(cors<Request>(corsOptions))
APP.use(bodyParser.json())
APP.use('/api/v1', ROUTER)
APP.use('/static', express.static(path.join(__dirname, STATIC_DIR)))
APP.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
APP.all('*', routeDefaultMiddleware);

AppDataSource.initialize()
    .then(() => {
        console.log('Database has been intialized')
    })
    .catch((error) => console.log(error))


APP.listen(PORT, () => {
    console.log(`[server]: running at http://${SERVER}:${PORT}/api/v1`);
});
