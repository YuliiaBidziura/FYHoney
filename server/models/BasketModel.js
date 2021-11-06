import mongoose from 'mongoose';

const BasketModel = new mongoose.Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    personName: {type: String, allowNull: false},
    deliveryMethod: {type: String, allowNull: false},
    paymentMethod: {type: String, allowNull: false},
    phoneNumber: {type: String, allowNull: false},
    commentToTheOrder: {type: String},
    productName: {type: String, allowNull: false },
    productImg: {type: String, allowNull: false},
    productPrice: {type: Number, required: true},
    quantity: {type: Number, required: true},
    totalSum: {type: Number, required: true}
});

export default mongoose.model('Basket', BasketModel);