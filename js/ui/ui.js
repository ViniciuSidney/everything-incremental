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
	const messagesUnlocked = isSystemUnlocked('messages');

	UI_ELEMENTS.messageArea.hidden = !messagesUnlocked || !hasMessage();
	UI_ELEMENTS.gameMessage.textContent = getCurrentMessage();
}

function updateObservationArea() {
	const observationUnlocked = isSystemUnlocked('observation');

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

function updateIdeasArea() {
	const ideasUnlocked = isSystemUnlocked('ideas');

	UI_ELEMENTS.ideasArea.hidden = !ideasUnlocked;

	if (!ideasUnlocked) {
		return;
	}

	UI_ELEMENTS.ideasCounter.textContent = getResource('ideas');
}

function updateDiscoveriesArea() {
	const discoveriesUnlocked = isSystemUnlocked('discoveries');

	UI_ELEMENTS.discoveriesArea.hidden = !discoveriesUnlocked;

	if (!discoveriesUnlocked) {
		return;
	}

	UI_ELEMENTS.discoveriesList.innerHTML = '';

	gameState.discoveries.unlockedMilestoneHistory.forEach((discovery) => {
		const item = document.createElement('li');

		item.innerHTML = `
      <strong>${discovery.name}</strong>
      <span>${discovery.description}</span>
    `;

		UI_ELEMENTS.discoveriesList.appendChild(item);
	});
}