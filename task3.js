const taskElement = document.getElementById('task');
const scoreElement = document.getElementById('score');
const optionsForm = document.getElementById('optionsForm');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

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

    answers.forEach((answer) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer;

        const span = document.createElement('span');
        span.textContent = answer;

        label.appendChild(input);
        label.appendChild(span);
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement('br'));
    });
    //ref
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

    const inputs = optionsForm.querySelectorAll('input');
    inputs.forEach((input) => (input.disabled = true));
});

nextButton.addEventListener('click', () => {
    const inputs = optionsForm.querySelectorAll('input');
    inputs.forEach((input) => (input.disabled = false));
    generateTask();
});

function finishGame() {
    resultElement.textContent = `рахунок ${score}/${totalTasks}`;
    nextButton.disabled = true;
}

generateTask();
