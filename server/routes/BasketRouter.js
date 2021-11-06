import Router from 'express';
import BasketController from '../controllers/BasketController.js';
const basketRouter = new Router();

basketRouter.post('/', BasketController.create);
basketRouter.get('/:id', BasketController.getOne);
basketRouter.put('/', BasketController.update);
basketRouter.delete('/:id', BasketController.delete)

export default basketRouter;