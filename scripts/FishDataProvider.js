const fishCollection = [
  {
    species: "Goldfish",
    name: "Tom",
    length: 3,
    location: "Neighbor's backyard",
    diet: "Cheetos",
    image: "goldfish.jpg"
  },
  {
    species: "Blue Tang",
    name: "Ghostfish Killah",
    length: 5,
    location: "Staten Island, NY",
    diet: "Whack MCs",
    image: "blueTang.jpg"
  },
  {
    species: "Clownfish",
    name: "Bozo",
    length: 4,
    location: "Great Barrier Reef",
    diet: "Fish food? idk",
    image: "clownfish.jpg"
  },
  {
    species: "Chinese Algae Eater",
    name: "Franz",
    length: 10,
    location: "Yangtze River",
    diet: "Algae",
    image: "algae.jpg"
  },
  {
    species: "Lionfish",
    name: "Aslan",
    length: 16,
    location: "Perth, Australia",
    diet: "FISH",
    image: "lionfish.jpg"
  }
]

export const useFish = () => {
  return fishCollection.slice();
}