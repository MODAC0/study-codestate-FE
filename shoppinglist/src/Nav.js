import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import logo from './logo.png';
import { Link, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';

function Nav(props) {
    return (
        <div id="navbody">
            <span id="title"><img id="logo" src={logo} /><span id="name">Shoppingstates</span></span>
            <div id="menu">
                <Link to="/">
                    상품리스트
                </Link>
                <Link to="/shoppingcart">
                    장바구니
                    <span id="itemCount">{props.value}</span>
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        value: state.value,
    }
}

Nav = connect(mapStateToProps)(Nav);

export default Nav;
