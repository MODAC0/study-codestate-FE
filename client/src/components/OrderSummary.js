import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchData, notify, removeFromCart, setOrders } from '../actions';
import dotenv from 'dotenv';

dotenv.config();

const server = process.env.REACT_APP_SERVER_ADD;
const port = process.env.REACT_APP_INSTANCE_PORT;

export default function OrderSummary ({ totalQty, total, cartItems }) {
  const userId = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOrder = (orders, totalPrice) => {
    const payload = JSON.stringify({
      orders,
      totalPrice
    });

    return fetch(`http://${server}:${port}/users/${userId}/orders/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
      .then(orders.forEach((el) => dispatch(removeFromCart(el.itemId))))
      .then(dispatch(notify('주문이 완료되었습니다.')))
      .then(
        dispatch(
          fetchData(`http://${server}:${port}/users/${userId}/orders`, setOrders)
        )
      )
      .then(() => {
        history.push('/orderlist');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id='order-summary-box'>
      <div id='order-summary-container'>
        <h4>주문 합계</h4>
        <div id='order-summary'>
          총 아이템 개수 :{' '}
          <span className='order-summary-text'>{totalQty} 개</span>
          <hr />
          <div id='order-summary-total'>
            합계 : <span className='order-summary-text'>{total} 원</span>
          </div>
        </div>
      </div>
      <button id='order-item-btn' onClick={() => handleOrder(cartItems, total)}>
        <h2>{totalQty}개의 상품 구매하기</h2>
      </button>
    </section>
  );
}
