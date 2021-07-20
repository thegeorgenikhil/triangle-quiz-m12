var values = document.querySelectorAll("#input");
var submitBtn = document.querySelector("#btn");
var resultDiv = document.querySelector(".result");

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var sideA = values[0].value;
  var sideB = values[1].value;

  if (sideA > 0 && sideB > 0) {
    var sideC = Math.sqrt(sideA * sideA + sideB * sideB);
    resultDiv.innerHTML = "C = " + sideC;
  } else {
    resultDiv.innerHTML = "Input valid values";
  }
}
