import { setVisualLevel } from "./visual.js";
import { showMessage } from "./messages.js";

export function unlockFirstMessage() {
  showMessage("Algo mudou. Ainda é pouco, mas já é alguma coisa.");
}

export function unlockFirstVisualChange() {
  setVisualLevel(1);

  showMessage("A interface parece um pouco menos crua agora.");
}