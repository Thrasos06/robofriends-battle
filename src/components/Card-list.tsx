import MonsterCard from "./Monster-card";

import type { Monster } from "../types/monster";

type CardListProps = {
  filteredMonsters: Monster[];
  selectedMonsters: Monster[];
  onSelectMonster: (monster: Monster) => void;
};

const CardList = ({
  filteredMonsters,
  selectedMonsters,
  onSelectMonster,
}: CardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {filteredMonsters.map((monster) => {
        const isSelected = selectedMonsters.some(
          (selected) => selected.id === monster.id,
        );

        return (
          <MonsterCard
            key={monster.id}
            monster={monster}
            isSelected={isSelected}
            onSelect={onSelectMonster}
          />
        );
      })}
    </div>
  );
};

export default CardList;
