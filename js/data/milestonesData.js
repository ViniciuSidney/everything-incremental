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

		effects: [
			{
				type: 'showMessage',
				text: 'Tem alguém aí?',
			},
		],
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

		effects: [
			{
				type: 'setVisualLevel',
				level: 1,
			},
			{
				type: 'showMessage',
				text: 'Isso está mexendo comigo...',
			},
		],
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

		effects: [
			{
				type: 'unlockSystem',
				system: 'observation',
			},
			{
				type: 'showMessage',
				text: 'Eu consigo sentir.',
			},
		],
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

		effects: [
			{
				type: 'showMessage',
				text: 'Por que tantos pontos?',
			},
		],
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

		effects: [
			{
				type: 'unlockSystem',
				system: 'ideas',
			},
			{
				type: 'unlockSystem',
				system: 'discoveries',
			},
			{
				type: 'showMessage',
				text: 'Acho que isso está me dando algumas ideias...',
			},
		],
	},
];