export type Station = {
  name: string
  readings: { temp: number; time: string }[]
}

export type OperatingPlan = {
  temperatureFloor: number
  temperatureCeiling: number
}

const findReadingOutsideRange = (
  station: Station,
  min: OperatingPlan["temperatureFloor"],
  max: OperatingPlan["temperatureCeiling"]
) => {
  return station.readings.filter(({ temp }) => temp < min || temp > max)
}

export default findReadingOutsideRange
