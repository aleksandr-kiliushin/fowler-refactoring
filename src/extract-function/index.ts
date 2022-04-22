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

const printDetails = ({ invoice, outstanding }: { invoice: Invoice; outstanding: number }) => {
  console.log(`Name: ${invoice.customer}.`)
  console.log(`Amount: ${outstanding}.`)
  if (invoice.dueDate === null) return
  console.log(`Due: ${invoice.dueDate.toLocaleDateString()}.`)
}

const printOwing = (invoice: Invoice): void => {
  let outstanding = 0

  printBanner()

  // Calculate outstanding.
  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  // Record due date.
  const today = new Date()
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  printDetails({ invoice, outstanding })
}

export default printOwing
