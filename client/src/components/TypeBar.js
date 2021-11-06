import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from '../index.js';
import {ListGroup} from 'react-bootstrap';
import '../style.css';
import photo from '../img/3.png'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    
    return (
        <div>
            <h2 style={{textAlign:'center', marginTop: 10, marginBottom: 25}}>Наші десерти</h2>
        <ListGroup>
            {product.types.map(type => 
                <ListGroup.Item 
                    style={{cursor: 'pointer', active: 'click'}}
                    active={type.title === product.selectedType.title}
                    type="button"
                    key={type.id}
                    onClick={() => product.setSelectedType(type)}
                
                > 
                    {type.title}
                </ListGroup.Item>
            )}
        </ListGroup>
        <img src={photo} alt=" " style={{height: 250, width: 250, marginLeft: 33, marginTop: 25}}></img>
        </div>
    );
});

export default TypeBar;