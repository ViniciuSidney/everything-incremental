import { addPoint } from "./resources.js";
import { registerClick } from "./stats.js";
import { checkMilestones } from "./milestones.js";
import { updateUI } from "./ui.js";

export function performMainButtonAction() {
  registerClick();
  addPoint(1);

  checkMilestones();
  updateUI();
}