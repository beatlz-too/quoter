import { StockTickers } from "../types/tickers.enum"

export const isValidTicker = () => {
  const url = window.location.href
  const match = url.match(/finance\.yahoo\.com\/quote\/([A-Z]+)/)
  
  if (!match) return false
  
  const ticker = match[1]

  return Object.entries(StockTickers).filter(([_, value]) => value === ticker)
}
