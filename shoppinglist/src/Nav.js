import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import logo from './logo.png';

function Nav(props) {
    return (
        <div id="navbody">
            <span id="title"><img id="logo" src={logo}/><span id="name">Shoppingstates</span></span>
            <div id="menu">
                <a href="/">상품리스트</a>
                <a href="/shoppingcart">장바구니
                    <span id="itemCount">{props.value}</span>
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

Nav = connect(mapStateToProps)(Nav);

export default Nav;
