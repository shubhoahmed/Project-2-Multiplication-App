const number1 = Math.ceil(Math.random() * 10)
const number2 = Math.ceil(Math.random() * 10)

const questionElement = document.getElementById('question');
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}

scoreElement.innerText = `Score: ${score}`

questionElement.innerText = `What is ${number1} multiply by ${number2}?`;

const correctAns = number1 * number2;

formElement.addEventListener('submit', () => {
    const userAns = +inputElement.value;
    if (userAns === correctAns) {
        score++
        updateLocalStorage();
    }
    else {
        score--
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}