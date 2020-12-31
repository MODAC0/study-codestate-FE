import * as actions from "../index";

describe("Shopping Cart actions", () => {
  it("removeFromCart는 REMOVE_FROM_CART 액션을 생성해야 합니다", () => {
    expect(actions.removeFromCart()).toEqual({
      type: "REMOVE_FROM_CART",
      itemId,
    });
  });


});
