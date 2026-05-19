import { gameState } from "../core/state.js";
import { getResource } from "../systems/resources.js";
import { isSystemUnlocked } from "../systems/unlocks.js";
import { getMessageFeed, hasMessages } from "../systems/messages.js";
import { UI_ELEMENTS } from "./uiElements.js";

export function updateUI() {
  updatePointsCounter();
  updateMessageFeed();
  updateObservationArea();
  updateIdeasArea();
  updateDiscoveriesArea();
}

function updatePointsCounter() {
  UI_ELEMENTS.pointsCounter.textContent = getResource("points");
}

let lastMessageFeedSignature = "";

function updateMessageFeed() {
  const messagesUnlocked = isSystemUnlocked("messages");
  const hasVisibleMessages = hasMessages();

  UI_ELEMENTS.messageFeedArea.hidden = !messagesUnlocked || !hasVisibleMessages;

  if (!messagesUnlocked || !hasVisibleMessages) {
    if (lastMessageFeedSignature !== "") {
      UI_ELEMENTS.messageFeedList.innerHTML = "";
      lastMessageFeedSignature = "";
    }

    return;
  }

  const messageFeed = getMessageFeed();

  const currentSignature = messageFeed
    .map((message) => `${message.id}:${message.isLeaving}`)
    .join("|");

  if (currentSignature === lastMessageFeedSignature) {
    return;
  }

  lastMessageFeedSignature = currentSignature;

  UI_ELEMENTS.messageFeedList.innerHTML = "";

  messageFeed.forEach((message) => {
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

function updateDiscoveriesArea() {
  const discoveriesUnlocked = isSystemUnlocked("discoveries");

  UI_ELEMENTS.discoveriesArea.hidden = !discoveriesUnlocked;

  if (!discoveriesUnlocked) {
    return;
  }

  UI_ELEMENTS.discoveriesList.innerHTML = "";

  gameState.discoveries.MilestoneHistory.forEach((discovery) => {
    const item = document.createElement("li");

    item.innerHTML = `
			<strong>${discovery.name}</strong>
			<span>${discovery.description}</span>
		`;

    UI_ELEMENTS.discoveriesList.appendChild(item);
  });
}
