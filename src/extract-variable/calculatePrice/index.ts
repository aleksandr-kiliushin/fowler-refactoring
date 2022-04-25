export type Order = {
  itemPrice: number
  quantity: number
}

const calculatePrice = ({ anOrder }: { anOrder: Order }): number => {
  return (
    anOrder.quantity * anOrder.itemPrice -
    Math.max(0, anOrder.quantity - 500) * anOrder.itemPrice * 0.05 +
    Math.min(anOrder.quantity * anOrder.itemPrice * 0.1, 100)
  )
}

export default calculatePrice
