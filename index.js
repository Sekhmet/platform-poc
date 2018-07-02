const iframe = document.getElementById("app");
const button = document.getElementById("btn");

const sendMessage = initialize(iframe.contentWindow, receive);

let signingPayload = null;

function receive(message) {
  switch (message.id) {
    case "BUY": {
      button.disabled = false;
      button.innerText = `Buy this item for ${message.amount} STEEM`;
      signingPayload = message;
    }
  }
}

button.addEventListener("click", () => {
  sendMessage({
    id: "BOUGHT",
    tx: "asdf"
  });
});
