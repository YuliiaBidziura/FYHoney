import mongoose from 'mongoose';

const CategoryModel = new mongoose.Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    title: {type: String, unique: true, allowNull: false}
});

export default mongoose.model('Category', CategoryModel);