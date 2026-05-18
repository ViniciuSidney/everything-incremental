import { gameState } from "./state.js";

export function registerClick() {
  gameState.stats.totalClicks += 1;
}

export function getStat(statName) {
  return gameState.stats[statName] ?? 0;
}