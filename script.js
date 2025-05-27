function submitAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  let score = 0;

  if (q1 && q1.nextSibling.textContent.trim().startsWith("C")) {
    score++;
  }

  document.getElementById("result").textContent = `You scored ${score}/1`;
}
