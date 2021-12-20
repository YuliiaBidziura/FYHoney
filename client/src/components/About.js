import React from "react";
import { Col, Row, Button } from 'react-bootstrap';
import emblem from '../img/3.png';

const About = () => {
    return (
        <div style={{ backgroundColor: 'white', border: '2px solid black' }}>
            <Row className="d-flex align-items-center">
                <Col className="d-flex flex-column align-items-center justify-content-center" md={6}>
                    <img src={ emblem } alt=" " style={{width: 500, height: 500}}></img>
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
                    <p style={{ textAlign: 'center', fontSize: 30, color: 'hotpink' }}>Привіт, друже!</p>
                    <p style={{ textAlign: 'center', fontSize: 20, color: 'hotpink' }}>Ми мережа кондитерських виробів FYHoney. Кажуть, що від солодкого може щось злипнутись, отож ми ті, хто ці стереотипи руйнує! Завітай до нас і сам у цьому переконайся! Якщо тебе щось зацікавило, можеш зателефонувати, ми з радістю дамо відповіді на всі запитаня!</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <Button variant="outline-light" style={{ textAlign: 'center', fontSize: 20, color: 'hotpink' }}>+38(097)-45-73-699</Button>
                        <Button variant="outline-light" style={{ textAlign: 'center', fontSize: 20, color: 'hotpink' }}>+38(063)-98-33-680</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;