function getElement(selector) {
	const element = document.querySelector(selector);

	if (!element) {
		console.warn(`Elemento não encontrado: ${selector}`);
	}

	return element;
}

export const UI_ELEMENTS = {
	pointsCounter: getElement('#pointsCounter'),
	mainButton: getElement('#mainButton'),

	messageFeedArea: getElement('#messageFeedArea'),
	messageFeedList: getElement('#messageFeedList'),

	observationArea: getElement('#observationArea'),
	totalClicksDisplay: getElement('#totalClicksDisplay'),
	totalPointsEarnedDisplay: getElement('#totalPointsEarnedDisplay'),
	unlockedMilestonesDisplay: getElement('#unlockedMilestonesDisplay'),

	ideasArea: getElement('#ideasArea'),
	ideasCounter: getElement('#ideasCounter'),

	recordsArea: getElement('#recordsArea'),
	recordsList: getElement('#recordsList'),

	rhythmArea: getElement('#rhythmArea'),
	lastClickIntervalDisplay: getElement('#lastClickIntervalDisplay'),
	shortestClickIntervalDisplay: getElement('#shortestClickIntervalDisplay'),
	longestClickIntervalDisplay: getElement('#longestClickIntervalDisplay'),
	timeSinceLastClickDisplay: getElement('#timeSinceLastClickDisplay'),
	fastClickStreakDisplay: getElement('#fastClickStreakDisplay'),
	calmClickStreakDisplay: getElement('#calmClickStreakDisplay'),

	silenceArea: getElement('#silenceArea'),
	currentSilenceDisplay: getElement('#currentSilenceDisplay'),
	longestSilenceDisplay: getElement('#longestSilenceDisplay')
};
