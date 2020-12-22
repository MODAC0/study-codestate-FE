import React, { useState, useEffect, } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart() {

    const state = useSelector(state => state.itemReducer);

    const [checkedItems, setCheckedItems] = useState([...state.selectedItems])
    const [total, setTotal] = useState(checkedItems.reduce((acc, cur) => acc + Number(cur.sum), 0))
    const [totalQty, setTotalQty] = useState(checkedItems.length)

    const handleSingleCheck = (checked, item, quantity) => {
        if (checked) {
            item.sum = quantity * item.price;
            item.quantity = quantity //Object.assign?

            if (!checkedItems.includes(item)) {
                setCheckedItems([...checkedItems, item])
            }
            else {
                let copyArray = [...checkedItems]

                for (let i = 0; i < copyArray.length; i++) {
                    if (copyArray[i].name === item.name) {
                        copyArray.splice(i, 1, item);
                    }
                }
                setCheckedItems(copyArray);
            }
        }
        else {
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
        <div id="item-list-body">
            <div id="item-list-title">장바구니</div>
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
                {state.selectedItems.map((item) => <CartItem
                    handleSingleCheck={handleSingleCheck}
                    item={item}
                    checkedItems={checkedItems}
                />)}

            </div>
        </div >
    )
}
