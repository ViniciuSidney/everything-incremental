import { addResource, spendResource } from './resources.js';
import { showMessage } from './messages.js';
import { unlockSystem } from './unlocks.js';
import { setVisualLevel } from './visual.js';

export function runMilestoneEffects(state, milestone) {
	const effects = milestone.effects ?? [];

	effects.forEach((effect) => {
		runMilestoneEffect(state, milestone, effect);
	});

	runCustomMilestoneEffect(state, milestone);
}

function runMilestoneEffect(state, milestone, effect) {
	switch (effect.type) {
		case 'showMessage':
			runShowMessageEffect(milestone, effect);
			break;

		case 'unlockSystem':
			runUnlockSystemEffect(effect);
			break;

		case 'setVisualLevel':
			runSetVisualLevelEffect(effect);
			break;

		case 'addResource':
			runAddResourceEffect(effect);
			break;

		case 'spendResource':
			runSpendResourceEffect(effect);
			break;

		default:
			console.warn(`Tipo de efeito de marco não encontrado: ${effect.type}`);
	}
}

function runShowMessageEffect(milestone, effect) {
	const messageText = effect.text ?? milestone.message;

	if (!messageText) {
		console.warn(`Marco "${milestone.id}" tentou mostrar mensagem sem texto.`);
		return;
	}

	showMessage(messageText);
}

function runUnlockSystemEffect(effect) {
	if (!effect.system) {
		console.warn('Efeito unlockSystem sem system.');
		return;
	}

	unlockSystem(effect.system);
}

function runSetVisualLevelEffect(effect) {
	if (typeof effect.level !== 'number') {
		console.warn('Efeito setVisualLevel sem level numérico.');
		return;
	}

	setVisualLevel(effect.level);
}

function runAddResourceEffect(effect) {
	if (!effect.resource) {
		console.warn('Efeito addResource sem resource.');
		return;
	}

	const amount = effect.amount ?? 1;

	addResource(effect.resource, amount);
}

function runSpendResourceEffect(effect) {
	if (!effect.resource) {
		console.warn('Efeito spendResource sem resource.');
		return;
	}

	const amount = effect.amount ?? 1;

	const success = spendResource(effect.resource, amount);

	if (!success) {
		console.warn(
			`Não foi possível gastar ${amount} de "${effect.resource}" no efeito do marco.`
		);
	}
}

function runCustomMilestoneEffect(state, milestone) {
	if (typeof milestone.effect !== 'function') {
		return;
	}

	milestone.effect(state, milestone);
}