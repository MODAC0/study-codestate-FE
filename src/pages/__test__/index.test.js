import * as actions from "../../actions";
import * as reactRedux from 'react-redux';
import { shallow, configure, mount } from "enzyme";
import CartItem from "../../components/CartItem";
import { fireEvent, render } from "@testing-library/react";
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
    const cartItemElement1 = utils.queryByText("박진영 쿠션")
    const cartItemElement2 = utils.queryByText("2020년 달력")
    const cartItemElement3 = utils.queryByText("칼라 립스틱")
    const cartItemElement4 = utils.queryByText("개구리 안대")
    expect(cartItemElement1).toBeInTheDocument()
    expect(cartItemElement2).toBeInTheDocument()
    expect(cartItemElement3).toBeInTheDocument()
    expect(cartItemElement4).not.toBeInTheDocument()
  })

  test('REMOVE_FROM_CART 액션에 따라 ShoppingCart가 렌더되어야 합니다.', () => {
    const target = utils.getAllByText("삭제")[0]

    fireEvent.click(target)
    const cartItemElement1 = utils.queryByText("박진영 쿠션")
    expect(cartItemElement1).not.toBeInTheDocument()

    //test('It should keep a $ in front of the input', () => {
    //  const { input } = setup()
    //  fireEvent.change(input, { target: { value: '23' } })
    //  expect(input.value).toBe('$23')
  })
  test('SET_QUANTITY 액션에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const target = utils.getByDisplayValue("7")
    const totalPrice = utils.getByText("56300 원")
    const totalQtY = utils.getByText("10 개")
    fireEvent.change(target, { target: { value: 23 } })
    expect(totalPrice.textContent).toBe("102700 원")
    expect(totalQtY.textContent).toBe("26 개")
  })
  test('Checkbox의 상태에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const { queryByText } = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)
  })
});
