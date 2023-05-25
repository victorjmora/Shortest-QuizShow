const quizContainer = document.getElementById("quizContainer");
const startbtn = document.getElementById("Start");
const introContainer = document.getElementById("intro");
const questionContainer = document.getElementById("question");
const timerCntainer = document.getElementById("timer");
const submitButton = document.getElementById("submit");

let timeleft = 75;
let currentQuestion = 0;
let score = 0;3ee
let timeInt;

let quizQuestions = [
  {
    question: "What does CSS stand for?",
    Options: [
      "Cascading Style Sheet",
      "Coding Style Sheet",
      "Changing Script Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "What does the value Boolean express?",
    Options: ["True or False", "Number", "String", "Data"],
    answer: "True or False",
  },
  {
    question: "What is an array?",
    Options: [
        "Structure of data consisting of variables or values",
        "A div in an html file",
        "A programming language",
        "Another word for ID",
    ],
    answer: "Structure of data consisting of variables or values",
},
{
    question: "What is a semicolon used for in programming?",
    Options: [
        "To create a string",
        "To express the ending of a statement",
        "To extend a statement in a funtion",
        "As an event symbol",
    ],
    answer: "To express the ending of a statement",
},
{
    question: "Jquery is to JS what CSS is to what programming language?",
    options: [
        "Python",
        "HTML",
        "Bootstrap",
        "C++",
    ],
    answer: "Bootstrap",
}
];

function showQuestion(index) {
  const questions = document.querySelectorAll(".question");
  const options = document.querySelectorAll(".options");

  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.add("showNone");
    options[i].classList.add("showNone");
  }

  questions[index].classList.remove("showNone");
  options[index].classList.remove("showNone");
}

function moveToNextQuestion() {
  if(currentQuestion < quizQuestions.length -1) {
    currentQuestion++;
    showQuestion(currentQuestion);
} else {
  clearInterval(timeInt);
  const scoreElem = document.createElement("h2");
  scoreElem.textContent = 'Your Score is: ${timeleft} seconds';
  while (quizContainer.firstChild) {
    quizContainer.removeChild(quizContainer.firstChild);
  }
  quizContainer.appendChild(scoreElem);
}

quizQuestions.forEachFunction (question, index) 
const questionElem = document.createElement("h2");
questionElem.textContent =
"Question" +(index + 1) + " : " + question;

questionElem.classList.add("question");

const optionsElem = document.createElement("div");
optionsElem.classList.add("options");
question.options.forEach(function (option) {
  const optionsElem = document.createElement("button");
  optionsElem.addEventListener("click", function() {
if (option === question.answer) {
  moveToNextQuestion();
} else{
  timeleft <= 5;
}
  });
  optionsElem.textContent = option;
  optionsElem.appendChild(optionsElem);
});

function startGame() {
  introContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
}
startbtn.addEventListener("click", startGame)}
