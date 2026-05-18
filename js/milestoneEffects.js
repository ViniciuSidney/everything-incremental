import { gameState } from "./state.js";
import { unlockSystem } from "./unlocks.js";
import { setVisualLevel } from "./visual.js";

export function unlockFirstMessage() {
  unlockSystem("messagesUnlocked");

  gameState.messages.currentMessage = "Algo mudou. Ainda é pouco, mas já é alguma coisa.";
}

export function unlockFirstVisualChange() {
  unlockSystem("visualEvolutionUnlocked");

  setVisualLevel(1);

  gameState.messages.currentMessage = "A interface parece um pouco menos crua agora.";
}