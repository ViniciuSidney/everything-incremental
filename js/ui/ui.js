import { gameState } from "../core/state.js";
import { getResource } from "../systems/resources.js";
import { isSystemUnlocked } from "../systems/unlocks.js";
import {
  getMessageFeed,
  getMessagesVersion,
  hasMessages,
} from "../systems/messages.js";
import { UI_ELEMENTS } from "./uiElements.js";

export function updateUI() {
  updatePointsCounter();
  updateMessageFeed();
  updateObservationArea();
  updateIdeasArea();
  updateRecordsArea();
}

function updatePointsCounter() {
  UI_ELEMENTS.pointsCounter.textContent = getResource("points");
}

let lastMessageFeedSignature = "";
let lastRenderedMessagesVersion = -1;

function updateMessageFeed() {
  const messagesUnlocked = isSystemUnlocked("messages");
  const hasVisibleMessages = hasMessages();

  UI_ELEMENTS.messageFeedArea.hidden = !messagesUnlocked || !hasVisibleMessages;

  if (!messagesUnlocked || !hasVisibleMessages) {
    if (lastRenderedMessagesVersion !== getMessagesVersion()) {
      UI_ELEMENTS.messageFeedList.innerHTML = "";
      lastRenderedMessagesVersion = getMessagesVersion();
    }

    return;
  }

  const currentMessagesVersion = getMessagesVersion();

  if (currentMessagesVersion === lastRenderedMessagesVersion) {
    return;
  }

  lastRenderedMessagesVersion = currentMessagesVersion;

  UI_ELEMENTS.messageFeedList.innerHTML = "";

  getMessageFeed().forEach((message) => {
    const item = document.createElement("li");

    item.classList.add("message-feed-item");

    if (message.isLeaving) {
      item.classList.add("is-leaving");
    }

    item.textContent = message.text;

    UI_ELEMENTS.messageFeedList.appendChild(item);
  });
}

function updateObservationArea() {
  const observationUnlocked = isSystemUnlocked("observation");

  UI_ELEMENTS.observationArea.hidden = !observationUnlocked;

  if (!observationUnlocked) {
    return;
  }

  UI_ELEMENTS.totalClicksDisplay.textContent = gameState.stats.totalClicks;
  UI_ELEMENTS.totalPointsEarnedDisplay.textContent =
    gameState.stats.totalPointsEarned;
  UI_ELEMENTS.unlockedMilestonesDisplay.textContent =
    gameState.progression.unlockedMilestones.length;
}

function updateIdeasArea() {
  const ideasUnlocked = isSystemUnlocked("ideas");

  UI_ELEMENTS.ideasArea.hidden = !ideasUnlocked;

  if (!ideasUnlocked) {
    return;
  }

  UI_ELEMENTS.ideasCounter.textContent = getResource("ideas");
}

function updateRecordsArea() {
  const recordsUnlocked = isSystemUnlocked("records");

  UI_ELEMENTS.recordsArea.hidden = !recordsUnlocked;

  if (!recordsUnlocked) {
    return;
  }

  UI_ELEMENTS.recordsList.innerHTML = "";

  gameState.records.milestoneHistory.forEach((milestone) => {
    const item = document.createElement("li");

    item.innerHTML = `
			<strong>${milestone.name}</strong>
			<span>${milestone.description}</span>
		`;

    UI_ELEMENTS.recordsList.appendChild(item);
  });
}
