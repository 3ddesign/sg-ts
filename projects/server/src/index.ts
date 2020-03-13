import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginController';

//TODO: refactor with decorastors:

const app = express;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dasadasd'] }))
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
});