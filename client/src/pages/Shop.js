import React, { useContext, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import TypeBar from "../components/TypeBar.js";
import CategoryBar from '../components/CategoryBar.js';
import ProductsList from "../components/ProductsList.js";
import {observer} from 'mobx-react-lite';
import { Context } from '../index.js'
import { fetchCategory, fetchProduct, fetchTypes } from "../http/productApi.js";
import '../style.css';

const Shop = observer(() => {
    const {product} = useContext(Context);
    useEffect(() => {
        fetchTypes().then(data => {product.setTypes(data)})
        fetchCategory().then(data => {product.setCategories(data)})
        fetchProduct(null, null).then(data => {
            product.setProductes(data)
        })
    }, [])
    useEffect(() => {
        fetchProduct(product.selectedType._id, product.selectedCategory._id).then(data => {
            product.setProductes(data)
        })
    }, [product.selectedType, product.selectedCategory,])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <CategoryBar />
                    <ProductsList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;