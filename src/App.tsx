import { useState, useEffect, useCallback, useMemo } from "react";
import BattleSelection from "./components/Battle-selection";
import SearchBox from "./components/Search-box";
import RadioButtons from "./components/Radio-buttons";
import CardList from "./components/Card-list";
import Footer from "./components/Footer";

import FilteredMonsters from "./utils/filter-monsters-utils";
import type { Monster } from "./types/monster";

import "./App.css";
import selectedMonstersHandler from "./utils/selected-monsters-utils";
import handleFight from "./utils/handle-fight.utils";

type ApiUser = {
  id: number;
  name: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
};

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [rarityFilter, setRarityFilter] = useState<
    "All" | "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
  >("All");
  const [sortOrder, setSortOrder] = useState("default");

  const [selectedMonsters, setSelectedMonsters] = useState<Monster[]>([]);

  const [winner, setWinner] = useState<Monster | null>(null);
  const [isFighting, setIsFighting] = useState(false);

  useEffect(() => {
    if (!isFighting) return;

    const timer = window.setTimeout(() => {
      handleFight({ selectedMonsters, setWinner, setSelectedMonsters });
      setIsFighting(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [isFighting, selectedMonsters]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: ApiUser[]) => {
        const transformedMonsters = data.map((user) => ({
          id: user.id,
          name: user.name,
          attack: Math.round(Math.abs(Number(user.address.geo.lat))),
          hitPoints: Math.round(Math.abs(Number(user.address.geo.lng))),
        }));

        setMonsters(transformedMonsters);
      });
  }, []);

  const filteredMonsters = useMemo(
    () => FilteredMonsters(monsters, searchField, rarityFilter, sortOrder),
    [monsters, searchField, rarityFilter, sortOrder],
  );

  const handleSelectMonster = useCallback((monster: Monster) => {
    if (isFighting) return;
    selectedMonstersHandler(monster, setSelectedMonsters);
  }, [isFighting]);

  const clearSelectedMonsters = useCallback(() => {
    if (isFighting) return;
    setSelectedMonsters([]);
  }, [isFighting]);

  const startFight = () => {
    if (isFighting || selectedMonsters.length !== 2) return;
    setWinner(null);
    setIsFighting(true);
  };

  return (
    <>
      <section
        id="center"
        className="
          min-h-screen
          bg-gradient-to-br
          from-slate-950
          via-purple-950
          to-black
          p-10
        "
      >
        <h1
          className="
            mb-8
            text-5xl
            font-black
            uppercase
            tracking-wider
            text-lime-300
            drop-shadow-[0_0_18px_rgba(163,230,53,0.5)]
          "
        >
          Monster Hunter
        </h1>

        <SearchBox
          searchField={searchField}
          setSearchField={setSearchField}
          placeholder="search monsters"
          className="search-box"
        />

        <RadioButtons
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          rarityFilter={rarityFilter}
          setRarityFilter={setRarityFilter}
        />

        <BattleSelection
          selectedMonsters={selectedMonsters}
          onSelectMonster={handleSelectMonster}
          onClear={clearSelectedMonsters}
          isFighting={isFighting}
        />

        {selectedMonsters.length === 2 && (
          <button
            onClick={startFight}
            disabled={isFighting}
            aria-label={isFighting ? "Battle in progress" : "Start battle"}
            className="
              mb-8
              disabled:opacity-50
              disabled:cursor-wait
              rounded-2xl
              border
              border-red-400/50
              bg-red-500/10
              px-8
              py-4
              text-lg
              font-black
              uppercase
              tracking-wider
              text-red-300
              transition
              hover:bg-red-500/20
              hover:shadow-[0_0_30px_rgba(248,113,113,0.4)]
            "
          >
            ⚔️ Fight
          </button>
        )}

        {winner && (
          <div className="mb-8 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
            <p className="text-sm uppercase tracking-widest text-amber-300">
              Winner
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              {winner.name}
            </h2>
          </div>
        )}

        <CardList
          filteredMonsters={filteredMonsters}
          selectedMonsters={selectedMonsters}
          onSelectMonster={handleSelectMonster}
        />
      </section>

      <Footer />
    </>
  );
}

export default App;
