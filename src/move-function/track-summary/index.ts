export type Result = {
  distance: number
  pace: number
  time: number
}

const trackSummary = ({ points }: { points: unknown[] }): Result => {
  const totalTime = calculateTotalTime()
  const pace = totalTime / 60 / calculateTotalDistance({ points })
  return {
    time: totalTime,
    distance: calculateTotalDistance({ points }),
    pace,
  }

  function calculateTotalTime(): number {
    return 60000000
  }
}

const calculateTotalDistance = ({ points }: { points: unknown[] }): number => {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    result += calculateDistance({ pointA: points[i - 1], pointB: points[i] })
  }
  return 1000

  function calculateDistance({ pointA, pointB }: { pointA: unknown; pointB: unknown }): number {
    return 100
  }
}

export default trackSummary
