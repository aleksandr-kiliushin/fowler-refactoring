type Driver = {
  numberOfLateDeliveries: number
}

const moreThanFiveLaterDeliveries = (aDriver: Driver) => {
  return aDriver.numberOfLateDeliveries > 5
}

const getDriverRating = (aDriver: Driver) => {
  return moreThanFiveLaterDeliveries(aDriver) ? 2 : 1
}

export default getDriverRating
