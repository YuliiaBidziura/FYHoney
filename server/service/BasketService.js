import BasketModel from "../models/BasketModel.js";
class BasketService {
    async create({productName, productImg, productPrice, quantity, totalSum, personName, deliveryMethod, paymentMethod, phoneNumber, commentToTheOrder}) {
        const createBasket = await BasketModel.create(productName, productImg, productPrice, quantity, totalSum, personName, deliveryMethod, paymentMethod, phoneNumber, commentToTheOrder);
        return createBasket;
    };
    async getOne(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const basket = await BasketModel.findById(id);
        return basket;
    };
    async update(basket) {
        if(!basket._id) {
            throw new Error('ID не вказано!');
        };
        const updateBasket = await BasketModel.findByIdAndUpdate(basket._id, basket, {new: true});
        return updateBasket;
    };
    async delete(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const basket = await BasketModel.findByIdAndDelete(id);
        return basket;
    }
}
export default new BasketService();