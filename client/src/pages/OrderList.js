import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setOrders } from '../actions';
import OrderEntry from '../components/OrderEntry';

export default function OrderList() {
  const state = useSelector(state => state.itemReducer);
  const dispatch = useDispatch();
  const { orders } = state;
  const userId = 1;
  
  useEffect(() => {
   dispatch(fetchData(`http://localhost:4000/users/${userId}/orders`, setOrders))
   console.log('working');
  }, [])
  /*orders를 order_id별로 묶어야함 
  [{},{},{}] => 
  {
    1:[{},{}],
    2:[{}]
  }
    */
  console.log(orders);
  return (
    <div id="item-list-body">
      <div id="item-list-title">주문내역</div>
      {Object.keys(orders).length? Object.keys(orders).map((order) => <OrderEntry 
        id={order} 
        order={orders[order]} 
        orderDate={orders[order][0].created_at} 
        totalPrice={orders[order][0].total_price}/>) :
      <div id="item-list-text">
        주문내역이 없습니다.
      </div>
      }
    </div>
  )
}
