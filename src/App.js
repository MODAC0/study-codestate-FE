import React from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
