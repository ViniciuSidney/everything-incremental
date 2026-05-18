import { checkMilestones } from '../systems/milestones.js';
import { updateUI } from '../ui/ui.js';

let lastUpdateTime = Date.now();

export function startGameLoop() {
	lastUpdateTime = Date.now();

	requestAnimationFrame(gameLoop);
}

function gameLoop() {
	const currentTime = Date.now();
	const deltaTime = (currentTime - lastUpdateTime) / 1000;

	lastUpdateTime = currentTime;

	updateGame(deltaTime);

	requestAnimationFrame(gameLoop);
}

function updateGame(deltaTime) {
	updatePassiveSystems(deltaTime);

	checkMilestones();
	updateUI();
}

function updatePassiveSystems(deltaTime) {
	// Sistemas passivos futuros entram aqui.
}
