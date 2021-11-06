import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

export default mongoose.model('User', UserModel);