import { gameState } from '../core/state.js';

export function registerClick() {
	gameState.stats.totalClicks += 1;
}

export function getStat(statName) {
	return gameState.stats[statName] ?? 0;
}
