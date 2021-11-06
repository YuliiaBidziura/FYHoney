import React, { useContext, useState } from "react";
import {Container, Form, Card, Button, Row} from 'react-bootstrap';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts.js";
import backgroundImg1 from '../img/1.png';
import '../style.css';
import { login, registration } from '../http/UserApi.js';
import {observer} from "mobx-react-lite";
import { Context } from "../index.js";



const Auth = observer(() => {
    const location = useLocation();
    const history = useHistory()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-30}}
        >
            <img className="imgAuth" src={backgroundImg1} alt="animationI_Img" style={{ width: 650, height: 650,marginLeft: -250}}/>
            <Card style={{width: '500px', backgroundColor: "white", border: '4px solid black', marginLeft: -350}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-4"
                        placeholder="Введіть email..."
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-4"
                        placeholder="Введіть password..."
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="mt-3 d-flex justify-content-between">
                        {isLogin ?
                            <div>Немає аккаунта? <NavLink style={{color: 'hotpink'}} to={REGISTRATION_ROUTE}>Створити!</NavLink></div>
                            :
                            <div>Є аккаунт? <NavLink style={{color: 'hotpink'}} to={LOGIN_ROUTE}>Увійти!</NavLink></div>
                        }
                        
                    </Row>
                    <Button onClick={click} variant="outline-dark" className="align-self-end">{isLogin ? 'Увійти' : 'Реєстрація'}</Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;