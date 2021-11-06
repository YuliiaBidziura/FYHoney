import React from "react";
import {Col, Row} from 'react-bootstrap';
import Iframe from 'react-iframe'
const ContactInfo = () => {

    return (
        <div style={{backgroundColor: 'black', height:500}}>
            <Row className="d-flex align-items-center">
                <Col md={7} className="d-flex flex-column align-items-center justify-content-center">
                    <h2 style={{alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 30}}>Слідкуй за нами!</h2>
                    <ul style={{alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20}}>
                        <li>Ми в Facebook:   https://www.facebook.com/</li>
                        <li>Ми в Instagram:  @FYHoney</li>
                        <li>Ми в Telegram:   @FYHoney</li>
                    </ul>
                </Col>
                <Col md={5} className="d-flex align-items-center justify-content-center">
                    <Col style={{marginTop: 50}}>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.6710150725!2d23.9421956482908!3d49.832667949165625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1635931093829!5m2!1suk!2sua" title="Ми на карті" width="400" height="400" style="border:2;" allowfullscreen="" loading="lazy"></Iframe>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default ContactInfo;