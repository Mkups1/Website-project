// Quiz javascript

let question1 = document.getElementById("q1")
let question2 = document.getElementById("q2")
let question3 = document.getElementById("q3")
let question4 = document.getElementById("q4")
let question5 = document.getElementById("q5")
let correctAnswers = 0;

// Event listener
document.getElementById("button").addEventListener("click", submit)
// Event function
function submit(){
    
    if (question1.value === "26"){
        document.getElementById("span1").innerHTML = "Correct!"
        correctAnswers++;
    }else if (question1.value != "26"){
        document.getElementById("span1").innerHTML = "Incorrect!"
    } if (question2.value.toLowerCase() === "thunderjaw"){
        document.getElementById("span2").innerHTML = "Correct!"
        correctAnswers++
    }else if (question2.value != "thunderjaw"){
        document.getElementById("span2").innerHTML = "Incorrect!"
    }if (question3.value.toLowerCase() === "focus"){
        document.getElementById("span3").innerHTML = "Correct!"
        correctAnswers++
    }else if (question3.value != "focus"){
        document.getElementById("span3").innerHTML = "Incorrect!"
    }if (question4.value.toLowerCase() === "2017"){
        document.getElementById("span4").innerHTML = "Correct!"
        correctAnswers++
    }else if (question4.value != "2017"){
        document.getElementById("span4").innerHTML = "Incorrect!"
    }if (question5.value.toLowerCase() === "horizon forbidden west"){
        correctAnswers++
        document.getElementById("span5").innerHTML = "Correct!"
    }else if (question5.value != "horizon forbidden west"){
        document.getElementById("span5").innerHTML = "Incorrect!"
    } if (correctAnswers === 5){
        document.getElementById("span6").innerHTML = "5/5 (100%)"
    } else if (correctAnswers === 4){
        document.getElementById("span6").innerHTML = "4/5 (80%)"
    } else if (correctAnswers === 3){
        document.getElementById("span6").innerHTML = "3/5 (60%)"
    } else if (correctAnswers === 2){
        document.getElementById("span6").innerHTML = "2/5 (40%)"
    } else if (correctAnswers === 1){
        document.getElementById("span6").innerHTML = "1/5 (20%)"
    }
}