import { isValidTicker } from "./utilities/isValidTicker";
import { TICKER_QUOTE_INTERVAL } from "./types/constants";
import { getTickerQuote } from "./utilities/getTickerQuote";

(() => {
  const isValid = isValidTicker()

  if (!isValid) {
    return
  }

  setInterval(() => {
    const quote = getTickerQuote()

    console.log(quote)
  }, TICKER_QUOTE_INTERVAL)
})()
