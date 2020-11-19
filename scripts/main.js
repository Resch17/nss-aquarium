import { FishList } from "./fishList.js";
import { LocationList } from "./locationList.js";
import { QuoteList } from "./quoteList.js";
import { TipList } from "./tipList.js";
import { mostHolyFish } from "./FishDataProvider.js";
import { soldierFish } from "./FishDataProvider.js";
import { nonHolyFish } from "./FishDataProvider.js";

FishList();
LocationList();
QuoteList();
TipList();

console.log("the holiest: ", mostHolyFish());
console.log("the soldiers: ", soldierFish());
console.log("regular fish: ", nonHolyFish());
