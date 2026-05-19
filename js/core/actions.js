import { addPoint } from '../systems/resources.js';
import { registerClick } from '../systems/stats.js';
import { registerRhythmClick } from '../systems/rhythm.js';

export function performMainButtonAction() {
	registerClick();
	registerRhythmClick();

	addPoint(1);
}