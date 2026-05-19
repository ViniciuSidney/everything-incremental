import { gameState } from '../core/state.js';

export function registerRhythmClick() {
	const currentTime = Date.now();
	const lastClickTime = gameState.rhythm.lastClickTime;

	if (lastClickTime !== null) {
		const intervalInSeconds = (currentTime - lastClickTime) / 1000;

		gameState.rhythm.lastClickInterval = intervalInSeconds;

		updateShortestClickInterval(intervalInSeconds);
		updateLongestClickInterval(intervalInSeconds);
	}

	gameState.rhythm.lastClickTime = currentTime;
	gameState.rhythm.timeSinceLastClick = 0;
}

export function updateRhythm(deltaTime) {
	if (gameState.rhythm.lastClickTime === null) {
		return;
	}

	gameState.rhythm.timeSinceLastClick += deltaTime;
}

function updateShortestClickInterval(intervalInSeconds) {
	const currentShortest = gameState.rhythm.shortestClickInterval;

	if (currentShortest === null || intervalInSeconds < currentShortest) {
		gameState.rhythm.shortestClickInterval = intervalInSeconds;
	}
}

function updateLongestClickInterval(intervalInSeconds) {
	if (intervalInSeconds > gameState.rhythm.longestClickInterval) {
		gameState.rhythm.longestClickInterval = intervalInSeconds;
	}
}

export function formatRhythmTime(value) {
	if (value === null || value === undefined) {
		return '-';
	}

	return `${value.toFixed(2)}s`;
}