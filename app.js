let hunger = 50;
let happiness = 50;
let energy = 50;

let feed = () => {
  console.log("Feed Function");
  if (hunger > 0 && hunger < 80) {
    hunger = hunger - 20;
  }
  if (happiness < 100) {
    happiness = happiness + 20;
  }
  displayInfo();
};
function pet() {
  if (happiness < 100) {
    happiness = happiness + 10;
  }
  displayInfo();
}
function play() {
  if (happiness < 100) {
    happiness = happiness + 40;
  }
  if (hunger > 0 && hunger < 70) {
    hunger = hunger + 30;
  }
  if (energy > 0) {
    energy = energy - 40;
  }
  displayInfo();
}

//increase happiness & decrease play
function displayInfo() {
  document.getElementById("hungerPoints").innerHTML = hunger;
  document.getElementById("happinessPoints").innerHTML = happiness;
  document.getElementById("energyPoints").innerHTML = energy;
}

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }
  gauge.querySelector(".gaugeFill").style.transform = `rotate (${
    value / 2
  }turn)`;
  gauge.querySelector(".gaugeCover").textContent = `(${Math.round}value*100)%`;
}

setGaugeValue(gaugeElement, 0.3);
