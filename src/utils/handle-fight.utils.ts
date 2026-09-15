import type { Monster } from "../types/monster";

type HandleFightProps = {
  selectedMonsters: Monster[];
  setWinner: React.Dispatch<React.SetStateAction<Monster | null>>;
  setSelectedMonsters: React.Dispatch<React.SetStateAction<Monster[]>>;
};
const handleFight = ({
  selectedMonsters,
  setWinner,
  setSelectedMonsters,
}: HandleFightProps) => {
  if (selectedMonsters.length !== 2) {
    return;
  }

  const [monster1, monster2] = selectedMonsters;

  const monster1Score = monster1.attack * 1.3 + monster1.hitPoints;
  const monster2Score = monster2.attack * 1.3 + monster2.hitPoints;

  if (monster1Score > monster2Score) {
    setWinner(monster1);
  } else if (monster2Score > monster1Score) {
    setWinner(monster2);
  } else {
    setWinner(null);
  }

  setSelectedMonsters([]);
};

export default handleFight;
