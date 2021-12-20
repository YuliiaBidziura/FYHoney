import React, {useContext, useState} from "react";
import {Form, Button, Alert} from 'react-bootstrap';
import {SHOP_ROUTE} from '../utils/consts.js'
import {useHistory} from 'react-router-dom';
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
import '../style.css';
import { createBasket } from "../http/basketApi.js";

const BasketForm1 = observer(() => {
    const history = useHistory()
    const { user, basket, orderStore, totalSum } = useContext(Context);
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    
    orderStore.setAdress(value)
    orderStore.setPersonName(name)
    orderStore.setPhone(phone)
    orderStore.setComment(comment)
    const showAlert = () => {
        alert('Замовлення оформлено!')
        setTimeout(() => {history.push(SHOP_ROUTE)}, 1000)
    }
    const createOrder = () => {
        let newResult = Object.values(orderStore.productAndCount)
        newResult = newResult.map(i => i.sum)
        let result = newResult.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        orderStore.setTotalSum(result)
        const formData = new FormData()
        formData.append('id', user.id)
        formData.append('email', user.email)
        formData.append('phone', orderStore.userPhone)
        formData.append('name', orderStore.personName)
        formData.append('comment', orderStore.comment)
        formData.append('adress', orderStore.adress)
        formData.append('paymentMethod', orderStore.paymentMethod)
        formData.append('deliveryMethod', orderStore.deliveryMethod)
        formData.append('order', JSON.stringify(orderStore.finalOrder))
        createBasket(formData)
        showAlert()
    }
    
    return (
        <Form>
            <h2>Спосіб оплати</h2>
            <div className="d-flex">
                <Button  
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => {orderStore.setPaymentMethod('Готівка')}}
                    style={{cursor: 'pointer'}}
                    active={`${orderStore.paymentMethod}` === 'Готівка'}
                > 
                    Готівка
                </Button>
                <Button 
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => {orderStore.setPaymentMethod(`MONO`)}}
                    style={{cursor: 'pointer'}}
                    active={`${orderStore.paymentMethod}` === `MONO`}
                >
                    MONO
                </Button>
                <Button 
                    variant="outline-dark" 
                    className="buttonPay"
                    onClick={() => {orderStore.setPaymentMethod(`Visa/MasterCard`)}}
                    style={{cursor: 'pointer'}}
                    active={`${orderStore.paymentMethod}` === `Visa/MasterCard`}
                >
                    Visa/MasterCard
                </Button>
            </div>
            <h2>Спосіб доставки</h2>
            <div className="d-flex">
                <Button  
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => orderStore.setDeliveryMethod(`Кур'єрська доставка`)}
                    style={{cursor: 'pointer'}}
                    active={`${orderStore.deliveryMethod}` === `Кур'єрська доставка`}
                > 
                    Кур'єрська доставка
                </Button>
                <Button 
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() =>orderStore.setDeliveryMethod(`Самовивіз`)}
                    style={{cursor: 'pointer'}}
                    active={`${orderStore.deliveryMethod}` === `Самовивіз`}
                >
                    Самовивіз
                </Button>
            </div>
            <Form.Control
                className="mt-3"
                value={value}
                placeholder="Введіть адресу доставки"
                onChange={(e) => setValue(e.target.value)}
                style={{width: 350}}
            >
            </Form.Control>
            <Form.Control
                className="mt-3"
                value={name}
                placeholder="Введіть ім'я"
                onChange={(e) => setName(e.target.value)}
                style={{width: 350}}
            >
            </Form.Control>
            <Form.Control
                className="mt-3"
                value={phone}
                placeholder="Введіть номер телефону"
                onChange={(e) => setPhone(e.target.value)}
                style={{width: 350}}
            >
            </Form.Control>
            <p style={{color: 'gray', fontSize: 10}}>
                Телефон для зворотнього зв'язку. Наприклад, +38(099)999 99 99.
            </p>
            <p>Маєте додаткові побажання?</p>
            <Form.Control
                className="mt-1"
                value={comment}
                placeholder="Вкажіть коментар до замовлення"
                onChange={(e) => setComment(e.target.value)}
                style={{width: 350}}
            >
            </Form.Control>
            <p style={{color: 'gray', fontSize: 10}}>Ваші дані занищені і не будуть передані нікому!</p>
            <Button variant="dark" onClick={() => createOrder()}>Оформити замовлення</Button>
            <p></p>
            <Button className="d-flex" variant="outline-light" style={{color: 'black', fontSize: 12, marginBottom: 10}} onClick={() => history.push(SHOP_ROUTE)}>Продовжити покупки</Button>
        </Form>
    );

});
export default BasketForm1;