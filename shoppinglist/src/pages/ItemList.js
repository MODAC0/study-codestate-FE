import React from 'react';
import Item from '../components/Item';

function ItemList(props) {
    return (
        <div id="itemListBody">
            <div id="itemListTitle">쓸모없는 선물 모음</div>
            <Item />
            {/* item map으로 뿌려주기 */}
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

        </div>
    );
}

export default ItemList;