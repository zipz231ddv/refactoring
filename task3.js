const taskElement = document.getElementById('task');
const scoreElement = document.getElementById('score');
const optionsForm = document.getElementById('optionsForm');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

let score = 0;
let currentTask = 0;
let totalTasks = parseInt(prompt('Введи кількість завдань', '5'), 10) || 5;
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
    answers.sort(() => 0.5 - Math.random()); 

    optionsForm.innerHTML = '';

    answers.forEach(answer => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');

        input.type = 'radio';
        input.name = 'answer';
        input.value = answer;
        span.textContent = answer;

        label.appendChild(input);
        label.appendChild(span);
        optionsForm.appendChild(label);
    });

    resultElement.textContent = '';
    toggleInputs(true);
}

optionsForm.addEventListener('change', (event) => {
    const selectedAnswer = parseInt(event.target.value, 10);

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Правильно!';
        score++;
    } else {
        resultElement.textContent = `Помилка, правильна відповідь: ${correctAnswer}`;
    }

    currentTask++;
    scoreElement.textContent = `${score}/${currentTask}`;

    toggleInputs(false);
});

nextButton.addEventListener('click', () => {
    if (currentTask >= totalTasks) {
        return;
    }
    generateTask();
});

function toggleInputs(enabled) {
    const inputs = optionsForm.querySelectorAll('input');
    inputs.forEach(input => input.disabled = !enabled);
}

function finishGame() {
    resultElement.textContent = `Гра завершена! Рахунок: ${score}/${totalTasks}`;
    nextButton.disabled = true;
}

generateTask();
