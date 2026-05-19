import { GAME_CONFIG } from "../config.js";

export const gameState = {
	resources: {
		points: GAME_CONFIG.resources.initialPoints,
		ideas: GAME_CONFIG.resources.initialIdeas
	},

	stats: {
		totalClicks: 0,
		totalPointsEarned: 0
	},

	systems: {
		messages: false,
		visualEvolution: false,
		observation: false,
		ideas: false,
		records: false,
		rhythm: false,
		silence: false
	},

	progression: {
		unlockedMilestones: [],
		visualLevel: GAME_CONFIG.visual.initialLevel
	},

	messages: {
		feed: [],
		history: [],
		version: 0
	},

	records: {
		milestoneHistory: []
	},

	rhythm: {
		lastClickTime: null,
		lastClickInterval: 0,
		shortestClickInterval: null,
		longestClickInterval: 0,
		timeSinceLastClick: 0
	},

	silence: {
		longestSilence: 0
	}
};
