import type { Monster } from "../types/monster";

const selectedMonstersHandler = (
  monster: Monster,
  selectedMonsters: Monster[],
  setSelectedMonsters: React.Dispatch<React.SetStateAction<Monster[]>>,
) => {
  const alreadySelected = selectedMonsters.some(
    (selected) => selected.id === monster.id,
  );

  if (alreadySelected) {
    setSelectedMonsters(
      selectedMonsters.filter((selected) => selected.id !== monster.id),
    );

    return;
  }

  if (selectedMonsters.length >= 2) {
    return;
  }

  setSelectedMonsters([...selectedMonsters, monster]);
};

export default selectedMonstersHandler;
