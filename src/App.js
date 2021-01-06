import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
