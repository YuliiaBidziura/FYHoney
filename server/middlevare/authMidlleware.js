import jwt from 'jsonwebtoken';
const SECRET_KEY = '1q2w3e4r5t6y7u8i9o9z8x7c6v5b4n3m2d1k';
function check(req, res, next) {
    if(req.method === 'OPTIONS') {
        next();
    }
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(401).json('Користувач не авторизований!');
        }
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json('Користувач не авторизований!')
    }
}
export default check;