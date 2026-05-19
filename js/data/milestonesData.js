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
		id: 'first-100-clicks',
		name: 'Acumulando',
		description: 'Para que acumular?',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 100
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Por que tantos pontos?'
			}
		]
	},

	{
		id: 'ideas',
		name: 'Surgem Ideias',
		description: 'Ideias surgem a partir das experiências.',

		requirement: {
			metric: 'milestones',
			operator: '>=',
			value: 5
		},

		effects: [
			{
				type: 'unlockSystem',
				system: 'ideas'
			},

			{
				type: 'showMessage',
				text: 'Isso me faz pensar...'
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
				text: 'É interessante como você continua fazendo isso.'
			}
		]
	},

	{
		id: 'first-400-clicks',
		name: 'Ritmo',
		description: 'Há um padrão na repetição.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 400
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
		id: 'first-500-clicks',
		name: 'Persistência',
		description: 'O acúmulo já não parece acidental.',

		requirement: {
			metric: 'totalClicks',
			operator: '>=',
			value: 500
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Será proposital?'
			}
		]
	},

	{
		id: 'first-4-ideas',
		name: 'Pensamento Inicial',
		description: 'As ideias começam a se organizar.',

		requirement: {
			metric: 'ideas',
			operator: '>=',
			value: 4
		},

		effects: [
			{
				type: 'showMessage',
				text: 'Há uma conexão de ideias aqui.'
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
				text: 'Você pode até parar, mas o resto continua.'
			}
		]
	}
];
