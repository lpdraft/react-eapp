import { scarfsData } from "../../data/dbData";

export const getScarfById = (scarfId) => {
  // console.log(scarfsData);
  return scarfsData.find((scarf) => scarf.id === scarfId);
};
