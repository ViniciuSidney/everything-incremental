import {
	unlockFirstMessage,
	unlockFirstVisualChange,
	unlockObservationSystem,
	unlockIdeasSystem,
	unlockGreaterAccumulation,
} from '../systems/milestoneEffects.js';

export const milestones = [
	{
		id: 'first-10-points',
		name: 'Primeiros sinais',
		description: 'Desbloqueia a primeira mensagem do jogo.',

		requirement: {
			metric: 'points',
			operator: '>=',
			value: 10,
		},

		message: 'Tem alguém aí?',
		effect: unlockFirstMessage,
	},

	{
		id: 'first-25-points',
		name: 'Forma inicial',
		description: 'Desbloqueia uma pequena evolução visual.',

		requirement: {
			metric: 'points',
			operator: '>=',
			value: 25,
		},

		message: 'Isso está mexendo comigo...',
		effect: unlockFirstVisualChange,
	},

	{
		id: 'observation',
		name: 'Observação',
		description: 'Desbloqueia o sistema de observação.',

		requirement: {
			metric: 'points',
			operator: '>=',
			value: 50,
		},

		message: 'Eu consigo sentir.',
		effect: unlockObservationSystem,
	},

	{
		id: 'first-100-points',
		name: 'Acúmulo maior',
		description: 'Alcançou 100 Pontos totais.',

		requirement: {
			metric: 'totalPointsEarned',
			operator: '>=',
			value: 100,
		},

		message: 'Por que tantos pontos?',
		effect: unlockGreaterAccumulation,
	},

	{
		id: 'ideas',
		name: 'Ideias',
		description: 'Desbloqueia o recurso Ideias e o registro de descobertas.',

		requirement: {
			metric: 'milestones',
			operator: '>=',
			value: 4,
		},

		message: 'Acho que isso está me dando algumas ideias...',
		effect: unlockIdeasSystem,
	},
];