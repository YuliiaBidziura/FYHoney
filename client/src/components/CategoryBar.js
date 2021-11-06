import React, { useContext } from "react";
import {observer} from 'mobx-react-lite';
import { Context } from "../index";
import {Card} from "react-bootstrap";
import '../style.css';


const CategoryBar = observer(() => {
    const {product} = useContext(Context);
    return (
        <div className="d-flex" style={{display: "inline"}}>
            {product.categories.map(category => 
                <Card
                    onClick={() => product.setSelectedCategory(category) }
                    key={category.id}
                    className="p-3"
                    style={{cursor: 'pointer' }}
                    border={category.title === product.selectedCategory.title ? 'black' : 'light'}
                    
                >
                    {category.title}
                </Card>
            )}
        </div>
    );
});

export default CategoryBar;