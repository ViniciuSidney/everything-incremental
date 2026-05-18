import { gameState } from '../core/state.js';
import { GAME_CONFIG } from '../config.js';

export function getResource(resourceName) {
	return gameState.resources[resourceName] ?? 0;
}

export function addResource(resourceName, amount) {
	if (!(resourceName in gameState.resources)) {
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

export function addPoint(amount = GAME_CONFIG.resources.pointsPerClick) {
	addResource('points', amount);

	gameState.stats.totalPointsEarned += amount;
}
