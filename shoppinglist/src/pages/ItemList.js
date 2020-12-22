import React from 'react';
// import Item from '../components/Item';
import { increment } from '../actions/index'
import { connect } from 'react-redux';
import '../components/Item.css';

function ItemList(props) {
    
    const items = props.items.map((item) => {
        return <div className="item">
                    <img className="itemImg"></img>
                    <span className="itemName">{item.name}</span>
                    <span className="price">{item.price}</span>
                    <div><button onClick={props.onIncrement}>장바구니 담기</button></div>
                </div> 
        
    })
    return (
        <div id="itemListBody">
            <div id="itemListTitle">쓸모없는 선물 모음</div>
            {items}
        </div>
    );
}

// 여기서 mapstateprops로 장바구니 클릭한거 state값 변경
const mapStateToProps = state => {
    return { 
        items: state.items
   };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment())
    }
}

ItemList = connect(mapStateToProps, mapDispatchToProps)(ItemList);


export default ItemList;