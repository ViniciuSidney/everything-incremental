import { getResource } from "./resources.js";

const elements = {
  pointsCounter: document.getElementById("pointsCounter"),
};

export function updateUI() {
  updatePointsCounter();
}

function updatePointsCounter() {
  elements.pointsCounter.textContent = getResource("points");
}