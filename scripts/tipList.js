import {useTip} from "./TipDataProvider.js";
import {Tip} from "./tip.js";

export const TipList = () => {
  const contentElement = document.querySelector(".tank-care");
  const tipArray = useTip();

  for (const tip of tipArray) {
    const tipHTML = Tip(tip);
    contentElement.innerHTML += tipHTML;
  }
}