import React from 'react';
import Nav from '../src/Nav';
import ItemList from '../src/pages/ItemList';
import store from '../src/store/store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Nav />
            <ItemList />
          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
