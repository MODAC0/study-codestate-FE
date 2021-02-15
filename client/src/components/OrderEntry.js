import React from 'react'

export default function Order({order}) {
  
  return (
    <div>
      {order.orderId}
      {order.orderDate}
      {order.totalPrice}
    </div>
  )
}
