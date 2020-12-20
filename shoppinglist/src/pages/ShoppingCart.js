import React, { useState, useEffect } from 'react'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {
    let products = [
        { name: "박진영 베개", price: 9000, img: "https://dnvefa72aowie.cloudfront.net/origin/article/202007/4D9C2A0DFE8A7829956F2CB86C1E2C734F72300CE861AE7DBFB546942E6F9C63.jpg" },
        { name: "2020년 달력", price: 12000, img: "https://shop1.daumcdn.net/thumb/R500x500.q90/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FZ7719157100.jpg%3Fut%3D20191105101931" },
        { name: "개구리 안대", price: 9500, img: "https://image.rakuten.co.jp/kingmade/cabinet/tokyo/99532/gg2-91223.jpg" },
    ]
    const [checkedItem, setCheckedItem] = useState(products.map(product => {
        product.sum = product.price
        product.quantity = 1
        return product
    }))
    const [total, setTotal] = useState(checkedItem.reduce((acc, cur) => acc + Number(cur.sum), 0))
    const [totalQty, setTotalQty] = useState(products.length)
    // 체크박스 전체 단일 개체 선택
    const handleSingleCheck = (checked, product, quantity) => {
        if (checked) {
            let copy = [...checkedItem].filter((el) => el.name !== product.name)
            product.sum = quantity * product.price;
            product.quantity = quantity
            copy.push(product)
            setCheckedItem(copy);
        } else {
            setCheckedItem(checkedItem.filter((el) => el.name !== product.name));
        }
    };


    useEffect(() => {
        setTotal(checkedItem.reduce((acc, cur) => acc + cur.sum, 0))
        setTotalQty(checkedItem.reduce((acc, cur) => acc + cur.quantity, 0))
        return () => {

        }
    }, [checkedItem])

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if (checked) {
            const itemArray = [];
            // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
            // 전체 체크 박스 체크
            products.forEach((el) => itemArray.push(el));
            setCheckedItem(itemArray);
        }

        // 반대의 경우 전체 체크 박스 체크 삭제
        else {
            setCheckedItem([]);
        }
    };

    return (
        <div id="itemListBody">
            <div id="itemListTitle">장바구니</div>
            <span id="shopping-cart-select-all">
                <input type="checkbox" checked={
                    checkedItem.length === products.length
                        ? true
                        : false
                } onChange={(e) => handleAllCheck(e.target.checked)} ></input>
                <label >전체선택</label>
            </span>
            <div id="shopping-cart-container">

                <OrderSummary products={products} checkedItem={checkedItem} total={total} totalQty={totalQty} />
                {products.map((product) => <CartItem
                    handleSingleCheck={handleSingleCheck}
                    product={product}
                    checkedItem={checkedItem}
                />)}

            </div>
        </div >
    )
}
