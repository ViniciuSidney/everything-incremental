import { setVisualLevel } from './visual.js';
import { showMessage } from './messages.js';
import { unlockSystem } from './unlocks.js';

export function unlockFirstMessage(state, milestone) {
	showMilestoneMessage(milestone);
}

export function unlockFirstVisualChange(state, milestone) {
	setVisualLevel(1);

	showMilestoneMessage(milestone);
}

export function unlockObservationSystem(state, milestone) {
	unlockSystem('observation');

	showMilestoneMessage(milestone);
}

export function unlockIdeasSystem(state, milestone) {
	unlockSystem('ideas');
	unlockSystem('discoveries');

	showMilestoneMessage(milestone);
}

export function unlockGreaterAccumulation(state, milestone) {
	showMilestoneMessage(milestone);
}

function showMilestoneMessage(milestone) {
	if (!milestone.message) {
		return;
	}

	showMessage(milestone.message);
}