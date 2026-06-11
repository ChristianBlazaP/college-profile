// src/data/facilities.js
// All images imported individually and then exported.
// They are also collected into structured exports for data files.

// Automotive Technology
import automotive1 from "../assets/facilities/automotive1.jpg";
import automotive2 from "../assets/facilities/automotive2.jpg";
import automotive3 from "../assets/facilities/automotive3.jpg";
import automotive4 from "../assets/facilities/automotive4.jpg";

// Mechanical Technology
import mecanical1 from "../assets/facilities/mecanical1.jpg";
import mecanical2 from "../assets/facilities/mecanical2.jpg";
import mecanical3 from "../assets/facilities/mecanical3.jpg";
import mecanical4 from "../assets/facilities/mecanical4.jpg";

// Electrical Technology
import electrical1 from "../assets/facilities/electrical1.jpg";
import electrical2 from "../assets/facilities/electrical2.jpg";
import electrical3 from "../assets/facilities/electrical3.jpg";
import electrical4 from "../assets/facilities/electrical4.jpg";

// Electronics Technology
import electronics1 from "../assets/facilities/electronics1.jpg";
import electronics2 from "../assets/facilities/electronics2.jpg";
import electronics3 from "../assets/facilities/electronics3.jpg";
import electronics4 from "../assets/facilities/electronics4.jpg";

// Drafting Technology
import drafting1 from "../assets/facilities/drafting1.jpg";
import drafting2 from "../assets/facilities/drafting2.jpg";
import drafting3 from "../assets/facilities/drafting3.jpg";
import drafting4 from "../assets/facilities/drafting4.jpg";

// Computer Technology
import computerlab1 from "../assets/facilities/computerlab1.jpg";
import computerlab2 from "../assets/facilities/computerlab2.jpg";
import computerlab3 from "../assets/facilities/computerlab3.jpg";
import computerlab4 from "../assets/facilities/computerlab4.jpg";

// Industrial Chemistry
import ichem1 from "../assets/facilities/ichem1.jpg";
import ichem2 from "../assets/facilities/ichem2.jpg";
import ichem3 from "../assets/facilities/ichem3.jpg";
import ichem4 from "../assets/facilities/ichem4.jpg";

// Apparel & Fashion Technology
import fashion1 from "../assets/facilities/Fassion&Apparel1.jpg";
import fashion2 from "../assets/facilities/Fassion&Apparel2.jpg";
import fashion3 from "../assets/facilities/Fassion&Apparel3.jpg";
import fashion4 from "../assets/facilities/Fassion&Apparel4.jpg";

// HVAC-R Technology
import hvac1 from "../assets/facilities/HVAC-R1.jpg";
import hvac2 from "../assets/facilities/HVAC-R2.jpg";
import hvac3 from "../assets/facilities/HVAC-R3.jpg";
import hvac4 from "../assets/facilities/HVAC-R4.jpg";

// Food Trades Technology
import foodtech1 from "../assets/facilities/Foodtech1.jpg";
import foodtech2 from "../assets/facilities/Foodtech2.jpg";
import foodtech3 from "../assets/facilities/Foodtech3.jpg";
import foodtech4 from "../assets/facilities/Foodtech4.jpg";

export {
  automotive1,
  automotive2,
  automotive3,
  automotive4,
  mecanical1,
  mecanical2,
  mecanical3,
  mecanical4,
  electrical1,
  electrical2,
  electrical3,
  electrical4,
  electronics1,
  electronics2,
  electronics3,
  electronics4,
  drafting1,
  drafting2,
  drafting3,
  drafting4,
  computerlab1,
  computerlab2,
  computerlab3,
  computerlab4,
  ichem1,
  ichem2,
  ichem3,
  ichem4,
  fashion1,
  fashion2,
  fashion3,
  fashion4,
  hvac1,
  hvac2,
  hvac3,
  hvac4,
  foodtech1,
  foodtech2,
  foodtech3,
  foodtech4
};

export const facilitiesImageData = [
  {
    key: "automotive",
    name: "Automotive Technology Laboratory",
    course: "Automotive Technology",
    path: "/facilities/automotive",
    images: [automotive1, automotive2, automotive3, automotive4],
  },
  {
    key: "mechanical",
    name: "Mechanical Technology Laboratory",
    course: "Mechanical Technology",
    path: "/facilities/mechanical",
    images: [mecanical1, mecanical2, mecanical3, mecanical4],
  },
  {
    key: "electrical",
    name: "Electrical Technology Laboratory",
    course: "Electrical Technology",
    path: "/facilities/electrical",
    images: [electrical1, electrical2, electrical3, electrical4],
  },
  {
    key: "electronics",
    name: "Electronics Laboratory",
    course: "Electronics Technology",
    path: "/facilities/electronics",
    images: [electronics1, electronics2, electronics3, electronics4],
  },
  {
    key: "drafting",
    name: "Drafting Technology Laboratory",
    course: "Drafting Technology",
    path: "/facilities/drafting",
    images: [drafting1, drafting2, drafting3, drafting4],
  },
  {
    key: "computer",
    name: "Computer Technology Laboratory",
    course: "Computer Technology",
    path: "/facilities/computer",
    images: [computerlab1, computerlab2, computerlab3, computerlab4],
  },
  {
    key: "chemistry",
    name: "Industrial Chemistry Laboratory",
    course: "Industrial Chemistry",
    path: "/facilities/chemistry",
    images: [ichem1, ichem2, ichem3, ichem4],
  },
  {
    key: "apparel-fashion",
    name: "Apparel and Fashion Technology Laboratory",
    course: "Apparel and Fashion Technology",
    path: "/facilities/apparel-fashion",
    images: [fashion1, fashion2, fashion3, fashion4],
  },
  {
    key: "hvac",
    name: "HVAC-R Laboratory",
    course: "HVAC-R",
    path: "/facilities/hvac",
    images: [hvac1, hvac2, hvac3, hvac4],
  },
  {
    key: "food",
    name: "Food Trades Laboratory",
    course: "Food Trades",
    path: "/facilities/food",
    images: [foodtech1, foodtech2, foodtech3, foodtech4],
  },
];

export const facilityLabsData = facilitiesImageData.map((facility, idx) => ({
  id: idx + 1,
  ...facility,
}));

export default facilitiesImageData;
