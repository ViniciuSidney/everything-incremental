# Guia de Criação de Milestones

Este documento explica como criar, ajustar e organizar milestones no projeto **Nothing-to-Everything Incremental**.

A ideia principal é que cada milestone seja criada em um único lugar: `js/data/milestonesData.js`.

---

## Estrutura básica de uma milestone

```js
{
	id: 'milestone-id',
	name: 'Nome do Marco',
	description: 'Descrição breve do que este marco representa.',

	requirement: {
		metric: 'points',
		operator: '>=',
		value: 100,
	},

	effects: [
		{
			type: 'showMessage',
			text: 'Mensagem exibida ao desbloquear este marco.',
		},
	],
}
```

## Campos principais

| Campo         | Função                                               |
| ------------- | ---------------------------------------------------- |
| `id`          | Identificador único do marco                         |
| `name`        | Nome exibido no jogo                                 |
| `description` | Descrição usada no registro de Marcos                |
| `requirement` | Condição simples para desbloquear o marco            |
| `condition`   | Condição personalizada, usada em casos especiais     |
| `effects`     | Lista de efeitos executados ao desbloquear o marco   |
| `effect`      | Função personalizada opcional para efeitos complexos |

## Padrão de nomes para IDs

Use IDs curtos, em inglês, com letras minúsculas e hífens.

### Exemplos

```js
"first-10-points";
"first-100-clicks";
"unlock-observation";
"unlock-ideas";
"lucky-seven";
```

Evite IDs vagos como:

```js
"marco1";
"teste";
"novo";
```

## Usando requirement

O campo requirement é usado para marcos simples baseados em valores.

```js
requirement: {
	metric: 'points',
	operator: '>=',
	value: 100,
}
```

Isso significa:

> Desbloquear quando a métrica `points` for maior ou igual a `100`.

## Métricas disponíveis

As métricas ficam registradas em `js/systems/milestoneMetrics.js`.

### Métricas iniciais

```js
points;
ideas;
totalClicks;
totalPointsEarned;
milestones;
visualLevel;
```

### Exemplos de uso

```js
metric: "points";
```

Usado para observar os Pontos atuais.

```js
metric: "ideas";
```

Usado para observar a quantidade atual de Ideias.

```js
metric: "totalClicks";
```

Usado para observar o total de cliques.

```js
metric: "totalPointsEarned";
```

Usado para observar o total de Pontos ganhos durante a partida.

```js
metric: "milestones";
```

Usado para observar quantos marcos já foram desbloqueados.

```js
metric: "visualLevel";
```

## Operadores disponíveis

Usado para observar o nível visual atual da interface.

| Operador | Significado    |
| -------- | -------------- |
| `>=`     | Maior ou igual |
| `>`      | Maior que      |
| `<=`     | Menor ou igual |
| `<`      | Menor que      |
| `===`    | Igual          |
| `!==`    | Diferente      |

### Exemplo

```js
requirement: {
	metric: 'totalClicks',
	operator: '>=',
	value: 100,
}
```

## Marco com condição personalizada

Use `condition` quando `requirement` não for suficiente.

```js
{
	id: 'lucky-seven',
	name: 'Número favorável',
	description: 'Alcançou uma quantidade de Pontos terminada em 7.',

	condition: (state) => {
		return state.resources.points > 0 && state.resources.points % 10 === 7;
	},

	effects: [
		{
			type: 'showMessage',
			text: 'Esse número parece diferente.',
		},
	],
}
```

## Marco com efeito personalizado

Use `effect` quando `effects` não for suficiente.

```js
{
	id: 'strange-reaction',
	name: 'Reação estranha',
	description: 'Algo reage de forma incomum.',

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
}
```

Nesse caso, a função `unlockStrangeReaction` deve ser criada em:

```js
js / systems / milestoneEffects.js;
```

## Checklist para criar uma nova milestone

Antes de adicionar um novo marco, responda:

```
[ ] Qual é o ID único?
[ ] Qual é o nome exibido?
[ ] Qual é a descrição?
[ ] O marco usa requirement ou condition?
[ ] Qual métrica será observada?
[ ] Qual valor é necessário?
[ ] Quais efeitos serão executados?
[ ] Precisa desbloquear algum sistema?
[ ] Precisa mostrar mensagem?
[ ] Precisa de efeito personalizado?
```

## Fluxo interno dos marcos

```
1. milestones.js verifica todos os marcos.
2. Se o marco já foi desbloqueado, ele é ignorado.
3. Se a condição for atingida, o marco é desbloqueado.
4. O marco entra em progression.unlockedMilestones.
5. O marco entra em records.milestoneHistory.
6. milestoneEffectRunner.js executa os efeitos.
7. Se Ideas já estiver desbloqueado, o marco pode conceder Ideas.
8. A UI atualiza as informações na tela.
```
