import React from 'react';
import { addToCart } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';

function ItemListContainer(props) {
  const { handleToast } = props;
  const state = useSelector(state => state.itemReducer);
  const { items, cartItems } = state;
  const dispatch = useDispatch();

  const handleClick = (e, itemId) => {
    e.preventDefault();
    if (!cartItems.map((el) => el.itemId).includes(itemId)) {
      handleToast('success')
      dispatch(addToCart(itemId))
    }
    else {
      handleToast('danger')
    }
  }

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) =>
          <Item
            item={item}
            key={idx}
            handleClick={handleClick}
          />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
