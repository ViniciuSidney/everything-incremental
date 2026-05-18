import { gameState } from '../core/state.js';
import { milestones } from '../data/milestonesData.js';

export function checkMilestones() {
	milestones.forEach((milestone) => {
		const alreadyUnlocked = isMilestoneUnlocked(milestone.id);

		if (alreadyUnlocked) {
			return;
		}

		const conditionReached = milestone.condition(gameState);

		if (!conditionReached) {
			return;
		}

		unlockMilestone(milestone);
	});
}

function unlockMilestone(milestone) {
	gameState.progression.unlockedMilestones.push(milestone.id);

	milestone.effect(gameState);

	console.log(`Marco desbloqueado: ${milestone.name}`);
}

export function isMilestoneUnlocked(milestoneId) {
	return gameState.progression.unlockedMilestones.includes(milestoneId);
}
