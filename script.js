const name = prompt("Please enter your name:");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    let totalScore = 0;

    for (const pair of formData.entries()) {
      totalScore += parseInt(pair[1]);
    }

    const averageScore = totalScore / 4;
    resultDiv.textContent = `Average Score: ${averageScore.toFixed(2)}`;

    if (averageScore > 5) {
      alert(`Happy ${name}! 😍💃🏻`);
    } else {
      alert(`Sad ${name}! 🙁💔`);
    }
  });
});
