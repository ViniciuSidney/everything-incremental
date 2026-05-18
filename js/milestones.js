import { gameState } from "./state.js";
import {
  unlockFirstMessage,
  unlockFirstVisualChange,
} from "./milestoneEffects.js";

const milestones = [
  {
    id: "first-10-points",
    name: "Primeiros sinais",
    description: "Desbloqueia a primeira mensagem do jogo.",
    condition: (state) => state.resources.points >= 10,
    effect: unlockFirstMessage,
  },

  {
    id: "first-25-clicks",
    name: "Forma inicial",
    description: "Desbloqueia uma pequena evolução visual.",
    condition: (state) => state.stats.totalClicks >= 25,
    effect: unlockFirstVisualChange,
  },
];

export function checkMilestones() {
  milestones.forEach((milestone) => {
    const alreadyUnlocked = gameState.progression.unlockedMilestones.includes(
      milestone.id
    );

    if (alreadyUnlocked) {
      return;
    }

    const conditionReached = milestone.condition(gameState);

    if (!conditionReached) {
      return;
    }

    unlockMilestone(milestone);
  });
}

function unlockMilestone(milestone) {
  gameState.progression.unlockedMilestones.push(milestone.id);

  milestone.effect(gameState);

  console.log(`Marco desbloqueado: ${milestone.name}`);
}