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
import Toast from './components/Toast';

function App() {
  const position = 'top-right';
  const [toastList, setToastList] = useState([]);
  let toastProperties = null;

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: '장바구니에 상품이 추가되었습니다.',
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: '이미 장바구니에 추가된 아이템입니다',
        }
        break;
      default:
        setToastList([]);
    }
    setToastList([...toastList, toastProperties]);
  }


  return (
    <Router>
      <div className="App">
        <Nav />
        {showToast &&
          <Toast
            toastList={toastList}
            position={position}
          />}
        <Switch>
          <Route exact={true} path="/">
            <ItemListContainer handleToast={showToast} />
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
