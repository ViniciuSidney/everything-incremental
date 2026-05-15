import { gameState } from "./state.js";

export function updateVisualState() {
  const visualLevel = gameState.progression.visualLevel;

  document.body.dataset.visualLevel = visualLevel;
}

export function setVisualLevel(level) {
  gameState.progression.visualLevel = level;
  updateVisualState();
}