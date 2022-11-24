import { scarfsData } from "../../data/dbData";

export const getCategory = (category) => {
  const validCategory = ["Alpaca Wool", "Himalayan Wool"];

  if (!validCategory.includes(category)) {
    alert(`${category} is not found in our Data Base..`);
  }
  //   Pero si existe entonces return..
  return scarfsData.filter((scarf) => scarf.category === category);
};
