type RadioButtonsProps = {
  sortOrder: string;
  setSortOrder: (value: string) => void;
  rarityFilter: "All" | "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
  setRarityFilter: (
    value: "All" | "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary",
  ) => void;
};

const RadioButtons = ({
  sortOrder,
  setSortOrder,
  rarityFilter,
  setRarityFilter,
}: RadioButtonsProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {/* Sort */}
      <div className="relative">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="
        appearance-none
        rounded-2xl
        border border-cyan-400/30
        bg-slate-950/80
        px-5 py-3
        pr-12
        text-sm
        font-semibold
        text-cyan-100
        shadow-[0_0_20px_rgba(34,211,238,0.08)]
        outline-none
        backdrop-blur-xl
        transition
        hover:border-cyan-300/60
        hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]
        focus:border-cyan-300
        focus:ring-2
        focus:ring-cyan-400/20
      "
        >
          <option value="default">Default</option>
          <option value="attack-desc">Highest Attack</option>
          <option value="hitPoints-desc">Highest HP</option>
          <option value="hitPoints-asc">Lowest HP</option>
          <option value="name-asc">A-Z</option>
          <option value="name-desc">Z-A</option>
        </select>

        <svg
          className="
        pointer-events-none
        absolute
        right-4
        top-1/2
        h-4
        w-4
        -translate-y-1/2
        text-cyan-300
      "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6 9 6 6 6-6"
          />
        </svg>
      </div>

      {/* Rarity */}
      <div className="relative">
        <select
          value={rarityFilter}
          onChange={(e) =>
            setRarityFilter(e.target.value as RadioButtonsProps["rarityFilter"])
          }
          className="
      appearance-none
      rounded-2xl
      border
      border-violet-400/50
      bg-slate-950/90
      px-5
      py-3
      pr-12
      text-sm
      font-semibold
      text-violet-100
      shadow-[0_0_18px_rgba(168,85,247,0.14)]
      outline-none
      transition-all
      duration-200
      hover:border-violet-300
      hover:shadow-[0_0_24px_rgba(168,85,247,0.20)]
      focus:border-violet-300
      focus:ring-2
      focus:ring-violet-400/30
    "
        >
          <option value="All">All rarities</option>
          <option value="Common">Common</option>
          <option value="Uncommon">Uncommon</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
        </select>

        <svg
          className="
      pointer-events-none
      absolute
      right-4
      top-1/2
      h-4
      w-4
      -translate-y-1/2
      text-violet-300
      transition-transform
      duration-200
    "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6 9 6 6 6-6"
          />
        </svg>
      </div>
    </div>
  );
};

export default RadioButtons;
