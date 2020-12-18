import React, { useState } from 'react'

export default function OrderSummary({ checkedItem, products }) {


    return (
        <div id="order-summary-container">
            주문 합계
            <div>총 주문 개수 : {checkedItem.length}개
            <hr />
            </div>
            <div> 합계 : {checkedItem.length ? products.filter((el) => {
                for (let i = 0; i < checkedItem.length; i++) {
                    if (checkedItem[i] === el.name) {
                        return el
                    }
                }
            }).reduce((acc, cur) => {
                if (cur !== undefined)
                    return acc + Number(cur.price)
            }, 0) : 0} 원</div>
        </div >
    )
}
