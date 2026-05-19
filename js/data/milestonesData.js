import { GAME_CONFIG } from '../config.js';

import {
	unlockFirstMessage,
	unlockFirstVisualChange,
	unlockObservationSystem,
	unlockIdeasSystem,
	unlockGreaterAccumulation,
} from '../systems/milestoneEffects.js';

const GM = GAME_CONFIG.milestones; 

export const milestones = [
	{
		id: 'first-10-points',
		name: 'Primeiros sinais',
		description: 'Desbloqueia a primeira mensagem do jogo.',
		condition: (state) =>
			state.resources[GM.Message01.currency] >= GM.Message01.value,
		effect: unlockFirstMessage
	},

	{
		id: 'first-25-points',
		name: 'Forma inicial',
		description: 'Desbloqueia uma pequena evolução visual.',
		condition: (state) =>
			state.resources[GM.Visual01.currency] >= GM.Visual01.value,
		effect: unlockFirstVisualChange
	},

	{
		id: 'observation',
		name: 'Observação',
		description: 'Desbloqueia o sistema de observação.',
		condition: (state) =>
			state.resources[GM.Observation01.currency] >= GM.Observation01.value,
		effect: unlockObservationSystem
	},

	{
		id: 'ideas',
		name: 'Ideias',
		description: 'Desbloqueia o recurso Ideias e o registro de descobertas.',
		condition: (state) =>
			state.progression.unlockedMilestones.length >= GM.Ideas01.value,
		effect: unlockIdeasSystem
	},

	{
		id: 'first-100-points',
		name: 'Acúmulo maior',
		description: 'Alcançou 100 Pontos totais.',
		condition: (state) =>
			state.stats.totalPointsEarned >= GM.GreaterAccumulation01.value,
		effect: unlockGreaterAccumulation
	}
];
