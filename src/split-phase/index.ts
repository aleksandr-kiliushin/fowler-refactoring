export type Product = {
  basePrice: number
  discountThreshold: number
  discountRate: number
}

export type ShippingMethod = {
  discountThreshold: number
  discountedFee: number
  feePerCase: number
}

export type Order = {
  product: Product
  quantity: number
  shippingMethod: ShippingMethod
}

const getOrderPrice = ({ product, quantity, shippingMethod }: Order) => {
  const basePrice = product.basePrice * quantity
  const discount =
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase
  const shippingCost = quantity * shippingPerCase
  const price = basePrice - discount + shippingCost
  return price
}

export default getOrderPrice
