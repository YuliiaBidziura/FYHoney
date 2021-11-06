import React, {useEffect, useState, useContext} from "react";
import {Col, Container, Image, Row, Button, Card} from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom'
import { fetchOneProduct } from "../http/productApi.js";
import {BASKET_ROUTE, LOGIN_ROUTE} from '../utils/consts.js'
import { Context } from "../index.js";


const ProductPage = () => {
    const history = useHistory()
    const { user, basket } = useContext(Context);

    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => {
            setProduct(data)
            basket.setProductName(data.title)
            basket.setProductImg(data.picture)
            basket.setProductPrice(data.price)
            basket.setQuantity(1)
        })
    }, [])
    basket.setProductId(id);
    
    
    return ( 
            <Container style={{marginTop: 75}}>
                <Row className="d-flex align-items-center">
                    <Col md={4}>
                        <Image src={'http://localhost:7000/' + product.picture} style={{width: 350, height: 350, borderRadius: 25}}/>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>{product.title}</h2>
                            <div style={{textAlign: 'center'}}>{product.description}</div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Card 
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={{width: 200, height: 150, fontSize: 32, border: '5px solid hotpink', borderRadius: 30, marginLeft: 60}}
                        >
                            <h3>{product.price} грн</h3>
                            <Button onClick={() => {user.isAuth ? history.push(BASKET_ROUTE) : history.push(LOGIN_ROUTE)}} variant={"outline-dark"}>Добавити в корзину</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
};
export default ProductPage;