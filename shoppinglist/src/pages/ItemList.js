import React, { useEffect, useState } from 'react';
import { SELECT_ITEM, selectItem } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import './ItemList.css';

function ItemListContainer() {

    const state = useSelector(state => state.itemReducer);
    const [selectedItems, setSelectedItems] = useState([])

    // console.log(state.selectedItems)

    function handleClick(e) {
        e.preventDefault();
        // ! 클릭한 아이템만 selectedItems 장바구니에 추가하기
        console.log(e.target.parentElement)
        setSelectedItems([...selectedItems, ])

        dispatch({ type: SELECT_ITEM })
    }

    const dispatch = useDispatch();

    const items = state.items.map((item) => {
        return <div key={item.id} className="item">
                    <img className="itemImg" src={item.img}></img>
                    <span className="itemName">{item.name}</span>
                    <span className="price">{item.price}</span>
                    <button onClick={handleClick}>
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