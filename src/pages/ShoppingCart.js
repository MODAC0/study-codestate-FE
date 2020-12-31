import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, setQuantity } from '../actions';
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {

  const state = useSelector(state => state.itemReducer);
  const { cartItems, items } = state
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState(cartItems.map((el, idx) => idx))

  const handleCheckChange = (checked, idx) => {
    if (checked) {
      setCheckedItems([...checkedItems, idx]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== idx));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(cartItems.map((item, idx) => idx))
    }
    else {
      setCheckedItems([]);
    }
  };

  const handleQuantityChange = (quantity, itemId) => {
    dispatch(setQuantity(itemId, quantity));
  }

  const handleDelete = (itemId) => {
    setCheckedItems(checkedItems.filter((id) => id !== itemId))
    dispatch(removeFromCart(itemId))
  }

  const getTotal = () => {
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < checkedItems.length; i++) {
      if (cartItems[checkedItems[i]]) {
        let quantity = cartItems[checkedItems[i]].quantity
        let price = items.filter((el) => el.id === cartItems[checkedItems[i]].itemId)[0].price

        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity
      }
    }
    return total
  }

  const renderItems = items.filter((el) => cartItems.map((el) => el.itemId).indexOf(el.id) > -1)
  const total = getTotal()

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">장바구니</div>
        <span id="shopping-cart-select-all">
          <input
            type="checkbox"
            checked={
              checkedItems.length === state.cartItems.length ? true : false
            }
            onChange={(e) => handleAllCheck(e.target.checked)} >
          </input>
          <label >전체선택</label>
        </span>
        <div id="shopping-cart-container">
          {!state.cartItems.length ? (
            <div id="item-list-text">
              장바구니에 아이템이 없습니다.
            </div>
          ) : (
              <div id="cart-item-list">
                {renderItems.map((item, idx) =>
                  <CartItem
                    key={idx}
                    idx={idx}
                    handleCheckChange={handleCheckChange}
                    handleQuantityChange={handleQuantityChange}
                    handleDelete={handleDelete}
                    item={item}
                    checkedItems={checkedItems}
                  />)}
              </div>
            )}
          <div>
            <OrderSummary total={total.price} totalQty={total.quantity} />
          </div>
        </div>
      </div >
    </div>
  )
}
