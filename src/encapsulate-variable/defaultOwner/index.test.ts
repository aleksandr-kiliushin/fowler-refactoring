import { getDefaultOwner, setDefaultOwner } from "./index"

describe("defaultOwner is returned and modified properly.", () => {
  test("Gets and mutates a default owner correctly.", () => {
    const defaultOwner = getDefaultOwner()
    expect(defaultOwner).toEqual({ name: "Martin", surname: "Fowler" })
    defaultOwner.surname = "Beck"
    expect(defaultOwner).toEqual({ name: "Martin", surname: "Beck" })
  })
})
