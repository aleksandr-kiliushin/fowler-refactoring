import invoice from "./index.json"

type Invoice = {
  customer: string
  orders: { amount: number }[]
  dueDate: Date | null
}

const printBanner = () => {
  console.log("***********************")
  console.log("**** Customer owes ****")
  console.log("***********************")
}

const calculateOutstanding = ({ invoice }: { invoice: Invoice }) => {
  let result = 0
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}

const printDetails = ({ invoice, outstanding }: { invoice: Invoice; outstanding: number }) => {
  console.log(`Name: ${invoice.customer}.`)
  console.log(`Amount: ${outstanding}.`)
  if (invoice.dueDate === null) return
  console.log(`Due: ${invoice.dueDate.toLocaleDateString()}.`)
}

const enrichInvoiceWithDueDate = ({ invoice }: { invoice: Invoice }): Invoice => {
  const today = new Date()
  const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  return { ...invoice, dueDate }
}

const printOwing = (invoice: Invoice): void => {
  printBanner()

  const outstanding = calculateOutstanding({ invoice })

  const invoiceWithDueDate = enrichInvoiceWithDueDate({ invoice })

  printDetails({ invoice: invoiceWithDueDate, outstanding })
}

export default printOwing
