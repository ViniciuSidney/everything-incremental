export const milestones = [
	{
		id: '3-clicks',
		name: 'Percepção',
		description: 'Há algo aqui...',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 3
		},

		effects: [
			{
				type: 'showMessage',
				text: '...'
			}
		]
	},

	{
		id: 'first-10-clicks',
		name: 'Primeiros sinais',
		description: 'Um sinal surge no vazio.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 10
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Tem alguém aí?'
			}
		]
	},

	{
		id: 'first-25-clicks',
		name: 'Forma inicial',
		description: 'Ocasionando reações no ambiente.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 25
		},

		effects: [
			{
				type: 'setVisualLevel',
				level: 1
			},
			{
				type: 'showMessage',
				text: 'Isso está mexendo comigo...'
			}
		]
	},

	{
		id: 'observation',
		name: 'Observação',
		description: 'Algo começa a perceber padrões.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 50
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'observation'
			},
			{
				type: 'showMessage',
				text: 'Eu consigo sentir.'
			}
		]
	},

	{
		id: 'ideas',
		name: 'Surgem Ideias',
		description: 'Ideias surgem a partir das experiências.',

		condition: (state) => {
			return state.stats.totalClicks >= 100 && state.progression.unlockedMilestones.length >= 4;
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'ideas'
			},

			{
				type: 'showMessage',
				text: 'Por que tantos pontos? Isso me faz pensar...'
			}
		]
	},

	{
		id: 'records',
		name: 'Registros',
		description: 'É melhor deixar registrado.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 200
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'records'
			},
			{
				type: 'showMessage',
				text: 'É melhor registrar isso.'
			}
		]
	},

	{
		id: 'first-250-clicks',
		name: 'Insistência',
		description: 'A repetição começa a formar um padrão.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 250
		},

		effects: [
			{
				type: 'showMessage',
				text: 'É interessante como você continua nisso.'
			}
		]
	},

	{
		id: 'first-300-clicks',
		name: 'Persistência',
		description: 'O acúmulo já não parece acidental.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 300
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Será proposital?'
			}
		]
	},

	{
		id: 'i-have-ideas',
		name: 'Pensamento Inicial',
		description: 'As ideias começam a se organizar.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 350
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Há uma conexão de ideias aqui...'
			}
		]
	},

	{
		id: 'first-400-clicks',
		name: 'Padrão de cliques',
		description: 'Percebendo padrões.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 400
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Acho que percebi algo...'
			}
		]
	},

	{
		id: 'rhythm-idea',
		name: 'Ritmo',
		description: 'Há um padrão na repetição.',

		requirement: {
			metric: 'ideas',
			operator: '>=',
			value: 5
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'rhythm'
			},
			{
				type: 'showMessage',
				text: 'Existe um ritmo nisso.'
			}
		]
	},

	{
		id: 'rushed-clicks',
		name: 'Pressa',
		description: 'A rapidez começa a chamar atenção.',

		condition: (state) => {
			return state.systems.rhythm && state.rhythm.fastClickStreak >= 150;
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Acalme-se, por favor, tenho que pensar!'
			}
		]
	},

	{
		id: 'cadence',
		name: 'Cadência',
		description: 'Há espaço entre um sinal e outro.',

		condition: (state) => {
			return state.systems.rhythm && state.rhythm.calmClickStreak >= 3;
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'cadence'
			},
			{
				type: 'showMessage',
				text: 'Preciso de um tempo para processar...'
			}
		]
	},

	{
		id: 'silence',
		name: 'Silêncio',
		description: 'A ausência também começa a ser percebida.',

		condition: (state) => {
			return state.systems.rhythm && state.rhythm.timeSinceLastClick >= 20;
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'silence'
			},
			{
				type: 'showMessage',
				text: 'Você para... mas há algo que continua...'
			}
		]
	}
];
