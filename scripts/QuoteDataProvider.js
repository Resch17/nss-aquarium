const quoteCollection = [
  {
    text: "Just keep swimming!",
    author: "Dory"
  },
  {
    text: "Give a man a fish and feed him for a day. Don’t teach a man to fish…and feed yourself. He’s a grown man. And fishing’s not that hard.",
    author: "Ron Swanson"
  },
  {
    text: "No good fish goes anywhere without a porpoise.",
    author: "Lewis Carroll"
  },
]

export const useQuote = () => {
  return quoteCollection.slice();
};