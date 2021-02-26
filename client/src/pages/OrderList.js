import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setOrders } from '../actions';
import OrderEntry from '../components/OrderEntry';

const server = process.env.REACT_APP_SERVER_ADD;
const port = process.env.REACT_APP_INSTANCE_PORT;

console.log(process.env);
export default function OrderList () {
  const userId = 1;
  const state = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  const { orders } = state;
  console.log(orders);
  useEffect(() => {
    dispatch(
      fetchData(`http://${server}:${port}/users/${userId}/orders`, setOrders)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='item-list-body'>
      <div id='item-list-title'>주문내역</div>
      <div id='order-list-container'>
        {
          Object.keys(orders).length
            ? (Object.keys(orders).map((order, i) => (
              <OrderEntry
                id={order}
                key={i}
                order={orders[order][0].items}
                orderDate={orders[order][0].createdAt}
                totalPrice={orders[order][0].totalPrice}
              />
              ))
              )
            : (
              <div id='item-list-text'>주문내역이 없습니다.</div>
              )
}
      </div>
    </div>
  );
}
