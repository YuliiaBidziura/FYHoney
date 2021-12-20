import React, {useState, useContext} from "react";
import {observer} from 'mobx-react-lite';
import { Context } from "../index.js";
import { Card, Button } from "react-bootstrap";


const BasketCard = observer(({product}) => {
    let newProduct = JSON.parse(product)
    const { orderStore, totalSum } = useContext(Context);
    const [count, setCount] = useState(1);
    if(count >=0) {
        let sum = newProduct.price * count;
        orderStore.setProductAndCount(newProduct.title, count, sum)
    }

    
   
    
    return (
        <div className="cards">
        {count > 0 ? 
            <Card className="elemOfCard">
            <Card.Img 
                variant="top" 
                src={'http://localhost:7000/' + newProduct.picture}
                style={{width:288, height:270}}
            /> 
            <Card.Body>
                <Card.Title>{newProduct.title}</Card.Title>
                {`Ціна: ${newProduct.price} грн`}
                <p>Кількість</p>
                <Button variant="outline-dark" style={{width: 45, marginRight: 15}} onClick={() => {setCount(count+1)}}>+</Button>
                {count}
                <Button variant="outline-dark" style={{width: 45, marginLeft: 15}} onClick={() => setCount(count-1)}>-</Button>
                <p style={{fontSize: 20}}>Загальна сума: {newProduct.price * count}</p>
            </Card.Body>
        </Card>
        :
        orderStore.setDelitedProduct(JSON.stringify(product))
        }
        </div>
    )
});
export default BasketCard;