// script.js
function updateProgress() {
  const progressBar = document.getElementById("courseProgress");
  let current = parseInt(progressBar.value);
  if (current < 100) {
    current += 10;
    progressBar.value = current;
    document.getElementById("progressText").innerText = `${current}% Completed`;
  }
}
