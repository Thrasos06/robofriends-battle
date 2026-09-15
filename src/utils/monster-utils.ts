type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

const getRarity = (hitPoints: number, attack: number): Rarity => {
  const power = attack + hitPoints;
  if (power >= 190) return "Legendary";
  if (power >= 140) return "Epic";
  if (power >= 100) return "Rare";
  if (power >= 90) return "Uncommon";
  return "Common";
};

export default getRarity;
