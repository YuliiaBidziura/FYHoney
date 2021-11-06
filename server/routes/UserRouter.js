import Router from 'express';
import UserController from '../controllers/UserController.js';
import authModdleware from '../middlevare/authMidlleware.js';
const userRouter = new Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login)
userRouter.get('/auth', authModdleware,  UserController.check);

export default userRouter;