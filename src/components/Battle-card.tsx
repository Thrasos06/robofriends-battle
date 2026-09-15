import { memo } from "react";
import type { Monster } from "../types/monster";

type BattleCardProps = {
  monster: Monster;
  onRemove: (monster: Monster) => void;
  disabled?: boolean;
};

const BattleCard = memo(function BattleCard({ monster, onRemove, disabled = false }: BattleCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onRemove(monster)}
      aria-label={`Remove ${monster.name} from battle`}
      className="flex w-full min-w-0 items-center gap-2 rounded-xl border border-lime-300/30 bg-slate-950/70 p-2 text-left transition-colors enabled:hover:border-lime-300 enabled:hover:bg-lime-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 disabled:cursor-wait"
    >
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-xs font-bold text-lime-100">
          {monster.name}
        </span>
        <span className="mt-1 flex flex-wrap gap-x-2 text-[10px]">
          <span className="text-red-300">ATK {monster.attack}</span>
          <span className="text-emerald-300">HP {monster.hitPoints}</span>
        </span>
      </span>
      <span aria-hidden="true" className="shrink-0 text-sm text-slate-400">
        &times;
      </span>
    </button>
  );
});

export default BattleCard;
