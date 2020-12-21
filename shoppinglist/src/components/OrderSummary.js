import React, { useState } from 'react'

export default function OrderSummary({ checkedItem, totalQty, total }) {
    return (
        <div id="order-summary-container">
            주문 합계
            <div>총 주문 개수 : {totalQty}개
            <hr />
            </div>
            <div> 합계 : {total} 원</div>
        </div >
    )
}
