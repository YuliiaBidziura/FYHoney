import {makeAutoObservable} from 'mobx';
export default class BasketStore {
    constructor() {
        this._id = ''
        this._email = ''
        this._name = ''
        this._phone = ''
        this._comment = ''
        this._adress = ''
        this._paymentMethod = ''
        this._deliveryMethod = ''
        this._order = {}
        makeAutoObservable(this)
    }
    setBasketId(id) {
        this._id = id;
    }
    setOrder(order) {
        this._order = order;
    }
    setEmail(email) {
        this._email = email;
    }
    setName(name) {
        this._name = name;
    }
    setPhone(phone) {
        this._phone = phone;
    }
    setComment(comment) {
        this._comment = comment;
    }
    setAdress(adress) {
        this._adress = adress;
    }
    setPaymentMethod(method) {
        this._paymentMethod = method;
    }
    setDeliveryMethod(deliveryMethod) {
        this._deliveryMethod = deliveryMethod;
    }
    get basketId() {
        return this._id;
    }
    get order() {
        return this._order;
    }
    get email() {
        return this._email;
    }
    get name() {
        return this._name;
    }
    get phone() {
        return this._phone
    }
    get comment() {
        return this._comment;
    }
    get adress() {
        return this._adress;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    get deliveryMethod() {
        return this._deliveryMethod;
    }
}
