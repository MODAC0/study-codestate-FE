import React from 'react';
import { ADD_TO_CART } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';

function ItemListContainer() {

	const state = useSelector(state => state.itemReducer);
	const dispatch = useDispatch();

	function handleClick(e, itemId) {
		e.preventDefault();

		if (!state.cartItems.map((el) => el.itemId).includes(itemId)) {
			dispatch({
				type: ADD_TO_CART,
				payload: { itemId, quantity: 1 }
			})
		}
		else {
			alert('이미 추가된 상품입니다.')
		}
	}

	return (
		<div id="item-list-container">
			<div id="item-list-body">
				<div id="item-list-title">쓸모없는 선물 모음</div>
				{state.items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
			</div>
		</div>
	);
}

export default ItemListContainer;
