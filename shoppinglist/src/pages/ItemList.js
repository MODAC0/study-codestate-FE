import React, { useEffect, useState } from 'react';
import { SELECT_ITEM, selectItem } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import './ItemList.css';

function ItemListContainer() {

    const state = useSelector(state => state.itemReducer);
    const [selectedItems, setSelectedItems] = useState(state.selectedItems)
    const dispatch = useDispatch();


    function handleClick(e, item) {
        e.preventDefault();
        // ! 클릭한 아이템만 selectedItems 장바구니에 추가하기
        console.log(e.target.parentElement)
        dispatch({ type: SELECT_ITEM, data: item })
        console.log(selectedItems)
        console.log(state.selectedItems)

    }


    const items = state.items.map((item) => {
        return <div key={item.id} className="item">
            <img className="itemImg" src={item.img}></img>
            <span className="itemName">{item.name}</span>
            <span className="price">{item.price}</span>
            <button onClick={(e) => handleClick(e, item)}>
                장바구니 담기
                    </button>
        </div>

    })

    return (
        <div id="itemListBody">
            <div id="itemListTitle">쓸모없는 선물 모음</div>
            {items}
        </div>
    );
}

export default ItemListContainer;
