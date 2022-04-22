import invoice from "./index.json"

type Invoice = {
  customer: string
  orders: { amount: number }[]
  dueDate: Date | null
}

const printOwing = (invoice: Invoice): void => {
  let outstanding = 0

  console.log("***********************")
  console.log("**** Customer owes ****")
  console.log("***********************")

  // Calculate outstanding.
  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  // Record due date.
  const today = new Date()
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  // Print details.
  console.log(`Name: ${invoice.customer}.`)
  console.log(`Amount: ${outstanding}.`)
  console.log(`Due: ${invoice.dueDate.toLocaleDateString()}.`)
}

export default printOwing
