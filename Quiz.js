const quiz = [
  { question: "What is the capital of Ethiopia ?", answer: "Addis ababa" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "What color is the sky on a clear day?", answer: "Blue" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = prompt(quiz[i].question);
    
    if (userAnswer.toLowerCase() === quiz[i].answer.toLowerCase()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is ${quiz[i].answer}`);
    }
  }

  alert(`Quiz finished! Your score is ${score}/${quiz.length}`);
}

// Start the quiz
runQuiz();
