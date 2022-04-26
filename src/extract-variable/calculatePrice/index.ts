export type Order = {
  itemPrice: number
  quantity: number
}

const calculatePrice = ({ anOrder }: { anOrder: Order }): number => {
  const { itemPrice, quantity } = anOrder
  const basePrice = quantity * itemPrice
  const quantityDiscount = Math.max(0, quantity - 500) * itemPrice * 0.05
  // Price is: base price - quantity discount + shipping.
  return basePrice - quantityDiscount + Math.min(basePrice * 0.1, 100)
}

export default calculatePrice
