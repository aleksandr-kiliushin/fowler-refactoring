export type IOrder = {
  itemPrice: number
  quantity: number
}

class Order {
  private data: IOrder
  constructor(anOrder: IOrder) {
    this.data = anOrder
  }
  get itemPrice() {
    return this.data.itemPrice
  }
  get quantity() {
    return this.data.quantity
  }
  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    )
  }
}

export default Order
