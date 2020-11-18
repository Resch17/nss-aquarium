import {useLocation} from "./LocationDataProvider.js";
import {Location} from "./location.js"

export const LocationList = () => {
  const contentElement = document.querySelector(".locations")
  const allTheLocations = useLocation();

  for (const location of allTheLocations) {
    const locationHTML = Location(location);
    contentElement.innerHTML += locationHTML;
  }
}

