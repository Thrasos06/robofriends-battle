import { memo } from "react";
import type { Monster } from "../types/monster";
import getRarity from "../utils/monster-utils";

type MonsterCardProps = {
  monster: Monster;
  isSelected: boolean;
  onSelect: (monster: Monster) => void;
};

const rarityStyles = {
  Common: {
    border: "border-slate-500/40",
    hoverBorder: "hover:border-slate-300/70",
    glow: "hover:shadow-[0_20px_60px_rgba(148,163,184,0.18)]",
    badge: "border-slate-400/50 bg-slate-500/15 text-slate-200",
    gradient: "from-slate-500/25 via-slate-400/10 to-slate-700/20",
    surface: "from-slate-900 to-slate-950",
  },

  Uncommon: {
    border: "border-emerald-400/50",
    hoverBorder: "hover:border-emerald-300",
    glow: "hover:shadow-[0_20px_65px_rgba(16,185,129,0.32)]",
    badge: "border-emerald-400/60 bg-emerald-400/15 text-emerald-300",
    gradient: "from-emerald-400/35 via-green-500/20 to-lime-400/25",
    surface: "from-emerald-950/40 to-slate-950",
  },

  Rare: {
    border: "border-cyan-400/60",
    hoverBorder: "hover:border-cyan-300",
    glow: "hover:shadow-[0_20px_70px_rgba(34,211,238,0.38)]",
    badge:
      "border-cyan-400/70 bg-cyan-400/15 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.18)]",
    gradient: "from-cyan-400/45 via-blue-500/30 to-indigo-500/35",
    surface: "from-cyan-950/40 via-blue-950/20 to-slate-950",
  },

  Epic: {
    border: "border-fuchsia-400/60",
    hoverBorder: "hover:border-fuchsia-300",
    glow: "hover:shadow-[0_20px_75px_rgba(217,70,239,0.42)]",
    badge:
      "border-fuchsia-400/70 bg-fuchsia-400/15 text-fuchsia-200 shadow-[0_0_16px_rgba(217,70,239,0.22)]",
    gradient: "from-fuchsia-400/50 via-violet-500/35 to-purple-600/40",
    surface: "from-fuchsia-950/40 via-violet-950/30 to-slate-950",
  },

  Legendary: {
    border: "border-amber-300/70",
    hoverBorder: "hover:border-yellow-300",
    glow: "hover:shadow-[0_20px_80px_rgba(251,191,36,0.45)]",
    badge:
      "border-yellow-300/80 bg-yellow-400/15 text-yellow-200 shadow-[0_0_18px_rgba(250,204,21,0.25)]",
    gradient: "from-yellow-300/50 via-amber-500/35 to-orange-500/40",
    surface: "from-amber-950/35 via-slate-900 to-slate-950",
  },
};

const MonsterCard = ({ monster, isSelected, onSelect }: MonsterCardProps) => {
  const { id, name, attack, hitPoints } = monster;

  const rarity = getRarity(hitPoints, attack);
  const styles = rarityStyles[rarity];
  const isLegendary = rarity === "Legendary";

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`${isSelected ? "Remove" : "Select"} ${name} ${isSelected ? "from" : "for"} battle`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(monster);
        }
      }}
      onClick={() => onSelect(monster)}
      className={`
        group
        cursor-pointer
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-lime-300
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-slate-950
        p-[2px]
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]

            ${
              isSelected
                ? "scale-[1.03] border-lime-300 shadow-[0_0_35px_rgba(163,230,53,0.55)]"
                : ""
            }
    
        ${styles.border}
        ${styles.hoverBorder}
        ${styles.glow}
      `}
    >
      {/* rarity gradient border */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${styles.gradient}
          opacity-80
          transition-opacity
          duration-300
          group-hover:opacity-100
        `}
      />

      {/* normal hover shine */}
      <div
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          h-full
          w-1/3
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[120%]
          group-hover:opacity-100
        "
      />

      {/* Legendary only */}
      {isLegendary && (
        <>
          <div className="legendary-shine pointer-events-none absolute inset-0 z-20 rounded-3xl" />
          <div className="legendary-sparkle pointer-events-none absolute inset-0 z-20 rounded-3xl" />
        </>
      )}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[22px]
          bg-gradient-to-b
          ${styles.surface}
          p-5
        "
      >
        {/* top row */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-lime-400
              "
            >
              Monster #{id}
            </p>

            <h2
              className="
                mt-1
                text-xl
                font-black
                tracking-wide
                text-white
              "
            >
              {name}
            </h2>
          </div>

          <span
            className={`
              rounded-full
              border
              px-3
              py-1
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              ${styles.badge}
            `}
          >
            {rarity}
          </span>
        </div>

        {/* portrait */}
        <div
          className="
            relative
            mb-5
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-gradient-to-br
            from-lime-400/10
            via-violet-500/10
            to-transparent
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.15),transparent_65%)]
            "
          />

          <img
            alt={name}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            className="
              relative
              mx-auto
              aspect-square
              w-full
              max-w-[220px]
              object-contain
              p-4
              drop-shadow-[0_0_18px_rgba(163,230,53,0.25)]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="
              rounded-2xl
              border
              border-red-400/20
              bg-red-500/5
              p-3
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-widest
                text-red-300/70
              "
            >
              Attack
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl">⚔️</span>
              <span className="text-2xl font-black text-red-300">{attack}</span>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-emerald-400/20
              bg-emerald-500/5
              p-3
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-widest
                text-emerald-300/70
              "
            >
              Hit Points
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl">❤️</span>

              <span className="text-2xl font-black text-emerald-300">
                {hitPoints}
              </span>
            </div>
          </div>
        </div>

        {/* HP bar */}
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-slate-500">
            <span>Vitality</span>
            <span>{hitPoints} HP</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-emerald-500
                to-lime-400
                shadow-[0_0_12px_rgba(163,230,53,0.5)]
              "
              style={{
                width: `${Math.min((hitPoints / 200) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

        {/* footer */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-white/5
            pt-4
            text-[10px]
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          <span>Creature Database</span>
          <span>★ #{id.toString().padStart(3, "0")}</span>
        </div>
      </div>

      {isSelected && (
        <div className="absolute right-4 top-4 z-30 rounded-full bg-lime-400 px-3 py-1 text-xs font-black text-black">
          SELECTED
        </div>
      )}
    </article>
  );
};

export default memo(MonsterCard);
