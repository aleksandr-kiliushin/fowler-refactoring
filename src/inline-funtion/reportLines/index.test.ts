import reportLines, { Customer, Line } from "./index"

describe("getDriverRating work correctly", () => {
  test.each<{
    customer: Customer
    outputLines: Line[]
  }>([
    {
      customer: { location: "Moscow", name: "Petr" },
      outputLines: [
        ["location", "Moscow"],
        ["name", "Petr"],
      ],
    },
    {
      customer: { location: "", name: "" },
      outputLines: [
        ["location", ""],
        ["name", ""],
      ],
    },
    {
      customer: { location: "Tokyo", name: "Yuo" },
      outputLines: [
        ["location", "Tokyo"],
        ["name", "Yuo"],
      ],
    },
  ])("For a driver with $inputNumber late deliveries.", ({ customer, outputLines }) => {
    expect(reportLines(customer)).toEqual(outputLines)
  })
  test("For a driver with 0 late deliveries.", () => {})
})
