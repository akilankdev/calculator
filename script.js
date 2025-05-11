let calculation = localStorage.getItem("calculation") || "";

showCalculation();

function showCalculation() {
  let paraElement = document.querySelector(".js-show-calculation");
  paraElement.innerHTML = `${calculation}`;
}

function updateCalculation(value) {
  calculation += value;
  showCalculation();
  localStorage.setItem("calculation", calculation);
}
