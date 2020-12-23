import React from 'react'
import './CartItem.css'

export default function CartItem({
    item,
    checkedItems,
    handleCheckChange,
    handleQuantityChange,
    handleDelete,
}) {
    return (
        <li className="cart-item-body">
            <input type="checkbox" className="cart-item-checkbox" onChange={(e) => {
                handleCheckChange(e.target.checked, item)
            }}
                checked={checkedItems.includes(item) ? true : false} ></input>
            <div className="cart-item-thumbnail">
                <img src={item.img} alt={item.name} />
            </div>
            <span>
                <button className="cart-item-delete" onClick={() => { handleDelete(item) }}>삭제</button>
                <input type="number" min="1"
                    className="cart-item-quantity"
                    defaultValue={item.quantity}
                    onChange={(e) => {
                        handleQuantityChange(Number(e.target.value), item)
                    }}></input>
            </span>
            <div className="cart-item-info">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-price">{item.price} 원</div>
            </div>
        </li >
    )
}
