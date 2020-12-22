import React from 'react';
import { connect } from 'react-redux';
import './Item.css';
import { increment } from '../actions/index'

function Item(props) {

    return (
        <div className="item">
            <img className="item-img"></img>
            <span className="item-name">박진영 베개</span>
            <span className="item-price">9,900원</span>
            <div><button onClick={props.onIncrement}>장바구니 담기</button></div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment())
    }
}

Item = connect(null, mapDispatchToProps)(Item);

export default Item;