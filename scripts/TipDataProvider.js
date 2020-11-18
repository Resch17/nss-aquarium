const tipCollection = [
  {
    text: "Keep the tank at the right temp!"
  },
  {
    text: "Watch the salinity!"
  },
  {
    text: "Watch the acidity!"
  },
  {
    text: "Don't forget to vacuum the substrate!"
  },
]

export const useTip = () => {
  return tipCollection.slice();
};