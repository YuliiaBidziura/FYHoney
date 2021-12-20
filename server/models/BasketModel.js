import mongoose from 'mongoose';

const BasketModel = new mongoose.Schema({
    id: {type: String, primaryKey: true, autoIncrement: true},
    email: {type: String},
    name: {type: String},
    phone: {type: String},
    comment: {type: String},
    adress: {type: String},
    paymentMethod: {type: String},
    deliveryMethod: {type: String},
    order: {type: Object},
});

export default mongoose.model('Basket', BasketModel);