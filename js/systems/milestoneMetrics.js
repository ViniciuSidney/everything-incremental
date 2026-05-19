export const milestoneMetrics = {
	points: (state) => state.resources.points,
	ideas: (state) => state.resources.ideas,
	ideias: (state) => state.resources.ideias,

	totalClicks: (state) => state.stats.totalClicks,
	totalPointsEarned: (state) => state.stats.totalPointsEarned,

	milestones: (state) => state.progression.unlockedMilestones.length,
	visualLevel: (state) => state.progression.visualLevel,
};

export function getMilestoneMetricValue(state, metric) {
	const metricReader = milestoneMetrics[metric];

	if (!metricReader) {
		console.warn(`Métrica de marco não encontrada: ${metric}`);
		return 0;
	}

	return metricReader(state);
}

export function checkMilestoneRequirement(state, requirement) {
	const currentValue = getMilestoneMetricValue(state, requirement.metric);
	const targetValue = requirement.value;
	const operator = requirement.operator ?? '>=';

	switch (operator) {
		case '>=':
			return currentValue >= targetValue;

		case '>':
			return currentValue > targetValue;

		case '<=':
			return currentValue <= targetValue;

		case '<':
			return currentValue < targetValue;

		case '===':
			return currentValue === targetValue;

		case '!==':
			return currentValue !== targetValue;

		default:
			console.warn(`Operador de marco não encontrado: ${operator}`);
			return false;
	}
}