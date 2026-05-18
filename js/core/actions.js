import { addPoint } from '../systems/resources.js';
import { registerClick } from '../systems/stats.js';

export function performMainButtonAction() {
	registerClick();
	addPoint(1);
}
