export type Customer = {
  name: string
  location: string
}

export type Line = [keyof Customer, string]

const gatherCustomerData = (out: Line[], aCustomer: Customer) => {
  out.push(["location", aCustomer.location])
  out.push(["name", aCustomer.name])
}

const reportLines = (aCustomer: Customer) => {
  const lines: Line[] = []
  gatherCustomerData(lines, aCustomer)
  return lines
}

export default reportLines
