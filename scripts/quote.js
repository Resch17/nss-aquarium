export const Quote = (quote) => {
  return `
  <div class="quote">
          <div class="quote__text">${quote.text}</div>
          <div class="quote__author">-${quote.author}</div>
        </div>
  `
}