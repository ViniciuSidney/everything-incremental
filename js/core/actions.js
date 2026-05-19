import { addPoint } from '../systems/resources.js';
import { registerClick } from '../systems/stats.js';
import { registerRhythmClick } from '../systems/rhythm.js';
import { GAME_CONFIG } from '../config.js';

export function performMainButtonAction() {
	registerClick();
	registerRhythmClick();

	addPoint(GAME_CONFIG.resources.pointsPerClick);
}