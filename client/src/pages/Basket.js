import React, {useContext} from "react";
import { Context } from "../index.js";
import {Col, Row} from 'react-bootstrap';
import BasketForm1 from "../components/BasketForm1.js";
import { observer } from "mobx-react-lite";
import BasketCard from "../components/BasketCard.js";
import { toJS } from 'mobx';

const Basket = observer(() => {

    const { orderStore } = useContext(Context);
    let filterArrOfProduct = new Set();
   
    for(let i = 0; i < orderStore.products.length; i++) {
        filterArrOfProduct.add(orderStore.products[i]) 
    }
    for(let i = 0; i < orderStore.delitedProducts.length; i++) {
        filterArrOfProduct.delete(orderStore.delitedProducts[i])
    }
    
    let newArr = []
   
    for(let i of filterArrOfProduct) {
        newArr.push(i)
    }
    let newResult = Object.values(orderStore.productAndCount)
    newResult = newResult.map(i => i.sum)
    console.log(newResult)
    let result = newResult.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    return (
            <div className="basketForm">
               <Row className="basketStore">
                    <Col className="d-flex flex-column " md={4}>
                        <p>{`Загальна вартість замовлення: ${result}`}</p>
                        <BasketForm1 />
                    </Col>
                    <Col style={{display: 'flex'}} md={8} className="baskets">
                        {newArr.map(product => <BasketCard product={product} /> )}
                    </Col>
               </Row>
            </div>
    );
});

export default Basket;