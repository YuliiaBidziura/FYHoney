import mongoose from 'mongoose';

const ProductModel = new mongoose.Schema({
    id: {type: String, primaryKey: true, autoIncrement: true},
    title: {type: String, unique: true, required: true},
    description: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    typeId: {type: String, required: true},
    categoryId: {type: String, required: true},
    picture: {type: String, allowNull: false}
});

export default mongoose.model('Product', ProductModel);