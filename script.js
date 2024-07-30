const showBtn = document.getElementById("showMore");
const cardContainer = document.getElementById("portfolio-row");
const hiddenCards = cardContainer.querySelectorAll(".hidden");
// tooltip
const tooltips = document.querySelectorAll(".tt");

const numToShow = 4; // display 4 cards at a time
let currentIndex = 0; // start from the first hidden card

function showNextCards() {
  for (let i = currentIndex; i < currentIndex + numToShow; i++) {
    if (hiddenCards[i]) {
      hiddenCards[i].style.display = "block";
    }
  }
  currentIndex += numToShow;

  if (currentIndex >= hiddenCards.length) {
    showBtn.style.cursor = "not-allowed";
    showBtn.textContent = "No more data to load";
  }
}

showBtn.addEventListener("click", showNextCards);

// tooltip part
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      popperConfig: function (defaultBsPopperConfig) {
        // customize the offset to move the tooltip further down
        const offset = [0, 50]; // [skidding, distance], adjust the distance value as needed
        if (defaultBsPopperConfig.modifiers) {
          defaultBsPopperConfig.modifiers.push({
            name: "offset",
            options: {
              offset: offset,
            },
          });
        }
        return defaultBsPopperConfig;
      },
    });
  });
});

// preloader
window.addEventListener("load", function () {
  setTimeout(function () {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");
    var helloWorld = document.getElementById("hello-world");
    var finalContent = document.getElementById("final-content");

    // hide the loader
    loader.style.display = "none";

    // change the background color of the body
    document.body.style.backgroundColor = "white";

    // show the content with a fade-in effect
    content.style.display = "flex";
    content.style.opacity = 1;

    // slide up the "Hello, World!" after a delay
    setTimeout(function () {
      helloWorld.classList.add("slide-up");

      // display the final content after the slide-up animation
      setTimeout(function () {
        helloWorld.style.display = "none";
        finalContent.style.display = "block";
        finalContent.style.opacity = 1;
        // remove flexbox centering from content div
        content.style.display = "block";
        content.style.width = "auto";
        content.style.height = "auto";
      }, 1000); // slide-up animation duration
    }, 2000); // delay before sliding up "Hello, World!"

    // allow scrolling after loading
    document.body.style.overflow = "auto";
  }, 1000);
});
