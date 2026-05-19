import { GAME_CONFIG } from '../config.js';
import { setVisualLevel } from './visual.js';
import { showMessage } from './messages.js';
import { unlockSystem } from './unlocks.js';

export function unlockFirstMessage() {
	showMessage(GAME_CONFIG.messages.Message01);
}

export function unlockFirstVisualChange() {
	setVisualLevel(1);

	showMessage(GAME_CONFIG.messages.Visual01);
}

export function unlockObservationSystem() {
	unlockSystem('observation');

	showMessage(GAME_CONFIG.messages.Observation01);
}

export function unlockIdeasSystem() {
	unlockSystem('ideas');
	unlockSystem('discoveries');

	showMessage(GAME_CONFIG.messages.Ideas01);
}

export function unlockGreaterAccumulation() {
	showMessage(GAME_CONFIG.messages.GreaterAccumulation01);
}