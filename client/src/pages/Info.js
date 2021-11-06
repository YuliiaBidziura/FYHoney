import React from 'react';
import About from '../components/About.js';
import ContactInfo from '../components/ContactInfo.js';
import {Card} from 'react-bootstrap';
import '../style.css';
import donats from '../img/b.jpg'

const Info = () => {
   
    return (
        <div style={{backgroundColor: 'black'}}>
            <Card className="text-center" style={{border: '1px solid black'}}>
                <Card.Body style={{height: 500, backgroundImage: `url(${donats})` }}>
                    <Card.Title style={{marginTop: 180, fontSize: 55, color: 'DeepPink'}}>ДОНАТСИ</Card.Title>
                    <Card.Title style={{marginTop: -73, marginLeft: 4, marginRight: -4, fontSize: 55, color: 'white'}}>ДОНАТСИ</Card.Title>
                    <Card.Text style={{marginTop: 20, fontSize: 40, color: 'DeepPink'}}>
                         Незабаром, ці солоденькі пампухи, будуть у продажу!
                    </Card.Text>
                    <Card.Text style={{marginTop: -75, marginLeft: 3, marginRight: -3, fontSize: 40, color: 'white'}}>
                         Незабаром, ці солоденькі пампухи, будуть у продажу!
                    </Card.Text>
                </Card.Body>
            </Card>
            <About />
            <ContactInfo />


















        </div>
        
    );
};
export default Info;