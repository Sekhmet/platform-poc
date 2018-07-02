const btn = document.getElementById("btn");
const log = document.getElementById("log");

const sendMessage = initialize(window.parent, receive);

function receive(message) {
  console.log(message);
  switch (message.id) {
    case "BOUGHT":
      log.innerText = "Bought!";
      break;
  }
}

btn.addEventListener("click", () => {
  sendMessage({ id: "BUY", amount: "20" });
});
