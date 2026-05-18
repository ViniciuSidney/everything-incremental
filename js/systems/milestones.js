import { gameState } from '../core/state.js';
import { GAME_CONFIG } from '../config.js';

import {
	unlockFirstMessage,
	unlockFirstVisualChange,
} from './milestoneEffects.js';

const milestones = [
	{
		id: 'first-10-points',
		name: 'Primeiros sinais',
		description: 'Desbloqueia a primeira mensagem do jogo.',
		condition: (state) =>
			state.resources.points >= GAME_CONFIG.milestones.firstMessagePoints,
		effect: unlockFirstMessage,
	},

	{
		id: 'first-25-clicks',
		name: 'Forma inicial',
		description: 'Desbloqueia uma pequena evolução visual.',
		condition: (state) =>
			state.stats.totalClicks >= GAME_CONFIG.milestones.firstVisualClicks,
		effect: unlockFirstVisualChange,
	},
];

export function checkMilestones() {
	milestones.forEach((milestone) => {
		const alreadyUnlocked = gameState.progression.unlockedMilestones.includes(
			milestone.id,
		);

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
