import { GAME_CONFIG } from '../config.js';
import { gameState } from '../core/state.js';
import { unlockSystem } from './unlocks.js';

export function unlockMessages() {
	unlockSystem('messages');
}

export function showMessage(text) {
	unlockMessages();

	const message = createMessage(text);

	gameState.messages.feed.push(message);
	gameState.messages.history.push(message);

	limitVisibleMessages();
	scheduleMessageRemoval(message.id);
}

export function getMessageFeed() {
	return gameState.messages.feed;
}

export function hasMessages() {
	return gameState.messages.feed.length > 0;
}

export function clearMessages() {
	gameState.messages.feed = [];
}

function createMessage(text) {
	return {
		id: `${Date.now()}-${Math.random()}`,
		text,
		createdAt: Date.now(),
		isLeaving: false,
	};
}

function scheduleMessageRemoval(messageId) {
	setTimeout(() => {
		startMessageExit(messageId);
	}, GAME_CONFIG.ui.messageDuration);
}

function startMessageExit(messageId) {
	const message = gameState.messages.feed.find((item) => {
		return item.id === messageId;
	});

	if (!message) {
		return;
	}

	message.isLeaving = true;

	setTimeout(() => {
		removeMessage(messageId);
	}, GAME_CONFIG.ui.messageExitDuration);
}

function removeMessage(messageId) {
	gameState.messages.feed = gameState.messages.feed.filter((message) => {
		return message.id !== messageId;
	});
}

function limitVisibleMessages() {
	const maxVisibleMessages = GAME_CONFIG.ui.maxVisibleMessages;

	while (gameState.messages.feed.length > maxVisibleMessages) {
		const oldestMessage = gameState.messages.feed[0];

		startMessageExit(oldestMessage.id);
		break;
	}
}