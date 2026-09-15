import type { Monster } from "../types/monster";

const selectedMonstersHandler = (
  monster: Monster,
  setSelectedMonsters: React.Dispatch<React.SetStateAction<Monster[]>>,
) => {
  setSelectedMonsters((selectedMonsters) => {
    const alreadySelected = selectedMonsters.some(
      (selected) => selected.id === monster.id,
    );

    if (alreadySelected) {
      return selectedMonsters.filter((selected) => selected.id !== monster.id);
    }

    if (selectedMonsters.length >= 2) {
      return selectedMonsters;
    }

    return [...selectedMonsters, monster];
  });
};

export default selectedMonstersHandler;
