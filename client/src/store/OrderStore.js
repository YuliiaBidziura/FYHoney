import {makeAutoObservable} from 'mobx';
export default class OrderStore {
    constructor() {
        this._personName = ''
        this._phone = ''
        this._paymentMethod = ''
        this._deliveryMethod = ''
        this._adress = ''
        this._comment = ''
        this._products = []
        this._delitedProducts = []
        this._productAndCount = {}
        this._totalSum = 0
        makeAutoObservable(this)
    }
    setPersonName(name) {
        this._personName = name;
    }
    setPhone(phone) {
        this._phone = phone;
    }
    setPaymentMethod(method) {
        this._paymentMethod = method;
    }
    setDeliveryMethod(deliveryMethod) {
        this._deliveryMethod = deliveryMethod;
    }
    setAdress(adress) {
        this._adress = adress;
    }
    setComment(comment) {
        this._comment = comment;
    }
    setProducts(product) {
        this._products.push(product)
    }
    setDelitedProduct(product) {
        this._delitedProducts.push(product)
    }
    setProductAndCount(product, count, sum) {
        this._productAndCount[product] = {'count': count, 'sum': sum};
    }
    setTotalSum(sum) {
        this._totalSum += sum
    }
    
    get personName() {
        return this._personName;
    }
    get userPhone() {
        return this._phone;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    get deliveryMethod() {
        return this._deliveryMethod;
    }
    get adress() {
        return this._adress;
    }
    get comment() {
        return this._comment;
    }
    get products() {
        return this._products;
    }
    get delitedProducts() {
        return this._delitedProducts;
    }
    get productAndCount() {
        return this._productAndCount;
    }
    get totalSum() {
        return this._totalSum;
    }
    get finalOrder() {
        return [
            this._productAndCount,
            this._totalSum
        ]
    }
}