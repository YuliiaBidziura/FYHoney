import { BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, INFO_ROUTE } from './utils/consts.js';
import Basket from './pages/Basket.js';
import Shop from './pages/Shop.js';
import Auth from './pages/Auth.js';
import ProductsPage from './pages/ProductsPage.js';
import Info from './pages/Info.js';
export const authRoutes = [
    
];

export const publicRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: INFO_ROUTE,
        Component: Info
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductsPage
    }
];