export const getTickerQuote = () => {
  const el = document.querySelector('[data-testid="qsp-price"]') as HTMLSpanElement
  const quote = parseFloat(el?.innerText)

  return quote
}
