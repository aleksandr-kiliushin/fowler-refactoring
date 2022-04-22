import printOwing from "./index"
import invoice from "./index.json"

describe("Extract function printOwing", () => {
  test("Logs into console correctly.", () => {
    const spiedConsoleLog = jest.spyOn(console, "log")

    printOwing(invoice)

    expect(spiedConsoleLog).toHaveBeenCalledTimes(6)
    expect(spiedConsoleLog).toHaveBeenCalledWith("***********************")
    expect(spiedConsoleLog).toHaveBeenCalledWith("**** Customer owes ****")
    expect(spiedConsoleLog).toHaveBeenCalledWith("***********************")
    expect(spiedConsoleLog).toHaveBeenCalledWith("Name: John Doe.")
    expect(spiedConsoleLog).toHaveBeenCalledWith("Amount: 600.")
    expect(spiedConsoleLog).toHaveBeenCalledWith("Due: 22/05/2022.")
  })
})
