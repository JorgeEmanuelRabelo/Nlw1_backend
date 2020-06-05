import { Router, response } from 'express';
import PointsController from './controllers/PointsController';
import itemsController from './controllers/ItemsController';

// Index: N, Show: 1,Create,Update,Delete
const routes = Router();
routes.get('/items', itemsController.index);

routes.get('/points/:id', PointsController.index);

routes.get('/points/:id', PointsController.show);

routes.post('/points', PointsController.create);

export default routes;