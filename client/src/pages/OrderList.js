import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderEntry from '../components/OrderEntry';

export default function OrderList() {
  const state = useSelector(state => state.itemReducer);
  const dispatch = useDispatch();
  const {orders} = state;
  
  return (
    <div>
      {orders.map((order) => <OrderEntry order={order}/>)}
    </div>
  )
}
