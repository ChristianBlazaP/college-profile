// src/assets/facilities/index.js
// All images exported individually (named exports) so components can do:
//   import { automotive1, computerlab1 } from "../assets/facilities/index.js"
// They are also collected into structured exports for data files.

// Automotive Technology
export { default as automotive1 } from "./automotive1.jpg";
export { default as automotive2 } from "./automotive2.jpg";
export { default as automotive3 } from "./automotive3.jpg";
export { default as automotive4 } from "./automotive4.jpg";

// Mechanical Technology
export { default as mecanical1 } from "./mecanical1.jpg";
export { default as mecanical2 } from "./mecanical2.jpg";
export { default as mecanical3 } from "./mecanical3.jpg";
export { default as mecanical4 } from "./mecanical4.jpg";

// Electrical Technology
export { default as electrical1 } from "./electrical1.jpg";
export { default as electrical2 } from "./electrical2.jpg";
export { default as electrical3 } from "./electrical3.jpg";
export { default as electrical4 } from "./electrical4.jpg";

// Electronics Technology
export { default as electronics1 } from "./electronics1.jpg";
export { default as electronics2 } from "./electronics2.jpg";
export { default as electronics3 } from "./electronics3.jpg";
export { default as electronics4 } from "./electronics4.jpg";

// Drafting Technology
export { default as drafting1 } from "./drafting1.jpg";
export { default as drafting2 } from "./drafting2.jpg";
export { default as drafting3 } from "./drafting3.jpg";
export { default as drafting4 } from "./drafting4.jpg";

// Computer Technology
export { default as computerlab1 } from "./computerlab1.jpg";
export { default as computerlab2 } from "./computerlab2.jpg";
export { default as computerlab3 } from "./computerlab3.jpg";
export { default as computerlab4 } from "./computerlab4.jpg";

// Industrial Chemistry
export { default as ichem1 } from "./ichem1.jpg";
export { default as ichem2 } from "./ichem2.jpg";
export { default as ichem3 } from "./ichem3.jpg";
export { default as ichem4 } from "./ichem4.jpg";

// Apparel & Fashion Technology
export { default as fashion1 } from "./Fassion&Apparel1.jpg";
export { default as fashion2 } from "./Fassion&Apparel2.jpg";
export { default as fashion3 } from "./Fassion&Apparel3.jpg";
export { default as fashion4 } from "./Fassion&Apparel4.jpg";

// HVAC-R Technology
export { default as hvac1 } from "./HVAC-R1.jpg";
export { default as hvac2 } from "./HVAC-R2.jpg";
export { default as hvac3 } from "./HVAC-R3.jpg";
export { default as hvac4 } from "./HVAC-R4.jpg";

// Food Trades Technology
export { default as foodtech1 } from "./Foodtech1.jpg";
export { default as foodtech2 } from "./Foodtech2.jpg";
export { default as foodtech3 } from "./Foodtech3.jpg";
export { default as foodtech4 } from "./Foodtech4.jpg";

// ─── Structured array for facilityLabsData ──────────────────────────────────
// Imported inside a function to avoid circular-import issues with re-exports above.
import _automotive1 from "./automotive1.jpg";
import _automotive2 from "./automotive2.jpg";
import _automotive3 from "./automotive3.jpg";
import _automotive4 from "./automotive4.jpg";
import _mecanical1 from "./mecanical1.jpg";
import _mecanical2 from "./mecanical2.jpg";
import _mecanical3 from "./mecanical3.jpg";
import _mecanical4 from "./mecanical4.jpg";
import _electrical1 from "./electrical1.jpg";
import _electrical2 from "./electrical2.jpg";
import _electrical3 from "./electrical3.jpg";
import _electrical4 from "./electrical4.jpg";
import _electronics1 from "./electronics1.jpg";
import _electronics2 from "./electronics2.jpg";
import _electronics3 from "./electronics3.jpg";
import _electronics4 from "./electronics4.jpg";
import _drafting1 from "./drafting1.jpg";
import _drafting2 from "./drafting2.jpg";
import _drafting3 from "./drafting3.jpg";
import _drafting4 from "./drafting4.jpg";
import _computerlab1 from "./computerlab1.jpg";
import _computerlab2 from "./computerlab2.jpg";
import _computerlab3 from "./computerlab3.jpg";
import _computerlab4 from "./computerlab4.jpg";
import _ichem1 from "./ichem1.jpg";
import _ichem2 from "./ichem2.jpg";
import _ichem3 from "./ichem3.jpg";
import _ichem4 from "./ichem4.jpg";
import _fashion1 from "./Fassion&Apparel1.jpg";
import _fashion2 from "./Fassion&Apparel2.jpg";
import _fashion3 from "./Fassion&Apparel3.jpg";
import _fashion4 from "./Fassion&Apparel4.jpg";
import _hvac1 from "./HVAC-R1.jpg";
import _hvac2 from "./HVAC-R2.jpg";
import _hvac3 from "./HVAC-R3.jpg";
import _hvac4 from "./HVAC-R4.jpg";
import _foodtech1 from "./Foodtech1.jpg";
import _foodtech2 from "./Foodtech2.jpg";
import _foodtech3 from "./Foodtech3.jpg";
import _foodtech4 from "./Foodtech4.jpg";

export const facilitiesImageData = [
  {
    key: "automotive",
    name: "Automotive Technology Laboratory",
    course: "Automotive Technology",
    path: "/facilities/automotive",
    images: [_automotive1, _automotive2, _automotive3, _automotive4],
  },
  {
    key: "mechanical",
    name: "Mechanical Technology Laboratory",
    course: "Mechanical Technology",
    path: "/facilities/mechanical",
    images: [_mecanical1, _mecanical2, _mecanical3, _mecanical4],
  },
  {
    key: "electrical",
    name: "Electrical Technology Laboratory",
    course: "Electrical Technology",
    path: "/facilities/electrical",
    images: [_electrical1, _electrical2, _electrical3, _electrical4],
  },
  {
    key: "electronics",
    name: "Electronics Laboratory",
    course: "Electronics Technology",
    path: "/facilities/electronics",
    images: [_electronics1, _electronics2, _electronics3, _electronics4],
  },
  {
    key: "drafting",
    name: "Drafting Technology Laboratory",
    course: "Drafting Technology",
    path: "/facilities/drafting",
    images: [_drafting1, _drafting2, _drafting3, _drafting4],
  },
  {
    key: "computer",
    name: "Computer Technology Laboratory",
    course: "Computer Technology",
    path: "/facilities/computer",
    images: [_computerlab1, _computerlab2, _computerlab3, _computerlab4],
  },
  {
    key: "chemistry",
    name: "Industrial Chemistry Laboratory",
    course: "Industrial Chemistry",
    path: "/facilities/chemistry",
    images: [_ichem1, _ichem2, _ichem3, _ichem4],
  },
  {
    key: "apparel-fashion",
    name: "Apparel and Fashion Technology Laboratory",
    course: "Apparel and Fashion Technology",
    path: "/facilities/apparel-fashion",
    images: [_fashion1, _fashion2, _fashion3, _fashion4],
  },
  {
    key: "hvac",
    name: "HVAC-R Laboratory",
    course: "HVAC-R",
    path: "/facilities/hvac",
    images: [_hvac1, _hvac2, _hvac3, _hvac4],
  },
  {
    key: "food",
    name: "Food Trades Laboratory",
    course: "Food Trades",
    path: "/facilities/food",
    images: [_foodtech1, _foodtech2, _foodtech3, _foodtech4],
  },
];

export default facilitiesImageData;
