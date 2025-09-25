const secretNumber = Math.floor(Math.random() * 100) + 1;
const result = document.getElementById("result");
const input = document.getElementById("guess");

document.getElementById("checkBtn").addEventListener("click", () => {
  const guess = Number(input.value);

  if (!guess) {
    return (result.textContent = "Enter a number!");
  }

  if (guess === secretNumber) {
    result.textContent = "Congratulations, you guessed it!";
  } else if (guess < secretNumber) {
    result.textContent = "Try more!";
  } else {
    result.textContent = "Try less!";
  }
});
