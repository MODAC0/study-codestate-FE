import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setOrders } from '../actions';
import OrderEntry from '../components/OrderEntry';

export default function OrderList() {
  const state = useSelector(state => state.itemReducer);
  const dispatch = useDispatch();
  const {orders} = state;
  const userId = 1;

  useEffect(() => {
   dispatch(fetchData(`http://localhost:4000/users/${userId}/orders`, setOrders))
  }, [])
  console.log(orders);
  return (
    <div>
      {orders.map((order) => <OrderEntry order={order}/>)}
    </div>
  )
}
