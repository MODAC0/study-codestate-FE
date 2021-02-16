import React from 'react'

export default function Order({order}) {
  
  return (
    <div>
      <div>
      {order.id}
      </div>
      <div>
      {order.created_at}
      </div>
      <div>
      {order.total_price}
      </div>
    </div>
  )
}
