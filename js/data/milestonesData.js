import { GAME_CONFIG } from '../config.js';

import {
	unlockFirstMessage,
	unlockFirstVisualChange,
} from '../systems/milestoneEffects.js';

export const milestones = [
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
