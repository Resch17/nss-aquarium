import { useQuote } from "./QuoteDataProvider.js";
import { Quote } from "./quote.js";

export const QuoteList = () => {
  const contentElement = document.querySelector(".quotes");
  const quoteArray = useQuote();

  for (const quote of quoteArray) {
    const quoteHTML = Quote(quote);
    contentElement.innerHTML += quoteHTML;
  }
};
