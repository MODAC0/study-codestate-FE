import React from 'react';
import Nav from '../src/Nav';
import ItemList from './pages/ItemList';
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
            <ItemList />
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
