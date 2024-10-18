const messagesEl = document.getElementById("messages");
const messagesPlaceholderEl = document.getElementById("messagesPlaceholder");
const chatForm = document.forms.messageForm;
const senderIdKey = "senderId";
const tabSenderId = getSenderId();
console.log(tabSenderId);
const sharedWorker = new SharedWorker("worker.js").port;

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.message.value;
  if (message) {
    sharedWorker.postMessage({
      message,
      id: generateUniqueId(),
      senderId: tabSenderId,
    });
    e.target.reset();
    e.target.message.focus();
  }
});

sharedWorker.onmessage = function ({ data }) {
  messagesPlaceholderEl.textContent = "";
  const li = document.createElement("li");
  li.textContent = data.message;
  li.id = data.id;
  li.className =
    data.senderId == tabSenderId
      ? "message-bubble sender"
      : "message-bubble receiver";
  messagesEl.appendChild(li);
};

function generateUniqueId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

function getSenderId() {
  let senderId = sessionStorage.getItem(senderIdKey) || generateUniqueId();
  sessionStorage.setItem(senderIdKey, senderId);
  return senderId;
}
