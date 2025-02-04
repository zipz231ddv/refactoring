const taskElement = document.getElementById('task');
const scoreElement = document.getElementById('score');
const optionsForm = document.getElementById('optionsForm');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

let score = 0;
let currentTask = 0;
let totalTasks = parseInt(prompt('введи кількість завдань', '5'), 10) || 5;
let correctAnswer;

function generateTask() {
    if (currentTask >= totalTasks) {
        finishGame();
        return;
    }
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    correctAnswer = num1 * num2;

    taskElement.textContent = `№ ${currentTask + 1}: ${num1} × ${num2}`;

    const answers = [correctAnswer];
    while (answers.length < 4) {
        const wrongAnswer = Math.floor(Math.random() * 50) + 1;
        if (!answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }
    answers.sort(() => Math.random() - 0.5);
    //ref
    optionsForm.innerHTML = '';

issues2
    const labels = optionsForm.querySelectorAll('label');
    labels.forEach((label, index) => {
        const input = label.querySelector('input');
        const span = label.querySelector('span');
        input.value = answers[index];
        span.textContent = answers[index];
        input.checked = false;
    });
    resultElement.textContent = '';
}

optionsForm.addEventListener('change', (event) => {
    const selectedAnswer = parseInt(event.target.value, 10);

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'правильно';
        score++;
    } else {
        resultElement.textContent = `помилка, правильна відповідь: ${correctAnswer}`;
    }

    currentTask++;
    scoreElement.textContent = `${score}/${currentTask}`;
 issues2
    //ref
    toggleInputs(false);
});

nextButton.addEventListener('click', () => {
    //ref
    toggleInputs(true);

    generateTask();
});

function finishGame() {
    resultElement.textContent = `рахунок ${score}/${totalTasks}`;
    nextButton.disabled = true;
}

generateTask();
