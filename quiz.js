var questions = [
  { 
    question: "What is my name?",
    choices: ["David", "ZenStunna", "Bill", "George"],
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
    question: "Which OS is my favorite?",
    choices: ["Window 7", "Windows 8", "Linux", "Mac OS"],
    correctAnswer: 3  
  },
];

$(document).ready(function () {
  var maxQuestions = questions.length;
  var numRight = 0;
  var counter = 0;

  if (counter >= maxQuestions) {
      document.getElementById('results').innerHTML=
        "Quiz is over. You got ", numRight, " out of ", maxQuestions);
      return;
  }

    // display first question
    $('#question').text(questions[counter].question);

    $('#ans0').text(questions[counter].choices[0]);
    $('#ans1').text(questions[counter].choices[1]);
    $('#ans2').text(questions[counter].choices[2]);
    $('#ans3').text(questions[counter].choices[3]);

    $('button').on('click', function () {
      var answer = ($('input[name="answers"]:checked').val());

      // increment score if right
      if (answer == questions[counter].correctAnswer)
        numRight++;

      counter++;



      // Show next question
      $('#question').text(questions[counter].question);
      $('#ans0').text(questions[counter].choices[0]);
      $('#ans1').text(questions[counter].choices[1]);
      $('#ans2').text(questions[counter].choices[2]);
      $('#ans3').text(questions[counter].choices[3]);

    });
  });