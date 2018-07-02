function initialize(sender, receive) {
  window.addEventListener("message", e => receive(e.data), null);

  return message => sender.postMessage(message, "*");
}
