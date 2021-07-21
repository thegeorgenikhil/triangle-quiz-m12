var input = document.querySelectorAll("input");
var submitBtn = document.querySelector("#btn")
var outputDiv = document.querySelector(".result")

submitBtn.addEventListener("click",clickHandler)

var answerList = ["answer1", "answer2", "answer1", "answer1", "answer1", "answer2", "answer2", "answer3", "answer3", "answer3" ];

function clickHandler(){
    var list = [];
    for (var i = 0;i < input.length;i++){
        if (input[i].checked == true){
            list.push(input[i].value)
        }
    }
    if (list.length === answerList.length){
        var score = 0;
        submitBtn.style.display = "none"
        for (var i = 0; i < list.length;i++){
            var questionId = "question"+(i+1)
            var questionDiv = document.getElementById(questionId)
            if (list[i] === answerList[i]){
                questionDiv.style.backgroundColor = "green";
                score ++;
            }
            else{
                questionDiv.style.backgroundColor = "red";
            }
        }
        outputDiv.innerHTML = "Your score is:" + score
    }
}