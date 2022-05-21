import { getCustomer } from "./index"

describe("Customer and discount", () => {
  test("A customer discount is read correctly.", () => {
    expect(getCustomer().discountRate).toEqual(0.14)
    getCustomer().becomePreffered()
    expect(getCustomer().discountRate).toEqual(0.17)
  })
})
