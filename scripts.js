var redColor = 0;
var greenColor = 0;
var blueColor = 0;

var colorShow = document.getElementById("color-show");

function onLoad() {
  document.getElementById("red-value-box").innerHTML = 0;
  document.getElementById("green-value-box").innerHTML = 0;
  document.getElementById("blue-value-box").innerHTML = 0;
  colorShow.style.background = "#000000";
}

document.getElementById("red").addEventListener("input", (event) => {
  const { value } = event.target;
  redColor = value;
  document.getElementById("red-value-box").innerHTML = value;
});

document.getElementById("green").addEventListener("input", (event) => {
  const { value } = event.target;
  greenColor = value;
  document.getElementById("green-value-box").innerHTML = value;
});

document.getElementById("blue").addEventListener("input", (event) => {
  const { value } = event.target;
  blueColor = value;
  document.getElementById("blue-value-box").innerHTML = value;
});

document.getElementById("range-sliders").addEventListener("input", () => {
  colorShow.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
});
