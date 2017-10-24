// main
window.onload = () => {
  // activateInfoMessages();
  activateClickableCells();
  // repositionPopupDiv();
};

function repositionPopupDiv() {
  
}

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
  const clickableCells = document.querySelectorAll("div.clickable");
  for (let cell of clickableCells) {
    const lightboxLink = cell.querySelector("a[data-lightbox]");
    const link = cell.querySelector("a");
    const img = cell.querySelector("img");
    // Activate a link image
    // That isn't controlled by lightbox
    if (!lightboxLink && link && img) {
      img.onclick = (e) => {
        link.click();
      }
    }
  }
}