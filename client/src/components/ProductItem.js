import React from "react";
import {Col, Card, Image} from 'react-bootstrap';
import '../style.css';
import { useHistory } from 'react-router-dom';
import { PRODUCT_ROUTE } from "../utils/consts.js";

const ProductItem = ({product}) => {
    const history = useHistory();


    return (
        <Col md={3} className="mt-3" onClick={() => {history.push(PRODUCT_ROUTE + '/' + product._id)}}>
            <Card className="mt-3" style={{width: 230, cursor: 'pointer', textAlign: 'center', justifyContent: 'center', borderRadius: 1}} >
                <Image style={{width: 230, height:230, marginLeft: -1, }} src={'http://localhost:7000/' + product.picture}/>
                <div>{product.title}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;