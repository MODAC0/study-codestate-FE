import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART, SET_QUANTITY } from '../actions';
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {

	const state = useSelector(state => state.itemReducer);
	const dispatch = useDispatch();

	const [cartItems, setCartItems] = useState(state.items.filter((item) => state.cartItems.map((el) => el.itemId).indexOf(item.id) !== -1))
	const [checkedItems, setCheckedItems] = useState(state.cartItems.map((cartItem) => cartItem.itemId))
	//const [total, setTotal] = useState(checkedItems.reduce((acc, cur) => acc + Number(cur.total), 0))
	const [totalQty, setTotalQty] = useState(state.cartItems.filter((item) => checkedItems.indexOf(item.itemId) > -1).reduce((acc, cur) => acc + cur.quantity, 0))

	const handleCheckChange = (checked, itemId) => {
		if (checked) {
			setCheckedItems([...checkedItems, itemId]);
			console.log(checkedItems);
		}
		else {
			setCheckedItems(checkedItems.filter((id) => id !== itemId));
			console.log(checkedItems);
		}
	};

	const handleAllCheck = (checked) => {
		if (checked) {
			setCheckedItems(state.cartItems.map((item) => item.id))
		}
		else {
			setCheckedItems([]);
		}
	};

	const handleQuantityChange = (quantity, itemId) => {
		dispatch({
			type: SET_QUANTITY,
			payload: {
				itemId,
				quantity: quantity
			}
		});
	}

	const handleDelete = (itemId) => {
		setCheckedItems(checkedItems.filter((id) => id !== itemId))
		dispatch({
			type: REMOVE_FROM_CART,
			payload: {
				itemId
			}
		})
	}

	useEffect(() => {
		setCartItems(state.items.filter((item) => state.cartItems.map((el) => el.itemId).indexOf(item.id) !== -1))
		//setTotal(checkedItems.reduce((acc, cur) => acc + cur.total, 0))
		setTotalQty(state.cartItems.filter((item) => checkedItems.indexOf(item.itemId) > -1).reduce((acc, cur) => acc + cur.quantity, 0))
	}, [checkedItems, state.cartItems])

	return (
		<div id="item-list-container">
			<div id="item-list-body">
				<div id="item-list-title">장바구니</div>
				<span id="shopping-cart-select-all">
					<input
						type="checkbox"
						checked={
							checkedItems.length === state.cartItems.length ? true : false
						}
						onChange={(e) => handleAllCheck(e.target.checked)} >
					</input>
					<label >전체선택</label>
				</span>
				<div id="shopping-cart-container">
					{!state.cartItems.length ? (
						<div id="item-list-text">
							장바구니에 아이템이 없습니다.
						</div>
					) : (
							<div id="cart-item-list">
								{cartItems.map((item, idx) =>
									<CartItem
										key={idx}
										handleCheckChange={handleCheckChange}
										handleQuantityChange={handleQuantityChange}
										handleDelete={handleDelete}
										item={item}
										checkedItems={checkedItems}
									/>)}
							</div>
						)}
					<div>
						<OrderSummary /*total={total}*/ totalQty={totalQty} />
					</div>
				</div>
			</div >
		</div>
	)
}
