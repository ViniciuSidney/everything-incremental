import { getResource } from '../systems/resources.js';
import { isSystemUnlocked } from '../systems/unlocks.js';
import { getCurrentMessage, hasMessage } from '../systems/messages.js';

const elements = {
	pointsCounter: document.getElementById('pointsCounter'),
	messageArea: document.getElementById('messageArea'),
	gameMessage: document.getElementById('gameMessage'),
};

export function updateUI() {
	updatePointsCounter();
	updateMessageArea();
}

function updatePointsCounter() {
	elements.pointsCounter.textContent = getResource('points');
}

function updateMessageArea() {
	const messagesUnlocked = isSystemUnlocked('messagesUnlocked');

	elements.messageArea.hidden = !messagesUnlocked || !hasMessage();
	elements.gameMessage.textContent = getCurrentMessage();
}
