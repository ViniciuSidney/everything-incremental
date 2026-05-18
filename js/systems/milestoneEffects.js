import { GAME_CONFIG } from '../config.js';
import { setVisualLevel } from './visual.js';
import { showMessage } from './messages.js';
import { unlockSystem } from './unlocks.js';

export function unlockFirstMessage() {
	showMessage(GAME_CONFIG.messages.firstMessage);
}

export function unlockFirstVisualChange() {
	setVisualLevel(1);

	showMessage(GAME_CONFIG.messages.firstVisualChange);
}

export function unlockObservationSystem() {
	unlockSystem('observation');

	showMessage('O jogo começou a observar o que você faz.');
}