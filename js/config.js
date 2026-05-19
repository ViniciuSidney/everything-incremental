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
		Message01: {
			value: 10,
			currency: "points",
		},
		Visual01: {
			value: 25,
			currency: "points",
		},
		Observation01: {
			value: 50,
			currency: "points",
		},
	},

	visual: {
		initialLevel: 0,
	},

	loop: {
		updatesPerSecond: 60,
	},

	messages: {
		Message01: 'Tem alguém aí?',
		Visual01: 'Isso está mexendo comigo...',
		Observation01: 'Eu consigo sentir.',
	},
};
