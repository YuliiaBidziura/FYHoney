// import UserService from "../service/UserService";
import bcrypt, { compareSync } from "bcrypt";
import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';

const SECRET_KEY = '1q2w3e4r5t6y7u8i9o9z8x7c6v5b4n3m2d1k';

class UserController {
    async registration(req, res) {
        try {
            const {email, password} = req.body;
            if(!email || !password) {
                return res.status(400).json('Некоректний email або password!');
            };
            const candidate = await UserModel.findOne({email: email}).then(function(result){
                return result !== null;
           });
            if(candidate) {
                return res.status(400).json('User olready exsist!'); 
            };
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await UserModel.create({email, password: hashPassword});
            const token = jwt.sign({id: user.id, email: user.email, password: user.password}, SECRET_KEY, {expiresIn: '24h'} );
            return res.json({token})
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await UserModel.findOne({email: email});
            if(!user) {
                return res.status(500).json('Користувача не знайдено!');
            }
            let comparePassword = bcrypt.compareSync(password, user.password);
            if(!comparePassword) {
                return res.status(500).json('Користувача не знайдено!');
            }
            const token = jwt.sign({id: user.id, email: user.email, password: user.password}, SECRET_KEY, {expiresIn: '24h'} );
            return res.json({token})
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async check(req, res) {
        try {
            const token = jwt.sign({id: req.user.id, email: req.user.email, password: req.user.password}, SECRET_KEY, {expiresIn: '24h'} );
            return res.json({token});
        } catch (e) {
            res.status(500).json(e);
        }
    };
}
export default new UserController();