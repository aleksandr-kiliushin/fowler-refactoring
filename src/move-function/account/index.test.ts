import { getAccount1, getAccount2 } from "./index"

describe("trackSummary", () => {
  test("Calculates correctly.", () => {
    expect(getAccount1().bankCharge).toEqual<number>(127.5)
    expect(getAccount1().overdraftCharge).toEqual<number>(14.25)
    expect(getAccount2().bankCharge).toEqual<number>(325.5)
    expect(getAccount2().overdraftCharge).toEqual<number>(5.25)
  })
})
