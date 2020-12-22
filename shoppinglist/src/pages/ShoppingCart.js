import React, { useState, useEffect, } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {
    let selectedItems = [
        { name: "박진영 베개", price: 9000, img: "https://dnvefa72aowie.cloudfront.net/origin/article/202007/4D9C2A0DFE8A7829956F2CB86C1E2C734F72300CE861AE7DBFB546942E6F9C63.jpg" },
        { name: "2020년 달력", price: 12000, img: "https://shop1.daumcdn.net/thumb/R500x500.q90/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FZ7719157100.jpg%3Fut%3D20191105101931" },
        { name: "개구리 안대", price: 9500, img: "https://image.rakuten.co.jp/kingmade/cabinet/tokyo/99532/gg2-91223.jpg" },
    ]

    const state = useSelector(state => state.itemReducer);
    const [checkedItems, setCheckedItems] = useState(state.selectedItems.map(item => {
        item.sum = item.price
        item.quantity = 1
        return item
    }))

    const [total, setTotal] = useState(checkedItems.reduce((acc, cur) => acc + Number(cur.sum), 0))
    const [totalQty, setTotalQty] = useState(state.selectedItems.length)

    const handleSingleCheck = (checked, item, quantity) => {
        if (checked) {
            let copy = [...checkedItems].filter((el) => el.name !== item.name)
            item.sum = quantity * item.price;
            item.quantity = quantity
            copy.push(item)
            setCheckedItems(copy);
        } else {
            setCheckedItems(checkedItems.filter((el) => el.name !== item.name));
        }
    };

    const handleAllCheck = (checked) => {
        if (checked) {
            const itemArray = [];

            state.selectedItems.forEach((el) => itemArray.push(el));
            setCheckedItems(itemArray);
        }
        else {
            setCheckedItems([]);
        }
    };

    useEffect(() => {
        setTotal(checkedItems.reduce((acc, cur) => acc + cur.sum, 0))
        setTotalQty(checkedItems.reduce((acc, cur) => acc + cur.quantity, 0))
        return () => {

        }
    }, [checkedItems])



    return (
        <div id="itemListBody">
            <div id="itemListTitle">장바구니</div>
            <span id="shopping-cart-select-all">
                <input type="checkbox" checked={
                    checkedItems.length === state.selectedItems.length
                        ? true
                        : false
                } onChange={(e) => handleAllCheck(e.target.checked)} ></input>
                <label >전체선택</label>
            </span>
            <div id="shopping-cart-container">

                <OrderSummary total={total} totalQty={totalQty} />
                {checkedItems.map((item) => <CartItem
                    handleSingleCheck={handleSingleCheck}
                    item={item}
                    checkedItems={checkedItems}
                />)}

            </div>
        </div >
    )
}
