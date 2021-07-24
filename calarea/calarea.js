var options = document.querySelectorAll(".area input");
var continueBtn = document.getElementById("continue");

continueBtn.addEventListener("click",clickHandler);

var optionOne = document.getElementById("option-1");
var optionTwo = document.getElementById("option-2");
var optionThree = document.getElementById("option-3");

var buttonCalculate = document.querySelectorAll(".hypo-submit-btn")

var areaOutput = document.querySelectorAll(".area-output")

function clickHandler(){
    
    optionThree.classList.add("hidden");
    optionOne.classList.add("hidden");
    optionTwo.classList.add("hidden");

    if (options[0].checked){
        optionOne.classList.remove("hidden");
        buttonCalculate[0].addEventListener("click",optionOneCalculate);
    }
    else if (options[1].checked){
        optionTwo.classList.remove("hidden");
        buttonCalculate[1].addEventListener("click",optionTwoCalculate);


    }
    else if (options[2].checked){
        optionThree.classList.remove("hidden");
        buttonCalculate[2].addEventListener("click",optionThreeCalculate);
    }
}

function optionOneCalculate(){
    var inputOne = parseInt(document.getElementById("option-1-input-1").value);
    var inputTwo = parseInt(document.getElementById("option-1-input-2").value);
    if (inputOne > 0 && inputTwo > 0){
        var area = 0.5*(inputOne)*(inputTwo);
        areaOutput[0].innerHTML = "Area = "+area;
    }
}

function optionTwoCalculate(){
    var inputOne = parseInt(document.getElementById("option-2-input-1").value);
    var inputTwo = parseInt(document.getElementById("option-2-input-2").value);
    var inputThree = parseInt(document.getElementById("option-2-input-3").value);
    var sumS = 0
    if (inputOne < inputTwo+inputThree && inputTwo < inputThree+inputOne && inputThree < inputOne+inputTwo){
        sumS =  (inputOne + inputTwo + inputThree)/2;
        var sideSA = sumS - inputOne;
        var sideSB = sumS - inputTwo;
        var sideSC = sumS - inputThree;
        var sideMultiply = sideSA * sideSB * sideSC;
        var area = Math.sqrt(sumS*sideMultiply);
        areaOutput[1].innerHTML = "Area = " + area;
    }
    else{
        areaOutput[1].innerHTML = "Enter valid values(each side length should be less than sum of other two sides) ";
    }
}

function optionThreeCalculate(){
    var inputOne = parseInt(document.getElementById("option-3-input-1").value);
    var inputTwo = parseInt(document.getElementById("option-3-input-2").value);
    var inputThree = parseInt(document.getElementById("option-3-input-3").value);
    if (inputOne > 0 && inputTwo > 0 && inputThree > 0){
        var radValue = inputThree*(Math.PI/180.0)
        var area =  (inputOne * inputTwo * Math.sin(radValue))/2
        areaOutput[2].innerHTML = "Area = " + area;
    }
}