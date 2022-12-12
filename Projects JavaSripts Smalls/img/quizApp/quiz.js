let data = [
  {
    id: 1,
    question: "What's JSON?",
    answers: [
      {answer: "Java Script Object None", isCorrect: false},
      {answer: "Java Script Object Notaion", isCorrect: true},
      {answer: "Java Script Object Neer", isCorrect: false},
      {answer: "Java Script Object Navigation", isCorrect: false},
    ],
  },
  {
    id: 2,
    question: "What's HTML?",
    answers: [
      {answer: "Hyper Text Model Language", isCorrect: false},
      {answer: "Hyper Text Markup Line", isCorrect: false},
      {answer: "Hyper Text Markup Language", isCorrect: true},
      {answer: "Higher Text Markup Language", isCorrect: false},
    ],
  },
  {
    id: 3,
    question: "What's WWW?",
    answers: [
      {answer: "World Wied Web", isCorrect: true},
      {answer: "World Weight Web", isCorrect: false},
      {answer: "World Wied Width", isCorrect: false},
      {answer: "World Wied Weber", isCorrect: false},
    ],
  },
  
];

let answer = document.querySelectorAll(".answer .radio");
let label = document.querySelectorAll(".answer .radio label");
let answers = document.querySelector(".answers");
let submit = document.querySelector(".submit");
let question = document.querySelector(".question");

// let reuslt = document.querySelector(".result");
// let playAgain = document.querySelector(".play-again");
// let correct = document.querySelector(".correct");
// let wrong = document.querySelector(".wrong");

