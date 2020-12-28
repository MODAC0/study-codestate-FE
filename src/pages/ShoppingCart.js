import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ITEM, SET_QUANTITY } from '../actions';
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {

	const state = useSelector(state => state.itemReducer);
	const dispatch = useDispatch();

	const [checkedItems, setCheckedItems] = useState([...state.selectedItems])
	const [total, setTotal] = useState(checkedItems.reduce((acc, cur) => acc + Number(cur.sum), 0))
	const [totalQty, setTotalQty] = useState(checkedItems.length)

	const handleCheckChange = (checked, item) => {
		if (checked) {
			setCheckedItems([...checkedItems, item]);
		}
		else {
			setCheckedItems(checkedItems.filter((el) => el.name !== item.name));
		}
	};

	const handleAllCheck = (checked) => {
		if (checked) {
			setCheckedItems([...state.selectedItems]);
		}
		else {
			setCheckedItems([]);
		}
	};

	const handleQuantityChange = (quantity, item) => {
		let selectedItem = Object.assign(item, {
			quantity: quantity,
			sum: item.price * quantity
		})
		dispatch({
			type: SET_QUANTITY,
			data: selectedItem
		});
	}

	const handleDelete = (item) => {
		setCheckedItems(checkedItems.filter((el) => el.id !== item.id))
		dispatch({
			type: DELETE_ITEM,
			data: item
		})
	}

	useEffect(() => {
		setTotal(checkedItems.reduce((acc, cur) => acc + cur.sum, 0))
		setTotalQty(checkedItems.reduce((acc, cur) => acc + cur.quantity, 0))
	}, [checkedItems, state.selectedItems])

	return (
		<div id="item-list-container">
			<div id="item-list-body">
				<div id="item-list-title">장바구니</div>
				<span id="shopping-cart-select-all">
					<input
						type="checkbox"
						checked={
							checkedItems.length === state.selectedItems.length
								? true
								: false
						}
						onChange={(e) => handleAllCheck(e.target.checked)} >
					</input>
					<label >전체선택</label>
				</span>
				<div id="shopping-cart-container">
					{!state.selectedItems.length ? (
						<div id="item-list-text">
							장바구니에 아이템이 없습니다.
						</div>
					) : (
							<div id="cart-item-list">
								{state.selectedItems.map((item) =>
									<CartItem
										handleCheckChange={handleCheckChange}
										handleQuantityChange={handleQuantityChange}
										handleDelete={handleDelete}
										item={item}
										checkedItems={checkedItems}
									/>)}
							</div>
						)}
					<div>
						<OrderSummary total={total} totalQty={totalQty} />
					</div>
				</div>
			</div >
		</div>
	)
}
