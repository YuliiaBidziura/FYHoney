import React, { useContext } from 'react';
import {Context} from '../index.js'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { BASKET_ROUTE, INFO_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import {NavLink} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import '../style.css';
import {useHistory} from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="black" variant="dark" style={{paddingTop: '15px', paddingBottom: '15px'}}>
            <Container>
                <NavLink style={{color: 'white', textDecoration: 'none', fontSize: '30px'}} to={SHOP_ROUTE}>FY<span style={{color: 'hotpink', fontSize: '30px'}}>Honey</span></NavLink>
                {user.isAuth ? 
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button onClick={() => {user.isAuth ? history.push(BASKET_ROUTE) : history.push(LOGIN_ROUTE)}} variant="outline-dark">Корзина<img src="https://ecaro.ru/local/templates/ecaro/img/u12.png" alt=" " className="btnBasket" style={{width: '25px', height: '25px'}}></img></Button>
                    <Button onClick={() => history.push(INFO_ROUTE)} variant="outline-light" style={{marginLeft: '8px'}}>Про нас</Button>
                    <Button onClick={() => logOut()} variant="outline-light" style={{marginLeft: '8px'}}>Вийти</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    <Button variant="outline-light" onClick={() => history.push(INFO_ROUTE)} style={{marginLeft: '8px'}}>Про нас</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;