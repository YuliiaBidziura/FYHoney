import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import UserStore from './store/UserStore.js';
import ProductesStore from './store/ProductesStore.js';
import BasketStore from './store/BasketStore.js'
import OrderStore from './store/OrderStore.js';
import TotalSumOfOrder from './store/TotalSumOfOrder';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductesStore(),
    basket: new BasketStore(),
    orderStore: new OrderStore(),
    totalSum: new TotalSumOfOrder()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
