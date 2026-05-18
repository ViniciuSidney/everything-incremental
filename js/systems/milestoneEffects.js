import { GAME_CONFIG } from '../config.js';
import { setVisualLevel } from './visual.js';
import { showMessage } from './messages.js';

export function unlockFirstMessage() {
	showMessage(GAME_CONFIG.messages.firstMessage);
}

export function unlockFirstVisualChange() {
	setVisualLevel(1);

	showMessage(GAME_CONFIG.messages.firstVisualChange);
}
