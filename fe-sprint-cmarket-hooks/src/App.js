import React, { useState } from "react";
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import "./App.css";
import "./variables.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import { initialState } from "./assets/state";

function App() {
  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);
  // todo 장바구니 내에서 각 아이템 개수를 변경할 수 있도록 구현하세요.
  return (
    <Router>
      <Nav count={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              items={items}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              setCartItems={setCartItems}
              items={items}
            />
          }
        />
      </Routes>
      <img
        id="logo_foot"
        src={`${process.env.PUBLIC_URL}/codestates-logo.png`}
        alt="logo_foot"
      />
    </Router>
  );
}

export default App;
