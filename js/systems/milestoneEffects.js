import { showMessage } from './messages.js';

export function showStrangeDebugMessage() {
	showMessage('Algo estranho aconteceu.');
}

// Efeitos personalizados de marcos ficam aqui.
// Use este arquivo apenas quando os efeitos declarativos não forem suficientes.

/*
Em milestoneEffects.js

import { showMessage } from './messages.js';
import { addResource } from './resources.js';

export function unlockStrangeReaction(state, milestone) {
	const points = state.resources.points;

	if (points % 2 === 0) {
		addResource('ideias', 2);
		showMessage('O número par respondeu.');
		return;
	}

	showMessage('O número ímpar resistiu.');
}
*/

/*
Em milestonesData.js

import { unlockStrangeReaction } from '../systems/milestoneEffects.js';

export const milestones = [
	{
		id: 'strange-reaction',
		name: 'Reação Estranha',
		description: 'Algo reage ao valor atual dos pontos.',

		requirement: {
			metric: 'points',
			operator: '>=',
			value: 200,
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Algo parece instável.',
			},
		],

		effect: unlockStrangeReaction,
	},
];
*/