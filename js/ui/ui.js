import {gameState} from '../core/state.js';
import {getResource} from '../systems/resources.js';
import {isSystemUnlocked} from '../systems/unlocks.js';
import {getMessageFeed, getMessagesVersion, hasMessages} from '../systems/messages.js';
import {formatRhythmTime} from '../systems/rhythm.js';
import {formatSilenceTime} from '../systems/silence.js';

import {UI_ELEMENTS} from './uiElements.js';

export function updateUI() {
	updatePointsCounter();
	updateMessageFeed();
	updateObservationArea();
	updateIdeasArea();
	updateRecordsArea();
	updateRhythmArea();
	updateSilenceArea();
}

function updatePointsCounter() {
	UI_ELEMENTS.pointsCounter.textContent = getResource('points');
}

let lastMessageFeedSignature = '';
let lastRenderedMessagesVersion = -1;
const renderedMessageElements = new Map();

function updateMessageFeed() {
	const messagesUnlocked = isSystemUnlocked('messages');
	const messageFeed = getMessageFeed();
	const hasVisibleMessages = messageFeed.length > 0;

	UI_ELEMENTS.messageFeedArea.hidden = !messagesUnlocked || !hasVisibleMessages;

	if (!messagesUnlocked || !hasVisibleMessages) {
		clearRenderedMessages();
		return;
	}

	const currentMessageIds = new Set();

	messageFeed.forEach((message) => {
		currentMessageIds.add(message.id);

		const existingElement = renderedMessageElements.get(message.id);

		if (!existingElement) {
			createMessageElement(message);
			return;
		}

		updateMessageElement(existingElement, message);
	});

	removeOldMessageElements(currentMessageIds);
}

function createMessageElement(message) {
	const item = document.createElement('li');

	item.dataset.messageId = message.id;
	item.classList.add('message-feed-item');
	item.textContent = message.text;

	if (message.isLeaving) {
		item.classList.add('is-leaving');
	}

	renderedMessageElements.set(message.id, item);
	UI_ELEMENTS.messageFeedList.appendChild(item);
}

function updateMessageElement(element, message) {
	if (message.isLeaving) {
		element.classList.add('is-leaving');
		return;
	}

	element.classList.remove('is-leaving');
}

function removeOldMessageElements(currentMessageIds) {
	renderedMessageElements.forEach((element, messageId) => {
		if (currentMessageIds.has(messageId)) {
			return;
		}

		element.remove();
		renderedMessageElements.delete(messageId);
	});
}

function clearRenderedMessages() {
	if (renderedMessageElements.size === 0) {
		return;
	}

	UI_ELEMENTS.messageFeedList.innerHTML = '';
	renderedMessageElements.clear();
}

function updateObservationArea() {
	const observationUnlocked = isSystemUnlocked('observation');

	UI_ELEMENTS.observationArea.hidden = !observationUnlocked;

	if (!observationUnlocked) {
		return;
	}

	UI_ELEMENTS.totalClicksDisplay.textContent = gameState.stats.totalClicks;
	UI_ELEMENTS.totalPointsEarnedDisplay.textContent = gameState.stats.totalPointsEarned;
	UI_ELEMENTS.unlockedMilestonesDisplay.textContent = gameState.progression.unlockedMilestones.length;
}

function updateIdeasArea() {
	const ideasUnlocked = isSystemUnlocked('ideas');

	UI_ELEMENTS.ideasArea.hidden = !ideasUnlocked;

	if (!ideasUnlocked) {
		return;
	}

	UI_ELEMENTS.ideasCounter.textContent = getResource('ideas');
}

function updateRecordsArea() {
	const recordsUnlocked = isSystemUnlocked('records');

	UI_ELEMENTS.recordsArea.hidden = !recordsUnlocked;

	if (!recordsUnlocked) {
		return;
	}

	UI_ELEMENTS.recordsList.innerHTML = '';

	gameState.records.milestoneHistory.forEach((milestone) => {
		const item = document.createElement('li');

		item.innerHTML = `
			<strong>${milestone.name}</strong>
			<span>${milestone.description}</span>
		`;

		UI_ELEMENTS.recordsList.appendChild(item);
	});
}

function updateRhythmArea() {
	const rhythmUnlocked = isSystemUnlocked('rhythm');

	UI_ELEMENTS.rhythmArea.hidden = !rhythmUnlocked;

	if (!rhythmUnlocked) {
		return;
	}

	const silenceUnlocked = isSystemUnlocked('silence');

	UI_ELEMENTS.lastClickIntervalDisplay.textContent = formatRhythmTime(gameState.rhythm.lastClickInterval);

	UI_ELEMENTS.shortestClickIntervalDisplay.textContent = formatRhythmTime(gameState.rhythm.shortestClickInterval);

	UI_ELEMENTS.longestClickIntervalRow.hidden = silenceUnlocked;
	UI_ELEMENTS.timeSinceLastClickRow.hidden = silenceUnlocked;

	if (!silenceUnlocked) {
		UI_ELEMENTS.longestClickIntervalDisplay.textContent = formatRhythmTime(gameState.rhythm.longestClickInterval);

		UI_ELEMENTS.timeSinceLastClickDisplay.textContent = formatRhythmTime(gameState.rhythm.timeSinceLastClick);
	}

	UI_ELEMENTS.fastClickStreakDisplay.textContent = gameState.rhythm.fastClickStreak;

	UI_ELEMENTS.calmClickStreakDisplay.textContent = gameState.rhythm.calmClickStreak;
}

function updateSilenceArea() {
	const silenceUnlocked = isSystemUnlocked('silence');

	UI_ELEMENTS.silenceArea.hidden = !silenceUnlocked;

	if (!silenceUnlocked) {
		return;
	}

	UI_ELEMENTS.currentSilenceDisplay.textContent = formatSilenceTime(gameState.rhythm.timeSinceLastClick);

	UI_ELEMENTS.longestSilenceDisplay.textContent = formatSilenceTime(gameState.silence.longestSilence);
}
