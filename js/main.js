const pointsCounter = document.getElementById("pointsCounter");
const mainButton = document.getElementById("mainButton");

let points = 0;

mainButton.addEventListener("click", () => {
  points += 1;
  updateInterface();
});

function updateInterface() {
  pointsCounter.textContent = points;
}