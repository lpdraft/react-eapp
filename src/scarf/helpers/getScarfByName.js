import { scarfsData } from "../../data/dbData";

export const getScarfByName = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];

  return scarfsData.filter((scarf) =>
    //   Si lo que escribe el user.. 'se incluye o esta en el obj' entoces devuelve eres arr [si no encuentra el match entonces devuelve el arr vacio]
    scarf.title.toLocaleLowerCase().includes(name)
  );
};
