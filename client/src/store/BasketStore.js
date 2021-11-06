import {makeAutoObservable} from 'mobx';
export default class BasketStore {
    constructor() {
        this._products = [{}]
        this._personName = ''
        this._deliveryMethod = ''
        this._paymentMethod = ''
        this._phoneNumber = ''
        this._commentToTheOrder = ''
        this._productId = ''
        this._productName = ''
        this._productImg = ''
        this._productPrice = ''
        this._quantity = ''
        this._totalSum = ''
        this._adress=''
        makeAutoObservable(this)
    }

    setAdress(adress) {
        this._adress = adress;
    }
    setProductName(productName) {
        this._productName = productName;
    }
    setProductImg(productImg) {
        this._productImg = productImg;
    }
    setProductPrice(productPrice) {
        this._productPrice = productPrice;
    }
    setQuantity(quantity) {
        this._quantity = quantity;
    }
    setTotalSum(totalSum) {
        this._totalSum = totalSum;
    }
    setProductId(productId) {
        this._productId = productId;
    }
    setProducts(product) {
        this._products = product

    }
    setPersonName(personName) {
        this._personName = personName;
    }
    setDeliveryMethod(deliveryMethod) {
        this._deliveryMethod = deliveryMethod;
    }
    setPaymentMethod(paymentMethod) {
        this._paymentMethod = paymentMethod;
    }
    setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
    setCommentToTheOrder(commentToTheOrder) {
        this._commentToTheOrder = commentToTheOrder;
    }

    get adress() {
        return this._adress;
    }
   
    get products() {
        return  this._product;
    }
    get personName() {
        return this._personName;
    }
    get deliveryMethod() {
        return this._deliveryMethod;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    get commentToTheOrder() {
        return this._commentToTheOrder;
    }
    get productName() {
        return this._productName;
    }
    get productImg() {
        return this._productImg;
    }
    get productPrice() {
        return this._productPrice;
    }
    get quantity() {
        return this._quantity;
    }
    get totalSum() {
        return this._totalSum;
    }
    get productId() {
        return this._productId;
    }
    
}
