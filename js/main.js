import { addPoint } from "./resources.js";
import { registerClick } from "./stats.js";
import { checkMilestones } from "./milestones.js";
import { updateUI } from "./ui.js";
import { updateVisualState } from "./visual.js";

const mainButton = document.getElementById("mainButton");

function initGame() {
  setupEvents();

  updateVisualState();
  updateUI();
}

function setupEvents() {
  mainButton.addEventListener("click", handleMainButtonClick);
}

function handleMainButtonClick() {
  registerClick();
  addPoint(1);

  checkMilestones();
  updateUI();
}

initGame();