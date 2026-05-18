import { getResource } from '../systems/resources.js';
import { isSystemUnlocked } from '../systems/unlocks.js';
import { getCurrentMessage, hasMessage } from '../systems/messages.js';
import { gameState } from '../core/state.js';

import { UI_ELEMENTS } from './uiElements.js';

export function updateUI() {
	updatePointsCounter();
	updateMessageArea();
	updateObservationArea();
}

function updatePointsCounter() {
	UI_ELEMENTS.pointsCounter.textContent = getResource('points');
}

function updateMessageArea() {
	const messagesUnlocked = isSystemUnlocked('messagesUnlocked');

	UI_ELEMENTS.messageArea.hidden = !messagesUnlocked || !hasMessage();
	UI_ELEMENTS.gameMessage.textContent = getCurrentMessage();
}

function updateObservationArea() {
	const observationUnlocked = isSystemUnlocked('observationUnlocked');

	UI_ELEMENTS.observationArea.hidden = !observationUnlocked;

	if (!observationUnlocked) {
		return;
	}

	UI_ELEMENTS.totalClicksDisplay.textContent = gameState.stats.totalClicks;
	UI_ELEMENTS.totalPointsEarnedDisplay.textContent =
		gameState.stats.totalPointsEarned;
	UI_ELEMENTS.unlockedMilestonesDisplay.textContent =
		gameState.progression.unlockedMilestones.length;
}
