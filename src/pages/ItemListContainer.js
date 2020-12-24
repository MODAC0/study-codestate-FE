import React from 'react';
import { SELECT_ITEM } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';

function ItemListContainer() {

	const state = useSelector(state => state.itemReducer);
	const dispatch = useDispatch();

	function handleClick(e, item) {
		e.preventDefault();
		item.sum = item.price
		item.quantity = 1
		dispatch({ type: SELECT_ITEM, data: item })
	}

	return (
		<div id="item-list-container">
			<div id="item-list-body">
				<div id="item-list-title">쓸모없는 선물 모음</div>
				{state.items.map((item) => <Item item={item} handleClick={handleClick} />)}
			</div>
		</div>
	);
}

export default ItemListContainer;
