# Robots React — Monster Hunter

A React app featuring monster cards, search, filters, and battles between two characters. User data from JSONPlaceholder is transformed into monsters with attack and health stats, while RoboHash provides their images.

## Features

- Case-insensitive search by name.
- Rarity filters: Common, Uncommon, Rare, Epic, and Legendary.
- Sort by highest attack, highest or lowest health, and name (A–Z / Z–A).
- Select two monsters and reveal the winner of a battle.
- Responsive card grid with rarity colors and special effects for Legendary monsters.

## Tech Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, and ESLint.

## Getting Started

Requires Node.js `20.19+` in the 20.x series or `22.12+`, and npm. An internet connection is required to load data and images.

From the directory containing `package.json`, run:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite in your terminal. No API keys or `.env` file are required.

### Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Run TypeScript checks and generate a production build in `dist/`. |
| `npm run preview` | Preview the production build locally after running `npm run build`. |
| `npm run lint` | Check the code with ESLint. |

## Usage

1. Search for a monster or use the rarity filter.
2. Choose your preferred sort order.
3. Click two different cards. Click a selected card again to deselect it.
4. Click **Fight**, which appears when two monsters are selected.
5. View the winner and select a new pair for the next battle.

### Stats and Rarity

The `id` and `name` fields come from JSONPlaceholder users. The `attack` stat is calculated from the absolute value of the user's latitude (`lat`), and `hitPoints` from the absolute value of their longitude (`lng`), both rounded to the nearest integer.

Rarity is determined by the sum of `attack + hitPoints`:

| Total Power | Rarity |
| --- | --- |
| Below 90 | Common |
| 90–99 | Uncommon |
| 100–139 | Rare |
| 140–189 | Epic |
| 190 and above | Legendary |

### Battle Rules

Each monster receives a score:

```text
score = attack × 1.3 + hitPoints
```

The monster with the higher score wins. A tie displays no winner. Selections are cleared after every battle. The calculation is deterministic, with no randomness or successive combat rounds.

## Project Structure

```text
public/                            Static files
src/
├── assets/                        Local images and graphics
├── components/
│   ├── Card-list.tsx               Card grid
│   ├── Monster-card.tsx            Monster card and stats
│   ├── Radio-buttons.tsx           Sort and rarity dropdowns
│   └── Search-box.tsx              Search input
├── types/
│   └── monster.ts                 Monster type
├── utils/
│   ├── filter-monsters-utils.ts    Search, filtering, and sorting
│   ├── handle-fight.utils.ts       Winner calculation
│   ├── monster-utils.ts            Rarity calculation
│   └── selected-monsters-utils.ts  Selection management
├── App.tsx                        Data fetching and app state
├── App.css                        App styles
├── index.css                      Global styles
└── main.tsx                       React entry point
```

## External Data

- JSONPlaceholder: `https://jsonplaceholder.typicode.com/users`
- RoboHash: `https://robohash.org/{id}?set=set2&size=180x180`

The app runs in the browser without its own backend. Selections and battle results are stored only in memory and reset when the page is refreshed. There is currently no dedicated loading indicator or error message for API failures.
