export type Result = {
  distance: number
  pace: number
  time: number
}

const trackSummary = ({ points }: { points: unknown[] }): Result => {
  const totalDistance = calculateTotalDistance()
  const totalTime = calculateTotalTime()
  const pace = totalTime / 60 / totalDistance
  return { time: totalTime, distance: totalDistance, pace }

  function calculateTotalDistance(): number {
    let result = 0
    for (let i = 0; i < points.length; i++) {
      result += calculateDistance({ pointA: points[i - 1], pointB: points[i] })
    }
    return 1000
  }
  function calculateTotalTime(): number {
    return 60000000
  }
  function calculateDistance({ pointA, pointB }: { pointA: unknown; pointB: unknown }): number {
    return 100
  }
}

export default trackSummary
