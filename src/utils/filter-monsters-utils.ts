import getRarity from "./monster-utils";
import type { Monster } from "../types/monster";

const filteredMonsters = (
  monsters: Monster[],
  searchField: string,
  rarityFilter: string,
  sortOrder: string,
): Monster[] => {
  return [...monsters]
    .filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    )
    .filter((monster) => {
      if (rarityFilter === "All") return true;

      const rarity = getRarity(monster.hitPoints, monster.attack);

      return rarity === rarityFilter;
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "attack-asc":
          return a.attack - b.attack;

        case "attack-desc":
          return b.attack - a.attack;

        case "hitPoints-asc":
          return a.hitPoints - b.hitPoints;

        case "hitPoints-desc":
          return b.hitPoints - a.hitPoints;

        default:
          return 0;
      }
    });
};

export default filteredMonsters;
