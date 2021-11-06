import Router from 'express';

import UserRouter from './UserRouter.js';
import TypeRouter from './TypeRouter.js';
import CategoryRouter from './CategoryRouter.js';
import ProductRouter from './ProductRouter.js';
import BasketRouter from './BasketRouter.js';


const router = new Router();


router.use('/user', UserRouter);
router.use('/basket', BasketRouter);
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/types', TypeRouter);

export default router;