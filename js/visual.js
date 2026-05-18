import { gameState } from "./state.js";

export function setVisualLevel(level) {
  if (level <= gameState.progression.visualLevel) {
    return;
  }

  gameState.progression.visualLevel = level;
  updateVisualState();
}

export function updateVisualState() {
  document.body.dataset.visualLevel = gameState.progression.visualLevel;
}