import {GAME_CONFIG} from '../config.js';
import {gameState} from '../core/state.js';
import {milestones} from '../data/milestonesData.js';

import {addIdea} from './resources.js';
import {isSystemUnlocked} from './unlocks.js';
import {checkMilestoneRequirement} from './milestoneMetrics.js';
import {runMilestoneEffects} from './milestoneEffectRunner.js';

export function checkMilestones() {
	milestones.forEach((milestone) => {
		const alreadyUnlocked = isMilestoneUnlocked(milestone.id);

		if (alreadyUnlocked) {
			return;
		}

		const conditionReached = checkMilestoneCondition(milestone);

		if (!conditionReached) {
			return;
		}

		unlockMilestone(milestone);
	});
}

function checkMilestoneCondition(milestone) {
	if (typeof milestone.condition === 'function') {
		return milestone.condition(gameState);
	}

	if (milestone.requirement) {
		return checkMilestoneRequirement(gameState, milestone.requirement);
	}

	console.warn(`Marco sem condição válida: ${milestone.id}`);
	return false;
}

function unlockMilestone(milestone) {
	gameState.progression.unlockedMilestones.push(milestone.id);

	registerMilestoneRecord(milestone);
	runMilestoneEffects(gameState, milestone);
	rewardIdeaForMilestone(milestone);

	console.log(`Marco desbloqueado: ${milestone.name}`);
}

function registerMilestoneRecord(milestone) {
	gameState.records.milestoneHistory.unshift({
		id: milestone.id,
		name: milestone.name,
		description: milestone.description
	});
}

function rewardIdeaForMilestone(milestone) {
	if (!isSystemUnlocked('ideas')) {
		return;
	}

	if (milestone.id === 'ideas') {
		return;
	}

	if (milestoneGivesNoIdeas(milestone)) {
		return;
	}

	addIdea(GAME_CONFIG.resources.ideasPerMilestone);
}

function milestoneGivesNoIdeas(milestone) {
	if (milestone.givesIdeas === false) {
		return true;
	}

	const effects = milestone.effects ?? [];

	const unlocksSystem = effects.some((effect) => {
		return effect.type === 'unlockSystem';
	});

	return unlocksSystem;
}

export function isMilestoneUnlocked(milestoneId) {
	return gameState.progression.unlockedMilestones.includes(milestoneId);
}