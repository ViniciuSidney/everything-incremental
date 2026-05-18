import { gameState } from "./state.js";

export function unlockSystem(systemName) {
  if (!(systemName in gameState.systems)) {
    console.warn(`Sistema "${systemName}" não existe.`);
    return false;
  }

  if (gameState.systems[systemName]) {
    return false;
  }

  gameState.systems[systemName] = true;
  return true;
}

export function isSystemUnlocked(systemName) {
  return Boolean(gameState.systems[systemName]);
}