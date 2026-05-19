import { GAME_CONFIG } from "../config.js";
import { gameState } from "../core/state.js";
import { unlockSystem } from "./unlocks.js";

let messageTimer = null;

export function unlockMessages() {
  unlockSystem("messages");
}

export function showMessage(message) {
  unlockMessages();

  const messageData = {
    text: message,
    createdAt: Date.now(),
  };

  gameState.messages.queue.push(messageData);
  gameState.messages.history.push(messageData);

  processMessageQueue();
}

export function clearMessage() {
  gameState.messages.currentMessage = "";
}

export function hasMessage() {
  return gameState.messages.currentMessage.trim() !== "";
}

export function getCurrentMessage() {
  return gameState.messages.currentMessage;
}

function processMessageQueue() {
  const hasCurrentMessage = gameState.messages.currentMessage !== "";
  const hasQueuedMessages = gameState.messages.queue.length > 0;

  if (hasCurrentMessage || !hasQueuedMessages) {
    return;
  }

  const nextMessage = gameState.messages.queue.shift();

  gameState.messages.currentMessage = nextMessage.text;

  messageTimer = setTimeout(() => {
    clearMessage();
    messageTimer = null;
    processMessageQueue();
  }, GAME_CONFIG.ui.messageDuration);
}
