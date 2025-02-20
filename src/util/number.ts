const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
})

export function formatCurrency(input?: string | number | null) {
  return input !== null && typeof input !== "undefined" && !isNaN(+input)
    ? currencyFormatter.format(+input)
    : ""
}

const pctFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
})

export function formatPercent(input?: string | number | null) {
  return input !== null && typeof input !== "undefined" && !isNaN(+input)
    ? pctFormatter.format(+input)
    : ""
}
