export type Customer = {
  address: {
    state: string
  }
}

const isNewEngland = (aCustomer: Customer) => {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state)
}

export default isNewEngland
