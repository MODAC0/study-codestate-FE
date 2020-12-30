import React from 'react'
import { useSelector } from 'react-redux';

export default function CartItem({
	idx,
	item,
	checkedItems,
	handleCheckChange,
	handleQuantityChange,
	handleDelete,
}) {
	const state = useSelector(state => state.itemReducer);
	const cartItem = state.cartItems.filter(el => el.itemId === item.id)[0]
	const itemTotal = cartItem.quantity * item.price

	return (
		<li className="cart-item-body">
			<input
				type="checkbox"
				className="cart-item-checkbox"
				onChange={(e) => {
					handleCheckChange(e.target.checked, idx)
				}}
				checked={checkedItems.includes(idx) ? true : false} >
			</input>
			<div className="cart-item-thumbnail">
				<img src={item.img} alt={item.name} />
			</div>
			<span>
				<button className="cart-item-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
				<input
					type="number"
					min={1}
					className="cart-item-quantity"
					defaultValue={cartItem.quantity}
					onChange={(e) => { handleQuantityChange(Number(e.target.value), item.id) }}>
				</input>
			</span>
			<div className="cart-item-info">
				<div className="cart-item-title">{item.name}</div>
				<div className="cart-item-price">{item.price} 원</div>
			</div>
		</li >
	)
}
