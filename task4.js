const taskElement = document.getElementById("task");
const scoreElement = document.getElementById("score");
const answerInput = document.getElementById("answerInput");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

let score = 0;
let currentTask = 0;
const totalTasks = 5;
let correctAnswer;

function generateTask() {
    if (currentTask >= totalTasks) {
        finishGame();
        return;
    }
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    correctAnswer = num1 * num2;

    taskElement.textContent = `№${currentTask + 1}: ${num1} × ${num2}`;

    answerInput.value = "";
    resultElement.textContent = "";
    checkButton.disabled = false;
    nextButton.style.display = "none";
}

checkButton.addEventListener("click", () => {
    const userAnswer = parseInt(answerInput.value, 10);

    if (!isNaN(userAnswer)) {
        if (userAnswer === correctAnswer) {
            resultElement.textContent = "правильно";

            score++;
        } else {
            resultElement.textContent = `помилка, правильна відповідь: ${correctAnswer}`;
        }

        currentTask++;
        scoreElement.textContent = `${score}/${currentTask}`;

        checkButton.disabled = true;
        nextButton.style.display = "inline-block";
    } else {
        resultElement.textContent = "введи число";
    }
});

nextButton.addEventListener("click", generateTask);

function finishGame() {
    resultElement.textContent = `рахунок: ${score}/${totalTasks}`;
}

generateTask();