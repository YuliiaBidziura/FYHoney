import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import { Context } from "../index.js";
import {Col, Row, Button, Card, Container} from 'react-bootstrap';
import {fetchOneProduct} from '../http/productApi.js';
import BasketForm1 from "../components/BasketForm1.js";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {

    const history = useHistory()
    const { user, basket } = useContext(Context);
    const [count, setCount] = useState(1);
    let arr=[];

    useEffect(() => {
        fetchOneProduct(basket.productId).then(data => {
            arr.push(data)
        })
    }, [])
    basket.setQuantity(count)
    console.log(arr)
    console.log(basket)
    const price = basket.productPrice;
    basket.setTotalSum(price * count)

    return (
            <div style={{backgroundColor: 'white', border: '2px solid black', marginTop: 25}}>
               <Row className="d-flex">
                    <Col className="d-flex flex-column align-items-center justify-content-center" md={4}>
                        <BasketForm1 />
                    </Col>
                    <Col md={4} className="d-flex flex-column ">
                        
                            <Card style={{ width: '18rem' }}>
                            <Card.Img 
                                variant="top" 
                                src={'http://localhost:7000/' + basket.productImg}
                                style={{width:288, height:270}}
                            />
                            <Card.Body>
                                <Card.Title>{basket.productName}</Card.Title>
                                {`Ціна: ${price} грн`}
                                <p>Кількість</p>
                                <Button variant="outline-dark" style={{width: 45, marginRight: 15}} onClick={() => {setCount(count+1)}}>+</Button>
                                {count}
                                <Button variant="outline-dark" style={{width: 45, marginLeft: 15}} onClick={() => setCount(count-1)}>-</Button>
                                <p style={{fontSize: 20}}>Загальна сума: {price * count}</p>
                            </Card.Body>
                        </Card>
                    </Col>
               </Row>
            </div>
    );
});

export default Basket;