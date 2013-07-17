// Way too much repeated code.
// Make show questions and answers a function

var questions = [
  { 
    question: "What is my name?",
    choices: ["David", "Dorian", "Bill", "George"],
    correctAnswer: 1
  },
  {
    question: "What is my age?",
    choices: ["20", "25", "30", "35"],
    correctAnswer: 2  
  },
  {
  question: "What is my favorite color?",
  choices: ["blue", "green", "orange", "red"],
  correctAnswer: 0  
  },
  {
  question: "How tall am I?",
  choices: ["5-10", "5-11", "6-0", "6-1"],
  correctAnswer: 2  
  },
  {
  question: "Which OS os my favorite?",
  choices: ["Window 7", "Windows 8", "Linux", "Mac OS"],
  correctAnswer: 3  
  },
];

$(document).ready(function () {
  // Show initial question
  var questionNum = 0;
  $('#question').text(questions[questionNum].question);
  $('#ans0').text(questions[questionNum].choices[0]);
  $('#ans1').text(questions[questionNum].choices[1]);
  $('#ans2').text(questions[questionNum].choices[2]);
  $('#ans3').text(questions[questionNum].choices[3]);

  $('button').on('click', function () {
    // Show follow up questions
    // run this function on click. Will use to advance question and talley score.
  });
});