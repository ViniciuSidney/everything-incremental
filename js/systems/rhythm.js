import {gameState} from '../core/state.js';

export function registerRhythmClick() {
	const currentTime = Date.now();
	const lastClickTime = gameState.rhythm.lastClickTime;

	if (lastClickTime !== null) {
		const intervalInSeconds = (currentTime - lastClickTime) / 1000;

		gameState.rhythm.lastClickInterval = intervalInSeconds;

		updateShortestClickInterval(intervalInSeconds);
		updateLongestClickInterval(intervalInSeconds);

		if (gameState.systems.rhythm) {
			updateClickPace(intervalInSeconds);
		}
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

function updateClickPace(intervalInSeconds) {
	const isFastClick = intervalInSeconds < 1;
	const isCalmClick = intervalInSeconds >= 2 && intervalInSeconds <= 4;

	if (isFastClick) {
		gameState.rhythm.fastClickStreak += 1;
	} else {
		gameState.rhythm.fastClickStreak = 0;
	}

	if (isCalmClick) {
		gameState.rhythm.calmClickStreak += 1;
	} else {
		gameState.rhythm.calmClickStreak = 0;
	}
}

export function formatRhythmTime(value) {
	if (value === null || value === undefined) {
		return '-';
	}

	return `${value.toFixed(2)}s`;
}
