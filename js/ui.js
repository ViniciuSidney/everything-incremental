import { getResource } from "./resources.js";
import { isSystemUnlocked } from "./unlocks.js";
import { gameState } from "./state.js";

const elements = {
  pointsCounter: document.getElementById("pointsCounter"),
  messageArea: document.getElementById("messageArea"),
  gameMessage: document.getElementById("gameMessage"),
};

export function updateUI() {
  updatePointsCounter();
  updateMessageArea();
}

function updatePointsCounter() {
  elements.pointsCounter.textContent = getResource("points");
}

function updateMessageArea() {
  const messagesUnlocked = isSystemUnlocked("messagesUnlocked");
  const hasMessage = gameState.messages.currentMessage.trim() !== "";

  elements.messageArea.hidden = !messagesUnlocked || !hasMessage;
  elements.gameMessage.textContent = gameState.messages.currentMessage;
}