import invoices from "../data/invoices.json"
import plays from "../data/plays.json"

import statement from "./index"

describe("Statement function.", () => {
  test("Result should be equial expected the hand-checked value..", () => {
    // expect(1).toBe(1)
    expect(statement(invoices, plays)).toEqual(`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00.
You earned 47 credits.`)
  })
})
