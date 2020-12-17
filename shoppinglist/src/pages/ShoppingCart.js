import React, { useState, useEffect } from 'react'
import CartItem from '../components/CartItem'

export default function ShoppingCart() {
    let products = [
        { name: "박진영 베개", price: 9000, img: "https://dnvefa72aowie.cloudfront.net/origin/article/202007/4D9C2A0DFE8A7829956F2CB86C1E2C734F72300CE861AE7DBFB546942E6F9C63.jpg" },
        { name: "2020년 달력", price: 12000, img: "https://shop1.daumcdn.net/thumb/R500x500.q90/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FZ7719157100.jpg%3Fut%3D20191105101931" },
        { name: "개구리 안대", price: 9500, img: "https://image.rakuten.co.jp/kingmade/cabinet/tokyo/99532/gg2-91223.jpg" },
    ]
    const [checked, isChecked] = useState(true)

    return (
        <div id="itemListBody">
            <div id="itemListTitle">장바구니</div>
            <input type="checkbox" defaultChecked={checked} onClick={() => isChecked(!checked)} ></input>
            <label >전체선택</label>
            <div>
                {products.map((product) => <CartItem product={product} checked={checked} />)}
            </div>
        </div >
    )
}
