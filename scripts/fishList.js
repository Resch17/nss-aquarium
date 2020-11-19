import { useFish } from "./fishDataProvider.js";
import { Fish } from "./fish.js";

export const FishList = () => {
  const contentElement = document.querySelector(".fish-list");
  const allTheFish = useFish();

  for (const fishObject of allTheFish) {
    const fishHTML = Fish(fishObject);
    contentElement.innerHTML += fishHTML;
  }
};
