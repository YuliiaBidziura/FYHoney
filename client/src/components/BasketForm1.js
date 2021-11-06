import React, {useContext, useState} from "react";
import {Form, Button} from 'react-bootstrap';
import {SHOP_ROUTE} from '../utils/consts.js'
import {useHistory} from 'react-router-dom';
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
import '../style.css';
import { createBasket } from "../http/basketApi.js";

const BasketForm1 = observer(() => {
    const history = useHistory()
    const { user, basket } = useContext(Context);
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    basket.setAdress(value)
    basket.setPersonName(name)
    basket.setPhoneNumber(phone)
    basket.setCommentToTheOrder(comment)


    const createOrder = () => {
        const formData = new FormData()
        formData.append('id', user.id)
        formData.append('personName', basket.personName)
        formData.append('deliveryMethod', basket.deliveryMethod)
        formData.append('paymentMethod', basket.paymentMethod)
        formData.append('phoneNumber', basket.phoneNumber)
        formData.append('commentToTheOrder', basket.commentToTheOrder)
        formData.append('productName', basket.productName)
        formData.append('productImg', basket.productImg)
        formData.append('productPrice', basket.productPrice)
        formData.append('quantity', basket.quantity)
        formData.append('totalSum', basket.totalSum)
        createBasket(formData).then(alert('Замовлення оформлено!'))
    }

    return (
        <Form>
            <h2>Спосіб оплати</h2>
            <div className="d-flex">
                <Button  
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => {basket.setPaymentMethod('Готівка')}}
                    style={{cursor: 'pointer'}}
                    active={`${basket.paymentMethod}` === 'Готівка'}
                > 
                    Готівка
                </Button>
                <Button 
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => {basket.setPaymentMethod(`MONO`)}}
                    style={{cursor: 'pointer'}}
                    active={`${basket.paymentMethod}` === `MONO`}
                >
                    MONO
                </Button>
                <Button 
                    variant="outline-dark" 
                    className="buttonPay"
                    onClick={() => {basket.setPaymentMethod(`Visa/MasterCard`)}}
                    style={{cursor: 'pointer'}}
                    active={`${basket.paymentMethod}` === `Visa/MasterCard`}
                >
                    Visa/MasterCard
                </Button>
            </div>
            <h2>Спосіб доставки</h2>
            <div className="d-flex">
                <Button  
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() => basket.setDeliveryMethod(`Кур'єрська доставка`)}
                    style={{cursor: 'pointer'}}
                    active={`${basket.deliveryMethod}` === `Кур'єрська доставка`}
                > 
                    Кур'єрська доставка
                </Button>
                <Button 
                    variant="outline-dark"
                    className="buttonPay"
                    onClick={() =>basket.setDeliveryMethod(`Самовивіз`)}
                    style={{cursor: 'pointer'}}
                    active={`${basket.deliveryMethod}` === `Самовивіз`}
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