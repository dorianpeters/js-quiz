var questions = [{ 
    question: "What is my name?",
    choices: ["Dorian", "David", "Bill", "George"],
    correctAnswer: 0
}];

$(document).ready(function () {
  $('#question').text(questions[0].question);
  $('#ans0').text(questions[0].choices[0]);
  $('#ans1').text(questions[0].choices[1]);
  $('#ans2').text(questions[0].choices[2]);
  $('#ans3').text(questions[0].choices[3]);

  $('button').on('click', function () {
    // run this function on click. Will use to advance question and talley score.
  });
});