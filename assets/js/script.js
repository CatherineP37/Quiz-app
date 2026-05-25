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
let correctAnswers = []

function quiz(index) {
    questionSection.innerHTML = `<p>${questions[index].question}</p>`;
    answers.innerHTML = '';
    questions[index].answerOptions.forEach((option) => {
        answers.innerHTML += `<button class='answer-button'>${option}</button>`;
    })
    let answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach((answerButton) => {
        answerButton.addEventListener('click', (e) => {
            if(e.target.textContent === questions[index].correctAnswer){
                result.innerText = 'Well done! that answer is correct.';
                e.target.style.backgroundColor = 'green';        
            } else {
                result.innerText = 'That answer is not correct.';
                e.target.style.backgroundColor = 'red';
            }
        })
    })
    nextButton.addEventListener('click', () => {
      if(questionIndex === questions.length){
        questionIndex = 0;
      } else {
        questionIndex++;
      }
      quiz(questionIndex);
    })
}

quiz(questionIndex);