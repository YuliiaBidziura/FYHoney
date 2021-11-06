import Router from 'express';
import CategoryController from '../controllers/CategoryController.js';
const categoryRouter = new Router();

categoryRouter.post('/', CategoryController.create);
categoryRouter.get('/', CategoryController.getAll);
categoryRouter.get('/:id', CategoryController.getOne);
categoryRouter.put('/', CategoryController.update);
categoryRouter.delete('/:id', CategoryController.delete)

export default categoryRouter;