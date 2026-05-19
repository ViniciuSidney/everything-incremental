import { gameState } from '../core/state.js';

export function updateSilence() {
	const currentSilence = gameState.rhythm.timeSinceLastClick;

	if (currentSilence > gameState.silence.longestSilence) {
		gameState.silence.longestSilence = currentSilence;
	}
}

export function formatSilenceTime(value) {
	if (value === null || value === undefined) {
		return '-';
	}

	return `${value.toFixed(2)}s`;
}
