import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchData, removeFromCart, setOrders } from '../actions';

export default function OrderSummary({ totalQty, total, orderItems }) {
  const userId = 1;
  const dispatch = useDispatch();
  const handleOrder = (orders, totalPrice) => {
    dispatch(fetchData(`http://localhost:4000/orders/new`, setOrders, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        orders, 
        totalPrice
      }), 
    })
    )
    orders.forEach((el) => dispatch(removeFromCart(el.itemId)))
  }

  return (
    <section id="order-summary-box">
      <div id="order-summary-container">
        <h4>주문 합계</h4>
        <div id="order-summary">
          총 아이템 개수 : <span className="order-summary-text">{totalQty} 개</span>
          <hr></hr>
          <div id="order-summary-total">
            합계 : <span className="order-summary-text">{total} 원</span>
          </div>
        </div>
      </div >
      <button id="order-item-btn" onClick={() => handleOrder(orderItems, total)}><h2>{totalQty}개의 상품 구매하기</h2></button>
    </section>
  )
}
