export const GAME_CONFIG = {
	game: {
		name: 'Nothing-to-Everything Incremental',
		version: '0.1.0',
	},

	resources: {
		initialPoints: 0,
		pointsPerClick: 1,
	},

	milestones: {
		firstMessagePoints: 10,
		firstVisualClicks: 25,
		observationClicks: 50,
	},

	visual: {
		initialLevel: 0,
	},

	loop: {
		updatesPerSecond: 60,
	},

	messages: {
		firstMessage: 'Algo mudou. Ainda é pouco, mas já é alguma coisa.',
		firstVisualChange: 'A interface parece um pouco menos crua agora.',
	},
};
