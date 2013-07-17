var questions = [{ 
    question: "What is my name?",
    choices: ["Dorian", "David", "Bill", "George"],
    correctAnswer: 0
}];

$(document).ready(function () {
  $('#question').text(questions[0].question);
  $('#ans0').text(' text');
  $('#ans1').text(' text');
  $('#ans2').text(' text');
  $('#ans3').text(' text');

  $('button').on('click', function () {
    // run this function on click. Will use to advance question and talley score.
  });
});