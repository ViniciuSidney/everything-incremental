import { performMainButtonAction } from './core/actions.js';
import { startGameLoop } from './core/gameLoop.js';
import { updateUI } from './ui/ui.js';
import { updateVisualState } from './systems/visual.js';

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
