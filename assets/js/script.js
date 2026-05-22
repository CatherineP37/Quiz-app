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
const nextButton = document.getElementById('next');
const result = document.getElementById('result');

function quiz() {
    questionSection.innerHTML = `<p>${questions[questionIndex].question}</p>`;
    questions[questionIndex].answerOptions.forEach((option) => {
        answers.innerHTML += `<button='answer-button'>${option}</button>`;
    })
    let buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.textContent === questions[questionIndex].correctAnswer){
                result.innerText = 'Well done! that answer is correct.';             
            } else {
                result.innerText = 'That answer is not correct.';
            }
        })
    })
    nextButton.addEventListener('click', () => {
        if(questionIndex === questions.length - 1){
            questionIndex = 0;
        } else {
            questionIndex++;
        }
        quiz();
    })

    
}

quiz();