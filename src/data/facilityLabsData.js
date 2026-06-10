// src/data/facilityLabsData.js
// Uses properly bundled Vite imports from the assets index — no more broken public paths.
import { facilitiesImageData } from "../assets/facilities/index.js";

/**
 * facilityLabsData is the full structured facility array ready for .map() use.
 * Each entry: { id, key, name, course, path, images[] }
 */
export const facilityLabsData = facilitiesImageData.map((facility, idx) => ({
  id: idx + 1,
  ...facility,
}));

export default facilityLabsData;