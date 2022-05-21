type CustomerContractData = {
  startDate: Date
}

class CustomerContract {
  private _data: CustomerContractData
  constructor(data: CustomerContractData) {
    this._data = data
  }
}

type CustomerData = {
  contract: CustomerContract
  discountRate: number
  name: string
}

class Customer {
  private _data: CustomerData
  constructor(data: { discountRate: CustomerData["discountRate"]; name: CustomerData["name"] }) {
    this._data = {
      contract: new CustomerContract({ startDate: new Date() }),
      discountRate: data.discountRate,
      name: data.name,
    }
  }
  get discountRate() {
    return this._data.discountRate
  }
  becomePreffered() {
    this._data.discountRate += 0.03
  }
}

const aCustomer = new Customer({ discountRate: 0.14, name: "John" })

export const getCustomer = (): Customer => {
  return aCustomer
}
