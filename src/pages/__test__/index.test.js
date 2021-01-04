import * as actions from "../../actions";
import * as reactRedux from 'react-redux';
import { shallow } from "enzyme";
import CartItem from "../../components/CartItem";
import { fireEvent, render } from "@testing-library/react";
import App from "../../App";
import store from "../../store/store"
import React from "react"
import '@testing-library/jest-dom/extend-expect';

describe("Shopping Cart components", () => {



  test('test', () => {
    const { container } = render(
      <reactRedux.Provider store={store}>
        <App />
      </reactRedux.Provider>)
    console.log(container);

    expect(container.getElementsByClassName('cart-item-title').textContent).toBe(3)
  })
});


