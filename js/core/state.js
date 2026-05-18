import { GAME_CONFIG } from '../config.js';

export const gameState = {
	resources: {
		points: GAME_CONFIG.resources.initialPoints,
	},

	stats: {
		totalClicks: 0,
		totalPointsEarned: 0,
	},

	systems: {
		messagesUnlocked: false,
		visualEvolutionUnlocked: false,
	},

	progression: {
		unlockedMilestones: [],
		visualLevel: GAME_CONFIG.visual.initialLevel,
	},

	messages: {
		currentMessage: '',
	},
};
