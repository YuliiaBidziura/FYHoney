import Router from 'express';
import TypeController from '../controllers/TypeController.js';
const typeRouter = new Router();

typeRouter.post('/', TypeController.create);
typeRouter.get('/', TypeController.getAll);
typeRouter.get('/:id', TypeController.getOne);
typeRouter.put('/', TypeController.update);
typeRouter.delete('/:id', TypeController.delete)

export default typeRouter;