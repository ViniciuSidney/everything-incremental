import { addPoint } from './resources.js';
import { registerClick } from './stats.js';

export function performMainButtonAction() {
	registerClick();
	addPoint(1);
}
