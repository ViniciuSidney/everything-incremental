import { getResource } from '../systems/resources.js';
import { isSystemUnlocked } from '../systems/unlocks.js';
import { getCurrentMessage, hasMessage } from '../systems/messages.js';
import { UI_ELEMENTS } from './uiElements.js';

export function updateUI() {
	updatePointsCounter();
	updateMessageArea();
}

function updatePointsCounter() {
	UI_ELEMENTS.pointsCounter.textContent = getResource('points');
}

function updateMessageArea() {
	const messagesUnlocked = isSystemUnlocked('messagesUnlocked');

	UI_ELEMENTS.messageArea.hidden = !messagesUnlocked || !hasMessage();
	UI_ELEMENTS.gameMessage.textContent = getCurrentMessage();
}
