export type IPerson = {
  name: string
  areaCode: string
  officeNumber: string
}

class Person {
  private _data: IPerson
  constructor(data: IPerson) {
    this._data = data
  }
  get name() {
    return this._data.name
  }
  set name(newValue) {
    this._data.name = newValue
  }
  get areaCode() {
    return this._data.areaCode
  }
  set areaCode(newValue) {
    this._data.areaCode = newValue
  }
  get officeNumber() {
    return this._data.officeNumber
  }
  set officeNumber(newValue) {
    this._data.officeNumber = newValue
  }
  get telephoneNumber() {
    return this._data.areaCode + " " + this._data.officeNumber
  }
}

const aPerson = new Person({ areaCode: "+7 (495)", name: "John", officeNumber: "111-44-22" })

export const getPerson = (): Person => {
  return aPerson
}
