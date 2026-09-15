import { memo } from "react";
import type { Monster } from "../types/monster";
import BattleCard from "./Battle-card";
import "./Battle-selection.css";

type BattleSelectionProps = {
  selectedMonsters: Monster[];
  onSelectMonster: (monster: Monster) => void;
  onClear: () => void;
  isFighting: boolean;
};

const BattleSelection = memo(function BattleSelection({
  selectedMonsters,
  onSelectMonster,
  onClear,
  isFighting,
}: BattleSelectionProps) {
  return (
    <section
      aria-labelledby="battle-selection-title"
      className="mb-8 w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-lime-400/10 via-violet-500/10 to-transparent p-6 text-center"
    >
      <div className="flex flex-col items-center gap-2">
        <h2
          id="battle-selection-title"
          className="text-xl font-bold text-white"
        >
          Click on Monster Cards to Select and Fight!
        </h2>
        <p className="text-sm text-slate-400" aria-live="polite">
          {isFighting ? "Clash in progress!" : `Selected: ${selectedMonsters.length}/2`}
        </p>
        <button
          type="button"
          onClick={onClear}
          disabled={isFighting || selectedMonsters.length === 0}
          aria-label="Clear all selected monsters"
          className="rounded-lg border border-violet-400/40 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold text-violet-200 transition-colors enabled:hover:border-violet-300 enabled:hover:bg-violet-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>

      {selectedMonsters.length > 0 && (
        <div className={`battle-stage mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 ${isFighting ? "battle-stage--active" : ""}`}>
          {selectedMonsters.map((monster, index) => (
            <div key={monster.id} className={`battle-fighter battle-fighter--${index} min-w-0`}>
            <BattleCard
              monster={monster}
              onRemove={onSelectMonster}
              disabled={isFighting}
            />
            </div>
          ))}
          {isFighting && <span aria-hidden="true" className="battle-impact">CLASH!</span>}
        </div>
      )}
    </section>
  );
});

export default BattleSelection;
