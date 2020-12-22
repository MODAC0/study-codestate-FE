import React, { useState, useEffect } from 'react'
import './CartItem.css'


export default function CartItem({
    item,
    checkedItems,
    handleSingleCheck,
}) {
    //체크상태에 따라 합계에 quantity * price가 sum되게 만들어야함!
    const [quantity, setQuantity] = useState(1)
    const [checked, setChecked] = useState(true)

    useEffect(() => {
        handleSingleCheck(checked, item, quantity)
        return () => {

        }
    }, [quantity, checked])

    return (
        <li className="cart-item-body">
            <input type="checkbox" className="cart-item-checkbox" onChange={(e) => {
                setChecked(e.target.checked)
            }}
                checked={checkedItems.map(el => el.name).includes(item.name) ? true : false} ></input>
            <div className="cart-item-thumbnail">
                <img src={item.img} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-price">{item.price} 원</div>
            </div>
            <input type="number" min="1"
                className="cart-item-quantity"
                defaultValue={1}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}></input>
        </li >
    )
}
