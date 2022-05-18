import { compareUsage, getCustomers } from "./index"

describe("Customers", () => {
  test("Customers usages are queried and updated properly.", () => {
    expect(getCustomers().getUsage({ customerId: 1920, month: 1, year: 2016 })).toEqual(50)
    getCustomers().setUsage({ amount: 58, customerId: 1920, month: 1, year: 2016 })

    // Throws an error because a proxy immutable object is returned by `rawData` getter.
    // getCustomers().rawData[1920].usages[2016][1] = 58

    expect(getCustomers().getUsage({ customerId: 1920, month: 1, year: 2016 })).toEqual(58)

    const usageComparison = compareUsage({ customerId: 1920, laterYear: 2016, month: 1 })
    expect(usageComparison).toEqual({ change: -12, laterAmount: 58 })
  })
})
