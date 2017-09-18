// main
window.onload = () => {
  activateInfoMessages();
  activateClickableCells();
};

function activateInfoMessages() {
  // Enable blinking info messages
  const infoMessages = document.querySelectorAll(".info");
  for (let infoMessage of infoMessages) {
    let counter = 0;
    window.setInterval(() => {
      counter++;
      if (counter == 10) {
        infoMessage.style.visibility = "hidden";
      } else if (counter == 15) {
        infoMessage.style.visibility = "";
        counter = 0;
      }
    }, 100);
  }
}

function activateClickableCells() {
  const clickableCells = document.querySelectorAll("td.clickable");
  for (let cell of clickableCells) {
    const link = cell.querySelector("a");
    if (link) cell.onmouseup = () => {
      link.click();
    }
  }
}