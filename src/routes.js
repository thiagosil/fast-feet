import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/recipients', RecipientController.create);
routes.put('/recipients/:recipientId', RecipientController.update);

routes.post('/deliveryman', DeliverymanController.create);

routes.post('/files', upload.single('file'), FileController.store);
module.exports = routes;
