import React from 'react';
import Nav from './Nav';
import ItemListContainer from './pages/ItemListContainer';
import store from './store/store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact={true} path="/">
            <ItemListContainer />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
