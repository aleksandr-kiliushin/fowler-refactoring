function statement(invoice: any, plays: any) {
  let result = `Statement for ${invoice.customer}\n`
  for (let perf of invoice.performances) {
    // print line for this order
    result += `  ${playFor(perf).name}: ${formatAsUSD(amountFor(perf))} (${
      perf.audience
    } seats)\n`
  }
  result += `Amount owed is ${formatAsUSD(totalAmount())}.\n`
  result += `You earned ${totalVolumeCredits()} credits.\n`
  return result

  function amountFor(aPerformance: any): number {
    let result = 0
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30)
        }
        break
      case "comedy":
        result = 30000
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20)
        }
        result += 300 * aPerformance.audience
        break
      default:
        throw new Error(`Unknown type: ${playFor(aPerformance).type}.`)
    }
    return result
  }

  function playFor(aPerformance: any): any {
    return plays[aPerformance.playID]
  }

  function volumeCreditsFor(aPerformance: any): number {
    let result = 0
    result += Math.max(aPerformance.audience - 30, 0)
    if ("comedy" === playFor(aPerformance).type)
      result += Math.floor(aPerformance.audience / 5)
    return result
  }

  function formatAsUSD(aNumber: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100)
  }

  function totalVolumeCredits() {
    let volumeCredits = 0
    for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf)
    }
    return volumeCredits
  }

  function totalAmount() {
    let result = 0
    for (let perf of invoice.performances) {
      result += amountFor(perf)
    }
    return result
  }
}

export default statement
