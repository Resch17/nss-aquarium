// import { useFish } from "./fishDataProvider.js";
import { mostHolyFish } from "./FishDataProvider.js";
import { soldierFish } from "./FishDataProvider.js";
import { nonHolyFish } from "./FishDataProvider.js";
import { Fish } from "./fish.js";

export const FishList = () => {
  const contentElement = document.querySelector(".fish-list");
  const theHoliest = mostHolyFish();
  const theSoldiers = soldierFish();
  const theUnworthy = nonHolyFish();

  const allTheFish = [theHoliest, theSoldiers, theUnworthy];
  
  for (const fishArray of allTheFish) {
    for (const fish of fishArray) {
    const fishHTML = Fish(fish);
    contentElement.innerHTML += fishHTML;
    }
  }
};
