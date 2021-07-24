var values = document.querySelectorAll(".input")
var submitBtn = document.querySelector(".submit-btn")
var outputDiv = document.querySelector(".message-box")

submitBtn.addEventListener("click",clickHandler)

function clickHandler(){
    var list = []
    for (var i = 0; i < values.length;i++){
        list.push(parseInt(values[i].value));
    }
    if (list[0] > 0 && list[1] > 0 && list[2] > 0){
        var sum = 0;
        for (var i =0; i < list.length ;i++){
            sum += list[i]
        }
        console.log(sum)
        if (sum === 180){
            outputDiv.innerHTML = "These angles make up a triangle"
        }
        else{
            outputDiv.innerHTML = "These angles do not make up a triangle"
        }

    }else{
        outputDiv.innerHTML = "Enter valid values"
    }
}