import { gameState } from '../core/state.js';
import { unlockSystem } from './unlocks.js';

export function unlockMessages() {
	unlockSystem('messagesUnlocked');
}

export function setMessage(message) {
	gameState.messages.currentMessage = message;
}

export function clearMessage() {
	gameState.messages.currentMessage = '';
}

export function hasMessage() {
	return gameState.messages.currentMessage.trim() !== '';
}

export function getCurrentMessage() {
	return gameState.messages.currentMessage;
}

export function showMessage(message) {
	unlockMessages();
	setMessage(message);
}
