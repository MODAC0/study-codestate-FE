import React, { useState, useEffect, } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {

    const state = useSelector(state => state.itemReducer);

    const [checkedItems, setCheckedItems] = useState(state.selectedItems.map(item => {
        item.sum = item.price
        item.quantity = 1
        return item
    }))
    console.log(state);
    const [total, setTotal] = useState(checkedItems.reduce((acc, cur) => acc + Number(cur.sum), 0))
    const [totalQty, setTotalQty] = useState(checkedItems.length)

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
