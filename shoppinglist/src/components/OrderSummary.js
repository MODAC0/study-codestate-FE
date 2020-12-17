import React, { useState } from 'react'

export default function OrderSummary(props) {
    // 체크박스 상태와 수량 가져와서 sum값에 더해야함
    return (
        <div id="order-summary-container">
            주문 합계
            <div>총 주문 개수 : {props.quantity}개
            <hr />
            </div>
            <div> 합계 : { } 원</div>
        </div >
    )
}
