import createStatementData from "./createStatementData"

function statement(invoice: any, plays: any): any {
  return renderPlainText(createStatementData(invoice, plays))
}

function renderPlainText(data: any) {
  let result = `Statement for ${data.customer}\n`
  for (const perf of data.performances) {
    result += `  ${perf.play.name}: ${formatAsUSD(perf.amount)} (${perf.audience} seats)\n`
  }
  result += `Amount owed is ${formatAsUSD(data.totalAmount)}.\n`
  result += `You earned ${data.totalVolumeCredits} credits.\n`
  return result

  function formatAsUSD(aNumber: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100)
  }
}
export default statement
