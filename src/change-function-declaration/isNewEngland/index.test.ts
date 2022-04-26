import isNewEngland, { Customer } from "./index"

describe("calculatePrice works correctly.", () => {
  test.each<{
    aCustomer: Customer
    result: boolean
  }>([
    {
      aCustomer: { address: { state: "MA" } },
      result: true,
    },
    {
      aCustomer: { address: { state: "VT" } },
      result: true,
    },
    {
      aCustomer: { address: { state: "NY" } },
      result: false,
    },
  ])("For a driver with $inputNumber late deliveries.", ({ aCustomer, result }) => {
    expect(isNewEngland(aCustomer)).toEqual(result)
  })
})
