import { performMainButtonAction } from './actions.js';
import { startGameLoop } from './gameLoop.js';
import { updateUI } from './ui.js';
import { updateVisualState } from './visual.js';

const mainButton = document.getElementById('mainButton');

function initGame() {
	setupEvents();

	updateVisualState();
	updateUI();

	startGameLoop();
}

function setupEvents() {
	mainButton.addEventListener('click', performMainButtonAction);
}

initGame();
