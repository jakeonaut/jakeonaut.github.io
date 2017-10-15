// main
window.onload = () => {
  // activateInfoMessages();
  // activateClickableCells();
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
  const clickableCells = document.querySelectorAll("td.clickable");
  for (let cell of clickableCells) {
    // Activate a lightbox...
    const lightboxLink = cell.querySelector("a[data-lightbox]");
    if (lightboxLink) {
      cell.onclick = (e) => {
        lightbox.start($(lightboxLink));
        e.stopPropagation();
      }
      continue;
    } else {

      // Activate a link...
      const link = cell.querySelector("a");
      // if (link) {
      //   cell.onclick = (e) => {
      //     link.click();
      //     e.stopPropagation();
      //   }
      // }

      // Activate a link image
      const img = cell.querySelector("img");
    }
  }
}