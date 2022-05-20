import { getPerson, IPerson } from "./index"

describe("A Person and their telephone number.", () => {
  test("A person's telephone number is read and set correctly.", () => {
    expect(getPerson().name).toEqual<IPerson["name"]>("John")
    expect(getPerson().areaCode).toEqual<IPerson["areaCode"]>("+7 (495)")
    expect(getPerson().officeNumber).toEqual<IPerson["officeNumber"]>("111-44-22")
    expect(getPerson().telephoneNumber).toEqual<string>("+7 (495) 111-44-22")

    getPerson().name = "Alan"
    expect(getPerson().name).toEqual<IPerson["name"]>("Alan")

    getPerson().areaCode = "+7 (812)"
    expect(getPerson().areaCode).toEqual<IPerson["areaCode"]>("+7 (812)")

    getPerson().officeNumber = "999-66-33"
    expect(getPerson().officeNumber).toEqual<IPerson["officeNumber"]>("999-66-33")

    expect(getPerson().telephoneNumber).toEqual<string>("+7 (812) 999-66-33")
  })
})
