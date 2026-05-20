const questions = [
    {
    question: 'What does CSS stand for?',
    answerOptions: ['Clean Spotty Socks','Clean Style Sheets','Cascading Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
},
{
    question: 'When was JavaScript invented?',
    answerOptions: ['1995','1997','2003'],
    correctAnswer: '1995',
},
]

const questionSection = document.querySelector('.question-section');
const answers = document.querySelector('.answers');
const answerSection = document.querySelector('answer-section');
let questionIndex = 0;

function quiz() {
    questionSection.innerHTML = `<p>${questions[questionIndex].question}</p>`;
    questions[questionIndex].answerOptions.forEach((option) => {
        answers.innerHTML += `<button>${option}</button>`;
    })
}

quiz();