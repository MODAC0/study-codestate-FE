import React, { useState, useEffect } from 'react'
import './CartItem.css'


export default function CartItem({
    product,
    index,
    checkedItem,
    setCheckedItem,
    handleSingleCheck,
}) {
    //체크상태에 따라 합계에 quantity * price가 sum되게 만들어야함!
    const [quantity, setQuantity] = useState(1)
    const [sum, setSum] = useState(product.price * quantity)
    console.log(sum)
    return (
        <li className="cart-item-body">
            <input type="checkbox" className="cart-item-checkbox" onChange={(e) => handleSingleCheck(e.target.checked, product.name)}
                checked={checkedItem.includes(product.name) ? true : false} ></input>
            <div className="cart-item-thumbnail">
                <img src={product.img} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-title">{product.name}</div>
                <div className="cart-item-price">{product.price} 원</div>
            </div>
            <input type="number" min="1"
                className="cart-item-quantity"
                defaultValue={1}
                onChange={(e) => {
                    setQuantity(e.target.value);
                    setSum(quantity * product.price)
                }}></input>
        </li >
    )
}
