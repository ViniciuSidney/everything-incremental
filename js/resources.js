import { gameState } from "./state.js";

export function getResource(resourceName) {
  return gameState.resources[resourceName] ?? 0;
}

export function addResource(resourceName, amount) {
  if (!gameState.resources[resourceName]) {
    gameState.resources[resourceName] = 0;
  }

  gameState.resources[resourceName] += amount;
}

export function spendResource(resourceName, amount) {
  const currentAmount = getResource(resourceName);

  if (currentAmount < amount) {
    return false;
  }

  gameState.resources[resourceName] -= amount;
  return true;
}

export function addPoint() {
  addResource("points", 1);

  gameState.stats.totalClicks += 1;
  gameState.stats.totalPointsEarned += 1;
}