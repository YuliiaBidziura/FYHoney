import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from '../index.js';
import {Row} from 'react-bootstrap';
import ProductItem from './ProductItem.js'
const ProductsList = observer(() => {
    const {product} = useContext(Context);
    return (
        <Row className="d-flex">
            {product.productes.map(product =>
                <ProductItem key={product.id} product={product}></ProductItem>
            )}
        </Row>
    );
});

export default ProductsList;
