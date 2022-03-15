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
    correctAnswers = 0;
    if (span6.innerHTML === "-"){
         if (question1.value === "26"){
            document.getElementById("span1").innerHTML = "Correct!"
            correctAnswers++;
            question1.classList.add("correct")
            document.getElementById("span9").innerHTML = "Are you even trying?"
        } else {
            document.getElementById("span1").innerHTML = "Incorrect!"
            question1.classList.add("incorrect")
        } if (question2.value.toLowerCase() === "thunderjaw" ||question2.value.toLowerCase() === "the thunderjaw"){
            document.getElementById("span2").innerHTML = "Correct!"
            correctAnswers++
            question2.classList.add("correct")
        } else {
            document.getElementById("span2").innerHTML = "Incorrect!"
            question2.classList.add("incorrect")
        } if (question3.value.toLowerCase() === "focus" || question3.value.toLowerCase() === "the focus"){
            document.getElementById("span3").innerHTML = "Correct!"
            correctAnswers++
            question3.classList.add("correct")
        } else {
            document.getElementById("span3").innerHTML = "Incorrect!"
            question3.classList.add("incorrect")
        } if (question4.value.toLowerCase() === "2017"){
            document.getElementById("span4").innerHTML = "Correct!"
            correctAnswers++
            question4.classList.add("correct")
        } else {
            document.getElementById("span4").innerHTML = "Incorrect!"
            question4.classList.add("incorrect")
        } if (question5.value.toLowerCase() === "horizon forbidden west" ||question5.value.toLowerCase() === "forbidden west"){
            document.getElementById("span5").innerHTML = "Correct!"
            correctAnswers++
            question5.classList.add("correct")
        } else {
            document.getElementById("span5").innerHTML = "Incorrect!"
            question5.classList.add("incorrect")
        } if (correctAnswers === 0){
            document.getElementById("span9").innerHTML = "Are you even trying?"
        } else if (correctAnswers === 1){
         document.getElementById("span9").innerHTML = "Are you even trying?"
        } else if (correctAnswers === 2){
         document.getElementById("span9").innerHTML = "Go back to the about page."
        } else if (correctAnswers === 3){
         document.getElementById("span9").innerHTML = "I mean, you're kind of getting there."
        } else if (correctAnswers === 4){
         document.getElementById("span9").innerHTML = "So close!"
        } else {
            document.getElementById("span9").innerHTML = "Congratulations!"
        }
        span6.innerHTML = correctAnswers;
        span7.innerHTML = correctAnswers * 20
    } else if (span6.innerHTML != "-"){
        document.getElementById("span8").innerHTML = "You can only submit once"
    }
}