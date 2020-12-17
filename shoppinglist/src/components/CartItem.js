import React, { useState } from 'react'
import './CartItem.css'


export default function CartItem({ product, checked }) {
    const [quantity, setQuantity] = useState(1)
    return (
        <li className="cart-item-body">
            <input type="checkbox" className="cart-item-checkbox" checked={checked} ></input>
            <div className="cart-item-thumbnail">
                <img src={product.img} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-title">{product.name}</div>
                <div className="cart-item-price">{product.price} 원</div>
            </div>
            <input type="number" min="1" placeholder={quantity} className="cart-item-quantity" onChange={(e) => {
                setQuantity(e.target.value)
            }}></input>
        </li >
    )
}
