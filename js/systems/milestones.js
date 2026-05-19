import { gameState } from '../core/state.js';
import { GAME_CONFIG } from '../config.js';
import { milestones } from '../data/milestonesData.js';
import { addIdea } from './resources.js';
import { isSystemUnlocked } from './unlocks.js';

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

	registerDiscovery(milestone);

	milestone.effect(gameState);

	rewardIdeaForMilestone(milestone);

	console.log(`Marco desbloqueado: ${milestone.name}`);
}

function registerDiscovery(milestone) {
	gameState.discoveries.MilestoneHistory.push({
		id: milestone.id,
		name: milestone.name,
		description: milestone.description
	});
}

function rewardIdeaForMilestone(milestone) {
	if (!isSystemUnlocked('ideasUnlocked')) {
		return;
	}

	if (milestone.id === 'unlock-ideas') {
		return;
	}

	addIdea(GAME_CONFIG.resources.ideasPerMilestone);
}

export function isMilestoneUnlocked(milestoneId) {
	return gameState.progression.unlockedMilestones.includes(milestoneId);
}
