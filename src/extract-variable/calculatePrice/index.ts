export type Order = {
  itemPrice: number
  quantity: number
}

const calculatePrice = ({ anOrder }: { anOrder: Order }): number => {
  const { itemPrice, quantity } = anOrder
  // Price is: base price - quantity discount + shipping.
  return (
    quantity * itemPrice -
    Math.max(0, quantity - 500) * itemPrice * 0.05 +
    Math.min(quantity * itemPrice * 0.1, 100)
  )
}

export default calculatePrice
