import { addPoint } from "./resources.js";
import { updateUI } from "./ui.js";
import { checkProgression } from "./progression.js";
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
  addPoint();

  checkProgression();
  updateUI();
}

initGame();