import * as actions from "../../actions";
import * as reactRedux from 'react-redux';
import { shallow, configure, mount } from "enzyme";
import CartItem from "../../components/CartItem";
import { fireEvent, render, screen, } from "@testing-library/react";
import App from "../../App";
import store from "../../store/store"
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import ItemListContainer from "../ItemListContainer"
import { initialState } from "../../reducers/initialState";
import ShoppingCart from "../ShoppingCart";
import OrderSummary from "../../components/OrderSummary";
configure({ adapter: new Adapter() });

describe("Shopping Cart components", () => {
  let utils

  beforeEach(() => {
    utils = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)
  })

  test('ShoppingCart에 cartItems가 렌더되어야합니다.', () => {
    const cartItemElement1 = utils.queryByText("노른자 분리기")
    const cartItemElement2 = utils.queryByText("2020년 달력")
    const cartItemElement3 = utils.queryByText("칼라 립스틱")
    const cartItemElement4 = utils.queryByText("개구리 안대")
    expect(cartItemElement1).toBeInTheDocument()
    expect(cartItemElement2).toBeInTheDocument()
    expect(cartItemElement3).toBeInTheDocument()
    expect(cartItemElement4).not.toBeInTheDocument()
  })

  test('ADD_TO_CART 액션에 따라 ShoppingCart가 렌더되어야 합니다.', () => {
    const itemListUtils = render(
      <reactRedux.Provider store={store}>
        <ItemListContainer />
      </reactRedux.Provider>
    )
    const target = itemListUtils.getAllByText("장바구니 담기")[2]
    fireEvent.click(target)
    expect(utils.getByTestId("개구리 안대")).toBeInTheDocument()
  })

  test('REMOVE_FROM_CART 액션에 따라 ShoppingCart가 렌더되어야 합니다.', () => {
    const target = utils.getAllByText("삭제")[0]
    fireEvent.click(target)
    const cartItemElement1 = utils.queryByText("노른자 분리기")
    expect(cartItemElement1).not.toBeInTheDocument()
  })

  test('SET_QUANTITY 액션에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const target = utils.getByDisplayValue("7")
    const totalPrice = utils.getByText("59200 원")
    const totalQtY = utils.getByText("11 개")
    fireEvent.change(target, { target: { value: 23 } })
    expect(totalPrice.textContent).toBe("105600 원")
    expect(totalQtY.textContent).toBe("27 개")
  })

  test('Checkbox의 상태에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const target = utils.getAllByRole('checkbox')[1]
    const totalPrice = utils.getByText("105600 원")
    const totalQtY = utils.getByText("27 개")
    fireEvent.click(target)
    expect(totalPrice.textContent).toBe("69600 원")
    expect(totalQtY.textContent).toBe("24 개")
  })
});
