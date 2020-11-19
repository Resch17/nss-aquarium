const fishCollection = [
  {
    species: "Goldfish",
    name: "Tom",
    length: 3,
    location: "Neighbor's backyard",
    diet: "Cheetos",
    image: "goldfish.jpg",
  },
  {
    species: "Blue Tang",
    name: "Ghostfish Killah",
    length: 5,
    location: "Staten Island, NY",
    diet: "Whack MCs",
    image: "blueTang.jpg",
  },
  {
    species: "Clownfish",
    name: "Bozo",
    length: 4,
    location: "Great Barrier Reef",
    diet: "Fish food? idk",
    image: "clownfish.jpg",
  },
  {
    species: "Chinese Algae Eater",
    name: "Franz",
    length: 10,
    location: "Yangtze River",
    diet: "Algae",
    image: "algae.jpg",
  },
  {
    species: "Lionfish",
    name: "Aslan",
    length: 15,
    location: "Perth, Australia",
    diet: "FISH",
    image: "lionfish.jpg",
  },
];

export const useFish = () => {
  return fishCollection.slice();
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = [];

  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3!== 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];

  for (const fish of fishCollection) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      regularFish.push(fish);
    }
  }

  return regularFish;
};
